"use client";

import { useEffect, useState } from "react";

type Track = {
  ok: boolean;
  nowPlaying?: boolean;
  name?: string;
  artist?: string;
  url?: string;
  art?: string | null;
  playedAt?: number | null;
};

function relativeTime(uts: number | null | undefined) {
  if (!uts) return "";
  const diff = Math.floor(Date.now() / 1000) - uts;
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export default function Listening() {
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const res = await fetch("/api/listening");
        const data = (await res.json()) as Track;
        if (active) setTrack(data);
      } catch {
        if (active) setTrack({ ok: false });
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    const t = setInterval(load, 30000); // refresh every 30s
    return () => {
      active = false;
      clearInterval(t);
    };
  }, []);

  // before credentials exist (or on any error) the widget hides entirely.
  if (!loading && (!track || !track.ok)) return null;

  return (
    <div className="mt-5 flex items-center gap-3 border-t border-[var(--rule)] pt-4">
      <span className="font-mono text-[11px] lowercase text-[var(--faint)]">
        {track?.nowPlaying ? "now playing" : "last played"}
      </span>

      {loading ? (
        <span className="font-mono text-xs text-[var(--faint)]">loading…</span>
      ) : (
        <a
          href={track?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-w-0 items-center gap-3"
        >
          {track?.art ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={track.art}
              alt=""
              width={36}
              height={36}
              className="size-9 shrink-0 rounded border border-[var(--rule)] object-cover"
            />
          ) : (
            <span className="size-9 shrink-0 rounded border border-[var(--rule)]" />
          )}

          <span className="min-w-0">
            <span className="flex items-center gap-2">
              {track?.nowPlaying && (
                <span className="relative flex size-1.5 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-[var(--accent)]" />
                </span>
              )}
              <span className="truncate text-[15px] transition-colors group-hover:text-[var(--accent)]">
                {track?.name}
              </span>
            </span>
            <span className="block truncate font-mono text-[11px] text-[var(--muted)]">
              {track?.artist}
              {!track?.nowPlaying && track?.playedAt
                ? ` · ${relativeTime(track.playedAt)}`
                : ""}
            </span>
          </span>
        </a>
      )}
    </div>
  );
}
