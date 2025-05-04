import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link href="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link href="/contact" style={{ marginRight: '1rem' }}>Contact</Link>
        {Array.from({ length: 8 }, (_, i) => (
          <Link
            key={i}
            href={`/week${i + 1}`}
            style={{ marginRight: '1rem' }}
          >
            Week {i + 1}
          </Link>
        ))}
      </nav>
      <main>{children}</main>
    </div>
  );
}
