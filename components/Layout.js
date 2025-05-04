import Link from 'next/link';
import Image from 'next/image';

const navStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  justifyContent: 'center',
  marginBottom: '2rem'
};

const buttonStyle = {
  padding: '0.6rem 1rem',
  borderRadius: '6px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '0.95rem',
  transition: 'background 0.3s',
  color: '#fff',
  background: '#4a90e2'
};

const weekButtonStyle = {
  ...buttonStyle,
  background: '#666'
};

export default function Layout({ children }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Image
          src="/logo.png"
          alt="Fieldwork Fitness Logo"
          width={200}
          height={200}
        />
      </div>
      <nav style={navStyle}>
        <Link href="/" style={buttonStyle}>Home</Link>
        <Link href="/about" style={buttonStyle}>About</Link>
        <Link href="/contact" style={buttonStyle}>Contact</Link>
        {Array.from({ length: 8 }, (_, i) => (
          <Link
            key={i}
            href={`/week${i + 1}`}
            style={weekButtonStyle}
          >
            Week {i + 1}
          </Link>
        ))}
      </nav>
      <main>{children}</main>
    </div>
  );
}
