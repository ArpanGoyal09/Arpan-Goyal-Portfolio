import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Education', href: '#timeline' },
  { label: 'Contact',   href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef(null);
  const linksRef   = useRef([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    const links   = linksRef.current;
    if (!overlay) return;

    if (menuOpen) {
      gsap.set(overlay, { display: 'flex' });
      gsap.fromTo(overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(links,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, delay: 0.15, ease: 'power3.out' }
      );
    } else {
      gsap.to(overlay, {
        opacity: 0, duration: 0.25, ease: 'power2.in',
        onComplete: () => gsap.set(overlay, { display: 'none' }),
      });
    }
  }, [menuOpen]);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        style={{
          position:       'fixed',
          top:            0,
          left:           0,
          right:          0,
          zIndex:         100,
          padding:        '0 clamp(16px, 4vw, 48px)',
          height:         '70px',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter:  scrolled ? 'blur(20px)' : 'none',
          borderBottom:    scrolled ? '1px solid var(--border)' : 'none',
          transition:     'background-color 0.3s, backdrop-filter 0.3s, border-bottom 0.3s',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('#hero')}
          style={{
            background:  'none',
            border:      'none',
            cursor:      'pointer',
            fontFamily:  'var(--font-display)',
            fontWeight:  700,
            fontSize:    '1.6rem',
            background:  'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor:  'transparent',
            backgroundClip:       'text',
            letterSpacing: '1px',
            padding:       0,
          }}
        >
          AG
        </button>

        {/* Desktop links */}
        <ul className="nav-desktop-links">
          {navLinks.map(({ label, href }) => (
            <li key={href} style={{ listStyle: 'none' }}>
              <button className="nav-link" onClick={() => scrollTo(href)}>
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={toggleTheme}
            aria-label="Toggle colour theme"
            className="nav-icon-btn"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation menu"
            className="hamburger nav-icon-btn"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div ref={overlayRef} className="mobile-overlay">
        {navLinks.map(({ label, href }, i) => (
          <button
            key={href}
            ref={el => (linksRef.current[i] = el)}
            onClick={() => scrollTo(href)}
            className="mobile-nav-link"
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}
