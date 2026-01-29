"use client";

import { useState } from "react";
import Modal from "./Modal";

import Image from "next/image";

interface ProjectImage {
    id: string;
    url: string;
    label: string;
}

interface ProjectSectionProps {
    id: string;
    title: string;
    yearShort: string;
    images: ProjectImage[];
    liveUrl?: string;
}

export default function ProjectSection({ title, yearShort, images, liveUrl }: ProjectSectionProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="project-section" style={{ borderBottom: '1px solid var(--border)', padding: '2rem 0' }}>
            <div className="section-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 150px) 1fr', gap: '2rem' }}>
                <div className="project-info" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <h2 style={{ fontSize: '0.75rem', fontWeight: 500, margin: 0 }}>{title}</h2>
                        <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{yearShort}</span>
                    </div>
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '0.625rem',
                                color: 'var(--foreground)',
                                textDecoration: 'none',
                                border: '1px solid var(--border)',
                                padding: '0.5rem',
                                textAlign: 'center',
                                marginTop: '1rem',
                                letterSpacing: '0.1em',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--foreground)';
                                e.currentTarget.style.color = 'var(--background)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = 'var(--foreground)';
                            }}
                        >
                            VIEW LIVE →
                        </a>
                    )}
                </div>

                <div className="project-gallery-container" style={{ position: 'relative' }}>
                    <div className="project-gallery" style={{
                        display: 'flex',
                        gap: '1.5rem',
                        overflowX: 'auto',
                        paddingBottom: '0.5rem',
                        WebkitOverflowScrolling: 'touch'
                    }}>
                        {images.map((image) => (
                            <div key={image.id} className="gallery-item" style={{ minWidth: '150px', flexShrink: 0 }}>
                                <div style={{ fontSize: '0.625rem', marginBottom: '0.5rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>
                                    {image.label}
                                </div>
                                <div
                                    className="image-box"
                                    onClick={() => setSelectedImage(image.url)}
                                    style={{
                                        aspectRatio: '1',
                                        backgroundColor: '#fafafa',
                                        backgroundImage: `url(${image.url})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        filter: 'grayscale(100%)',
                                        transition: 'filter 0.4s ease',
                                        cursor: 'zoom-in',
                                        border: '1px solid #f0f0f0'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.filter = 'grayscale(0%)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.filter = 'grayscale(100%)';
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
                {selectedImage && (
                    <div style={{ position: 'relative', width: '80vw', height: '80vh' }}>
                        <Image
                            src={selectedImage}
                            alt="Project detail"
                            fill
                            style={{
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                )}
            </Modal>

            <style jsx global>{`
        .project-gallery::-webkit-scrollbar {
          display: none;
        }
        .project-gallery {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
        </section>
    );
}
