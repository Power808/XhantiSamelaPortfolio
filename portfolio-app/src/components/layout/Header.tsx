import Link from 'next/link';

export default function Header() {
    return (
        <header style={{
            padding: '1.5rem 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            borderBottom: '1px solid var(--border)',
            position: 'sticky',
            top: 0,
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 100
        }}>
            <div className="brand" style={{ flex: 1 }}>
                <Link href="/" style={{ fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.1em' }}>
                    XHANTILOMZI SAMELA
                </Link>
            </div>

            <nav style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                <Link href="/work" style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em' }}>WORK</Link>
                <Link href="/about" style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em' }}>ABOUT</Link>
            </nav>

            <div className="socials" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em' }}>
                    INSTAGRAM
                </a>
            </div>
        </header>
    );
}
