import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import portfolioData from '../data/portfolioData';

const socials = [
  { href: portfolioData.github,            icon: <FiGithub />,   label: 'GitHub'   },
  { href: portfolioData.linkedin,          icon: <FiLinkedin />, label: 'LinkedIn' },
  { href: `mailto:${portfolioData.email}`, icon: <FiMail />,     label: 'Email'    },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-credit">
          Designed &amp; Built by{' '}
          <span className="gradient-text">{portfolioData.name}</span>
        </p>

        <div className="footer-socials">
          {socials.map(({ href, icon, label }) =>
            href && href !== '#' ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label={label}
              >
                {icon}
              </a>
            ) : null
          )}
        </div>

        <p className="footer-year">© {year}</p>
      </div>
    </footer>
  );
}
