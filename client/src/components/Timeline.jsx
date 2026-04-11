import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiBook, FiBriefcase } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import portfolioData from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const allItems = [
  ...portfolioData.education.map(e => ({ ...e, type: 'education' })),
  ...portfolioData.experience.map(e => ({ ...e, type: 'experience' })),
];

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;
  const cardRef = useScrollReveal(isLeft ? 'left' : 'right', 0.1, 0.65);

  return (
    <div className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}>
      {/* Connector dot */}
      <div className="timeline-dot">
        <span className="timeline-dot-icon">
          {item.type === 'education' ? <FiBook /> : <FiBriefcase />}
        </span>
      </div>

      {/* Card */}
      <div ref={cardRef} className="timeline-card card">
        <span className="timeline-period">{item.period}</span>
        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-institution">{item.institution}</p>
        {item.description && (
          <p className="timeline-desc">{item.description}</p>
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  const headingRef = useScrollReveal('up', 0, 0.6);
  const lineRef    = useRef(null);

  // Draw the center line on scroll
  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const anim = gsap.fromTo(
      line,
      { scaleY: 0, transformOrigin: 'top center' },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: line,
          start:   'top 80%',
          end:     'bottom 20%',
          scrub:   true,
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <section id="timeline" className="section" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="container">
        <div ref={headingRef}>
          <h2 className="section-heading">
            <span>My journey</span>
            Education &amp; Experience
          </h2>
          <div className="accent-line" />
        </div>

        <div className="timeline-wrapper">
          {/* Animated center line */}
          <div ref={lineRef} className="timeline-line" aria-hidden="true" />

          {allItems.map((item, i) => (
            <TimelineItem key={`${item.title}-${i}`} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
