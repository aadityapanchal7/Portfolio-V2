export default function ThemeScript() {
  const script = `
    try {
      // white by default; dark only if the visitor picked it with the toggle
      const t = localStorage.getItem('theme') || 'light';
      document.documentElement.classList.toggle('dark', t === 'dark');
    } catch(e) {}
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
