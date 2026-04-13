import { useState } from 'react';
import { FiAward, FiFileText, FiX } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import portfolioData from '../data/portfolioData';

function CertCard({ cert, delay, onOpen }) {
  const cardRef = useScrollReveal('up', delay, 0.6);

  return (
    <div
      ref={cardRef}
      className={`cert-card card${cert.pdfSrc ? ' cert-card-clickable' : ''}`}
      onClick={() => cert.pdfSrc && onOpen(cert)}
      role={cert.pdfSrc ? 'button' : undefined}
      tabIndex={cert.pdfSrc ? 0 : undefined}
      onKeyDown={e => e.key === 'Enter' && cert.pdfSrc && onOpen(cert)}
      aria-label={cert.pdfSrc ? `View certificate: ${cert.title}` : undefined}
    >
      <div className="cert-icon-wrap" aria-hidden="true">
        <FiAward />
      </div>
      <div className="cert-body">
        <span className="cert-platform">{cert.platform}</span>
        <h3 className="cert-title">{cert.title}</h3>
        <div className="cert-footer">
          <span className="cert-year">{cert.year}</span>
          {cert.pdfSrc && (
            <span className="cert-link">
              <FiFileText /> View Certificate
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const headingRef = useScrollReveal('up', 0, 0.6);
  const [openCert, setOpenCert] = useState(null);

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
            <CertCard
              key={cert.title}
              cert={cert}
              delay={i * 0.1}
              onOpen={setOpenCert}
            />
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      {openCert && (
        <div
          className="pdf-modal-overlay"
          onClick={() => setOpenCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={openCert.title}
        >
          <div className="pdf-modal-content" onClick={e => e.stopPropagation()}>
            <div className="pdf-modal-header">
              <h4>{openCert.title}</h4>
              <button
                className="pdf-modal-close"
                onClick={() => setOpenCert(null)}
                aria-label="Close"
              ><FiX /></button>
            </div>
            <iframe
              className="pdf-modal-iframe"
              src={openCert.pdfSrc}
              title={openCert.title}
            />
          </div>
        </div>
      )}
    </section>
  );
}
