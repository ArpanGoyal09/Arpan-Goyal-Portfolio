import { FiExternalLink, FiAward } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import portfolioData from '../data/portfolioData';

function CertCard({ cert, delay }) {
  const cardRef = useScrollReveal('up', delay, 0.6);

  return (
    <div ref={cardRef} className="cert-card card">
      <div className="cert-icon-wrap" aria-hidden="true">
        <FiAward />
      </div>
      <div className="cert-body">
        <span className="cert-platform">{cert.platform}</span>
        <h3 className="cert-title">{cert.title}</h3>
        <div className="cert-footer">
          <span className="cert-year">{cert.year}</span>
          {cert.link && cert.link !== '#' && (
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="cert-link"
              aria-label={`View certificate: ${cert.title}`}
            >
              View Certificate <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const headingRef = useScrollReveal('up', 0, 0.6);

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div ref={headingRef}>
          <h2 className="section-heading">
            <span>Credentials</span>
            Certifications &amp; Achievements
          </h2>
          <div className="accent-line" />
        </div>

        <div className="cert-grid">
          {portfolioData.certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
