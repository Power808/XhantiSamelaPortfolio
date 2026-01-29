import ProjectSection from "@/components/ui/ProjectSection";

const allProjects = [
    {
        id: "01",
        title: "MSQ NEXT GEN",
        yearShort: "25",
        category: "Digital & Physical Publishing",
        liveUrl: "https://htmlpreview.github.io/?https://github.com/Power808/msq-next-gen/blob/main/index.html",
        images: [
            { id: "01.1", url: "/assets/projects/msq.png", label: "01.1.1" },
            { id: "01.2", url: "/assets/projects/msq.png", label: "01.1.2" },
        ]
    },
    {
        id: "02",
        title: "DIGITAL FINTECH",
        yearShort: "24",
        category: "Product Design",
        images: [
            { id: "02.1", url: "/assets/projects/fintech.png", label: "02.1.1" },
            { id: "02.2", url: "/assets/projects/fintech.png", label: "02.1.2" },
        ]
    },
    {
        id: "03",
        title: "CREATIVE STUDIO",
        yearShort: "23",
        category: "Branding / Web",
        images: [
            { id: "03.1", url: "/assets/projects/studio.png", label: "03.1" },
            { id: "03.2", url: "/assets/projects/studio.png", label: "03.2.1" },
        ]
    },
    {
        id: "04",
        title: "MINIMAL E-COM",
        yearShort: "22",
        category: "E-commerce",
        images: [
            { id: "04.1", url: "/assets/projects/ecom.png", label: "04.1.1" },
        ]
    },
    {
        id: "05",
        title: "AI DASHBOARD",
        yearShort: "24",
        category: "SaaS App",
        images: [
            { id: "05.1", url: "/assets/projects/ai.png", label: "05.1" },
            { id: "05.2", url: "/assets/projects/ai.png", label: "05.2" },
        ]
    }
];

export default function Work() {
    return (
        <div style={{ paddingTop: '4rem' }}>
            <section style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--muted)', marginBottom: '1rem' }}>SELECTED WORK</h1>
                <div className="divider"></div>
            </section>

            <div style={{ display: 'grid', gap: '4rem' }}>
                {allProjects.map((project) => (
                    <div key={project.id} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                        <div>
                            <span style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'block', marginBottom: '0.5rem' }}>{project.id}</span>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.5rem' }}>{project.title}</h2>
                            <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{project.category} — {project.yearShort}</span>
                        </div>

                        <ProjectSection
                            id={project.id}
                            title={project.title}
                            yearShort={project.yearShort}
                            images={project.images}
                            liveUrl={project.liveUrl}
                        />
                    </div>
                ))}
            </div>

            <footer style={{ marginTop: '8rem', paddingBottom: '4rem', textAlign: 'center' }}>
                <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>HAVE A PROJECT IN MIND?</p>
                <a href="mailto:hello@xhanti.com" style={{
                    fontSize: '2rem',
                    fontWeight: 400,
                    textDecoration: 'underline',
                    textUnderlineOffset: '0.2em'
                }}>
                    LET&apos;S TALK
                </a>
            </footer>
        </div>
    );
}
