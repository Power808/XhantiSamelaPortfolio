export default function About() {
    return (
        <div style={{ padding: '4rem 0', maxWidth: '1200px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
                <div className="bio-label">
                    <h1 style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--muted)' }}>ABOUT</h1>
                </div>

                <div className="bio-content">
                    <h2 style={{
                        fontSize: '2.5rem',
                        lineHeight: '1.2',
                        fontWeight: 400,
                        marginBottom: '2rem',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        I CREATE DIGITAL EXPERIENCES AT THE INTERSECTION OF DESIGN AND TECHNOLOGY.
                    </h2>

                    <p style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
                        As a Front-end Developer and UI/UX Designer, I specialize in building highly interactive, accessible, and performant web applications. My approach combines minimalist aesthetics with rigorous technical execution.
                    </p>

                    <div className="divider" style={{ margin: '3rem 0' }}></div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '0.75rem', fontWeight: 600, marginBottom: '1rem' }}>SERVICES</h3>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: '2' }}>
                                <li>UI/UX DESIGN</li>
                                <li>FRONT-END DEVELOPMENT</li>
                                <li>INTERACTION DESIGN</li>
                                <li>DESIGN SYSTEMS</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '0.75rem', fontWeight: 600, marginBottom: '1rem' }}>STACK</h3>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: '2' }}>
                                <li>REACT / NEXT.JS</li>
                                <li>TYPESCRIPT</li>
                                <li>CSS / TAIWIND</li>
                                <li>FRAMER MOTION</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
