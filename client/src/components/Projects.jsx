import { FiGithub, FiExternalLink } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import portfolioData from '../data/portfolioData';

const GRAD_PALETTES = [
  ['#ff4d00', '#ff9a3c'],
  ['#ff6b2b', '#ffd166'],
  ['#cc3a00', '#ff6b2b'],
];

function ProjectCard({ project, index }) {
  const cardRef = useScrollReveal('up', index * 0.12, 0.65);
  const [c1, c2] = GRAD_PALETTES[index % GRAD_PALETTES.length];

  const hasImage = !!project.image;

  return (
    <article ref={cardRef} className="project-card card">
      {/* Thumbnail */}
      <div
        className="project-thumb"
        style={hasImage ? {} : { background: `linear-gradient(135deg, ${c1}, ${c2})` }}
        aria-hidden="true"
      >
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-thumb-img"
          />
        ) : (
          <span className="project-thumb-num">0{index + 1}</span>
        )}
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        {/* Tech badges */}
        <div className="project-badges">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            aria-label={`${project.title} GitHub repository`}
          >
            <FiGithub /> Code
          </a>
          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="project-link project-link-accent"
              aria-label={`${project.title} live demo`}
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const headingRef = useScrollReveal('up', 0, 0.6);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div ref={headingRef}>
          <h2 className="section-heading">
            <span>What I've built</span>
            Featured Projects
          </h2>
          <div className="accent-line" />
        </div>

        <div className="projects-grid">
          {portfolioData.projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
