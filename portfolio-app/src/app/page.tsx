import ProjectSection from "@/components/ui/ProjectSection";

const projects = [
  {
    id: "01",
    title: "MSQ NEXT GEN",
    yearShort: "25",
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
    images: [
      { id: "02.1", url: "/assets/projects/fintech.png", label: "02.1.1" },
      { id: "02.2", url: "/assets/projects/fintech.png", label: "02.1.2" },
      { id: "02.3", url: "/assets/projects/fintech.png", label: "02.2.1" },
    ]
  },
  {
    id: "03",
    title: "CREATIVE STUDIO",
    yearShort: "23",
    images: [
      { id: "03.1", url: "/assets/projects/studio.png", label: "03.1" },
      { id: "03.2", url: "/assets/projects/studio.png", label: "03.2.1" },
    ]
  },
  {
    id: "04",
    title: "MINIMAL E-COM",
    yearShort: "22",
    images: [
      { id: "04.1", url: "/assets/projects/ecom.png", label: "04.1.1" },
    ]
  }
];

import NameAnimation from "@/components/ui/NameAnimation";

export default function Home() {
  return (
    <div style={{ paddingTop: '4rem' }}>
      <section className="hero" style={{ paddingBottom: '8rem' }}>
        <NameAnimation />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p style={{
            maxWidth: '450px',
            fontSize: '1.5rem',
            color: 'var(--muted)',
            lineHeight: '1.3',
            textAlign: 'right'
          }}>
            FRONT-END DEVELOPER & UI/UX DESIGNER CRAFTING PREMIUM DIGITAL EXPERIENCES THROUGH MINIMALIST ESTHETICS AND TECHNICAL RIGOR.
          </p>
        </div>
      </section>

      <div className="gallery-header" style={{
        display: 'flex',
        gap: '0.5rem',
        fontSize: '0.625rem',
        fontWeight: 500,
        marginBottom: '1rem',
        paddingTop: '4rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }}>
        <span>PROJECTS</span>
        <span style={{ color: 'var(--muted)' }}>GALLERY</span>
      </div>

      <div className="divider" style={{ margin: 0 }}></div>

      {projects.map((project) => (
        <ProjectSection
          key={project.id}
          id={project.id}
          title={project.title}
          yearShort={project.yearShort}
          images={project.images}
          liveUrl={project.liveUrl}
        />
      ))}

      <footer style={{
        padding: '6rem 0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.75rem',
        color: 'var(--muted)',
        letterSpacing: '0.05em',
        borderTop: '1px solid var(--border)',
        marginTop: '4rem'
      }}>
        <div>© 2026 XHANTILOMZI SAMELA</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="https://linkedin.com/in/xhantilomzi-samela" className="footer-link" target="_blank">LINKEDIN</a>
          <a href="#" className="footer-link" target="_blank">DRIBBBLE</a>
          <a href="https://github.com/Power808" className="footer-link" target="_blank">GITHUB</a>
        </div>
      </footer>
    </div>
  );
}
