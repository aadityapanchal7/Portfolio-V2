export default function ThemeScript() {
  const script = `
    try {
      const t = localStorage.getItem('theme') ||
        (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', t === 'dark');
    } catch(e) {}
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
