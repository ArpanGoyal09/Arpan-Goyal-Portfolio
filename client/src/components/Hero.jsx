import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import DragonSVG from './DragonSVG';
import portfolioData from '../data/portfolioData';
import { getDownloadUrl } from '../utils/api';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex]     = useState(0);
  const [charIndex, setCharIndex]     = useState(0);
  const [isDeleting, setIsDeleting]   = useState(false);

  const eyebrowRef  = useRef(null);
  const nameRef     = useRef(null);
  const typeRef     = useRef(null);
  const btnsRef     = useRef(null);
  const dragonRef   = useRef(null);
  const pauseRef    = useRef(false);

  // ── Load animation ──────────────────────────────────────────
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(eyebrowRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )
    .fromTo(nameRef.current,
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(typeRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      '-=0.3'
    )
    .fromTo(btnsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.2'
    )
    .fromTo(dragonRef.current,
      { opacity: 0, scale: 0.88 },
      { opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out' },
      '-=0.9'
    );
  }, []);

  // ── Typewriter ───────────────────────────────────────────────
  useEffect(() => {
    const roles = portfolioData.roles;
    const current = roles[roleIndex];

    if (pauseRef.current) return;

    const speed = isDeleting ? 55 : 110;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          pauseRef.current = true;
          setTimeout(() => {
            pauseRef.current = false;
            setIsDeleting(true);
          }, 1600);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex(r => (r + 1) % roles.length);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background grid + glow */}
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-bg-glow" aria-hidden="true" />

      <div className="container hero-inner">
        {/* ── LEFT: Text content ─────────────────────────────── */}
        <div className="hero-content">
          <p ref={eyebrowRef} className="hero-eyebrow" style={{ opacity: 0 }}>
            Hello, I'm
          </p>

          <h1 ref={nameRef} className="hero-name gradient-text" style={{ opacity: 0 }}>
            {portfolioData.name}
          </h1>

          <div ref={typeRef} className="hero-typewriter" style={{ opacity: 0 }}>
            <span className="typewriter-text">{displayText}</span>
            <span className="typewriter-cursor" aria-hidden="true">|</span>
          </div>

          <div ref={btnsRef} className="hero-btns" style={{ opacity: 0 }}>
            <a
              href={getDownloadUrl('pdf')}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <FiDownload /> Download CV
            </a>
            <button className="btn btn-outline" onClick={scrollToContact}>
              Get In Touch <FiArrowRight />
            </button>
          </div>
        </div>

        {/* ── RIGHT: Dragon ──────────────────────────────────── */}
        <div ref={dragonRef} className="hero-dragon" style={{ opacity: 0 }}>
          <div className="dragon-glow" aria-hidden="true" />
          <div className="dragon-float">
            <DragonSVG />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="scroll-line" />
      </div>
    </section>
  );
}
