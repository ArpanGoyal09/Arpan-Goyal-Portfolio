import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FiDownload, FiArrowRight, FiChevronDown, FiFileText } from 'react-icons/fi';
import DragonSVG from './DragonSVG';
import portfolioData from '../data/portfolioData';

const CV_PDF  = '/downloads/Arpan_Goyal_Resume.pdf';
const CV_DOCX = '/downloads/Arpan_Goyal_Resume.docx';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex]     = useState(0);
  const [charIndex, setCharIndex]     = useState(0);
  const [isDeleting, setIsDeleting]   = useState(false);

  const [cvOpen, setCvOpen] = useState(false);

  const eyebrowRef = useRef(null);
  const nameRef    = useRef(null);
  const typeRef    = useRef(null);
  const btnsRef    = useRef(null);
  const pauseRef   = useRef(false);
  const cvDropRef  = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (cvDropRef.current && !cvDropRef.current.contains(e.target)) {
        setCvOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // ── Dragon ring draw-in + staggered text reveal ──────────────
  useEffect(() => {
    const bodyMain = document.getElementById('dg-body-main');
    if (!bodyMain) return;

    const pathLen = bodyMain.getTotalLength();

    ['dg-body-shadow', 'dg-body-main', 'dg-body-highlight'].forEach(id => {
      const el = document.getElementById(id);
      if (el) gsap.set(el, { strokeDasharray: pathLen, strokeDashoffset: pathLen });
    });

    gsap.set('#dg-spines', { opacity: 0 });
    gsap.set('#dg-head',   { opacity: 0, scale: 0.3, transformOrigin: '590px 52px' });
    gsap.set(eyebrowRef.current, { opacity: 0, y: 12 });
    gsap.set(nameRef.current,    { opacity: 0, scale: 0.82 });
    gsap.set(typeRef.current,    { opacity: 0 });
    gsap.set(btnsRef.current,    { opacity: 0, y: 18 });

    const tl = gsap.timeline({ delay: 0.3 });

    tl
      // 1. Dragon body draws clockwise from tail to head
      .to(['#dg-body-shadow', '#dg-body-main', '#dg-body-highlight'], {
        strokeDashoffset: 0,
        duration: 2.8,
        ease: 'power2.inOut',
      })
      // 2. Spines pop in mid-draw
      .to('#dg-spines', { opacity: 1, duration: 0.5 }, '<0.9')
      // 3. Eyebrow slides up
      .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.55 }, '<0.6')
      // 4. Name scales in inside ring
      .to(nameRef.current, { opacity: 1, scale: 1, duration: 0.75, ease: 'back.out(1.6)' }, '-=0.25')
      // 5. Head snaps in — completes the ring
      .to('#dg-head', { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(2.4)' }, '-=0.35')
      // 6. Typewriter fades in
      .to(typeRef.current, { opacity: 1, duration: 0.4 }, '-=0.1')
      // 7. Buttons slide up
      .fromTo(btnsRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }
      );

    return () => { tl.kill(); };
  }, []);

  // ── Typewriter ───────────────────────────────────────────────
  useEffect(() => {
    const roles   = portfolioData.roles;
    const current = roles[roleIndex];
    if (pauseRef.current) return;

    const speed = isDeleting ? 55 : 110;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          pauseRef.current = true;
          setTimeout(() => { pauseRef.current = false; setIsDeleting(true); }, 1600);
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

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-bg-glow" aria-hidden="true" />

      {/* Dragon ring with name centred inside */}
      <div className="hero-ring-wrap">
        <DragonSVG />
        <div className="hero-name-over">
          <p ref={eyebrowRef} className="hero-eyebrow">
            Hello, I&apos;m
          </p>
          <h1 ref={nameRef} className="hero-name gradient-text">
            <span className="name-line">Arpan</span>
            <span className="name-line">Goyal</span>
          </h1>
        </div>
      </div>

      {/* Typewriter + CTAs below the ring */}
      <div className="hero-below-ring">
        <div ref={typeRef} className="hero-typewriter">
          <span className="typewriter-text">{displayText}</span>
          <span className="typewriter-cursor" aria-hidden="true">|</span>
        </div>
        <div ref={btnsRef} className="hero-btns">

          {/* ── CV download dropdown ─────────────────────── */}
          <div className="cv-drop-wrap" ref={cvDropRef}>
            <button
              className="btn btn-primary cv-drop-trigger"
              onClick={() => setCvOpen(o => !o)}
              aria-haspopup="true"
              aria-expanded={cvOpen}
            >
              <FiDownload /> Download CV <FiChevronDown className={`cv-chevron${cvOpen ? ' open' : ''}`} />
            </button>

            {cvOpen && (
              <div className="cv-dropdown" role="menu">
                <a
                  href={CV_PDF}
                  download="Arpan_Goyal_Resume.pdf"
                  className="cv-dropdown-item"
                  role="menuitem"
                  onClick={() => setCvOpen(false)}
                >
                  <FiDownload /> PDF
                </a>
                <a
                  href={CV_DOCX}
                  download="Arpan_Goyal_Resume.docx"
                  className="cv-dropdown-item"
                  role="menuitem"
                  onClick={() => setCvOpen(false)}
                >
                  <FiFileText /> Word (.docx)
                </a>
              </div>
            )}
          </div>

          <button className="btn btn-outline" onClick={scrollToContact}>
            Get In Touch <FiArrowRight />
          </button>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="scroll-line" />
      </div>
    </section>
  );
}
