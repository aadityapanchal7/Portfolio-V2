import { NextResponse } from "next/server";

// keep this dynamic; we cache the upstream call for 30s instead (below).
export const dynamic = "force-dynamic";

type LastfmImage = { size: string; "#text": string };
type LastfmTrack = {
  name: string;
  url: string;
  artist: { "#text": string };
  image: LastfmImage[];
  date?: { uts: string };
  "@attr"?: { nowplaying?: string };
};

export async function GET() {
  const apiKey = process.env.LASTFM_API_KEY;
  const user = process.env.LASTFM_USER;

  // before you add credentials, the widget just quietly hides itself.
  if (!apiKey || !user) {
    return NextResponse.json({ ok: false, reason: "not-configured" });
  }

  const url =
    "https://ws.audioscrobbler.com/2.0/" +
    `?method=user.getrecenttracks&user=${encodeURIComponent(user)}` +
    `&api_key=${apiKey}&format=json&limit=1`;

  try {
    const res = await fetch(url, { next: { revalidate: 30 } });
    if (!res.ok) {
      return NextResponse.json({ ok: false, reason: "lastfm-error" });
    }

    const data = await res.json();
    const track: LastfmTrack | undefined = data?.recenttracks?.track?.[0];
    if (!track) {
      return NextResponse.json({ ok: false, reason: "no-tracks" });
    }

    // last image in the array is the largest; fall back through the list.
    const art =
      [...(track.image ?? [])].reverse().find((i) => i["#text"])?.["#text"] ??
      null;

    return NextResponse.json({
      ok: true,
      nowPlaying: track["@attr"]?.nowplaying === "true",
      name: track.name,
      artist: track.artist?.["#text"] ?? "",
      url: track.url,
      art,
      playedAt: track.date ? Number(track.date.uts) : null,
    });
  } catch {
    return NextResponse.json({ ok: false, reason: "fetch-failed" });
  }
}
