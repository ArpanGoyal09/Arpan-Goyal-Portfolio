import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useScrollReveal from '../hooks/useScrollReveal';
import portfolioData from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend',  label: 'Backend'  },
  { key: 'tools',    label: 'Tools & Technologies' },
];

function SkillBar({ name, level }) {
  const barRef  = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const fill = fillRef.current;
    if (!fill) return;

    const anim = gsap.fromTo(
      fill,
      { width: '0%' },
      {
        width: `${level}%`,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: barRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [level]);

  return (
    <div ref={barRef} className="skill-row">
      <div className="skill-row-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-track">
        <div
          ref={fillRef}
          className="skill-fill"
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} proficiency`}
        />
      </div>
      <div className="skill-tooltip">{level}% proficiency</div>
    </div>
  );
}

// Extracted so useScrollReveal is called at component top-level, not inside .map()
function SkillColumn({ label, skillKey, delay }) {
  const colRef = useScrollReveal('up', delay, 0.65);
  return (
    <div ref={colRef} className="skills-col">
      <h3 className="skills-col-label">{label}</h3>
      <div className="skills-list">
        {portfolioData.skills[skillKey].map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const headingRef = useScrollReveal('up', 0, 0.6);

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="container">
        <div ref={headingRef}>
          <h2 className="section-heading">
            <span>What I work with</span>
            Skills &amp; Technologies
          </h2>
          <div className="accent-line" />
        </div>

        <div className="skills-grid">
          {categories.map(({ key, label }, i) => (
            <SkillColumn
              key={key}
              label={label}
              skillKey={key}
              delay={i * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
