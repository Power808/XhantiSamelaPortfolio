export default function ProjectCaseStudy() {
    return (
        <div style={{ paddingTop: '4rem' }}>
            <header style={{ marginBottom: '6rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '1rem' }}>CASE STUDY</div>
                <h1 style={{
                    fontSize: 'clamp(2rem, 6vw, 5rem)',
                    fontWeight: 400,
                    lineHeight: '1.1',
                    fontFamily: 'var(--font-heading)'
                }}>
                    TRANSFORMING THE FINTECH EXPERIENCE THROUGH MINIMALISM.
                </h1>
            </header>

            <section className="case-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '4rem',
                marginBottom: '4rem'
            }}>
                <div className="meta">
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '0.625rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>ROLE</h3>
                        <p style={{ fontSize: '0.875rem' }}>Lead UI/UX Designer & Front-end Developer</p>
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '0.625rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>YEAR</h3>
                        <p style={{ fontSize: '0.875rem' }}>2024</p>
                    </div>
                </div>

                <div className="content">
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--muted)', marginBottom: '4rem' }}>
                        The objective was to create a digital banking interface that eliminates noise and focuses purely on transaction clarity. By utilizing a high-contrast monochrome palette and precision grid systems, we achieved a conversion increase of 40% in the first quarter post-launch.
                    </p>

                    <div style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        background: '#f0f0f0',
                        backgroundImage: 'url(/assets/projects/fintech.png)',
                        backgroundSize: 'cover',
                        marginBottom: '4rem',
                        filter: 'grayscale(100%)'
                    }}></div>

                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 500 }}>THE CHALLENGE</h2>
                    <p style={{ marginBottom: '4rem', lineHeight: '1.6' }}>
                        Modern fintech apps are often cluttered with rewards, ads, and complex charts. Users reported feeling overwhelmed. Our challenge was to distill the &quot;Balance and Pay&quot; workflow into its most essential components without sacrificing functionality.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
                        <div style={{ aspectRatio: '1', background: '#f5f5f5', backgroundImage: 'url(/assets/projects/fintech.png)', backgroundSize: 'cover', filter: 'grayscale(100%)' }}></div>
                        <div style={{ aspectRatio: '1', background: '#f5f5f5', backgroundImage: 'url(/assets/projects/fintech.png)', backgroundSize: 'cover', filter: 'grayscale(100%)' }}></div>
                    </div>

                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 500 }}>THE SOLUTION</h2>
                    <p style={{ lineHeight: '1.6' }}>
                        We implemented a custom design system based on 8px grid units and a &quot;Typography-First&quot; hierarchy. Interactive elements were given subtle micro-animations using Framer Motion to provide tactility in a flat world.
                    </p>
                </div>
            </section>

            <div className="divider" style={{ margin: '4rem 0' }}></div>

            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '4rem' }}>
                <a href="/work" style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>← BACK TO WORK</a>
                <a href="#" style={{ fontSize: '0.875rem' }}>NEXT PROJECT →</a>
            </div>
        </div>
    );
}
