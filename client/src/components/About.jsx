import { FiMapPin, FiBook, FiUser } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import portfolioData from '../data/portfolioData';

const badges = [
  { icon: <FiMapPin />, label: portfolioData.location },
  { icon: <FiBook />,   label: `${portfolioData.university} · ${portfolioData.degree}` },
  { icon: <FiUser />,   label: portfolioData.year },
];

export default function About() {
  const imgRef     = useScrollReveal('left',  0,    0.7);
  const textRef    = useScrollReveal('right', 0.1,  0.7);
  const badgesRef  = useScrollReveal('up',    0.25, 0.6);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">

          {/* ── Avatar ───────────────────────────────────────── */}
          <div ref={imgRef} className="about-avatar-wrap">
            <div className="about-avatar">
              <span className="about-initials">AG</span>
            </div>
            {/* Decorative accent ring */}
            <div className="about-avatar-ring" aria-hidden="true" />
          </div>

          {/* ── Text ─────────────────────────────────────────── */}
          <div className="about-text">
            <div ref={textRef}>
              <h2 className="section-heading">
                <span>Who I am</span>
                About Me
              </h2>
              <div className="accent-line" />
              <p className="about-bio">{portfolioData.bio}</p>
            </div>

            {/* Badges */}
            <div ref={badgesRef} className="about-badges">
              {badges.map(({ icon, label }) => (
                <div key={label} className="about-badge">
                  <span className="about-badge-icon">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
