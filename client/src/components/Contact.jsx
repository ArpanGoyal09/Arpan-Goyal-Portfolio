import { useState, useRef } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import { submitContact } from '../utils/api';
import portfolioData from '../data/portfolioData';

const STATUS = { IDLE: 'idle', LOADING: 'loading', SUCCESS: 'success', ERROR: 'error' };

function validate({ name, email, message }) {
  if (!name.trim())                         return 'Name is required.';
  if (!email.trim())                        return 'Email is required.';
  if (!/^\S+@\S+\.\S+$/.test(email))        return 'Enter a valid email address.';
  if (!message.trim())                      return 'Message is required.';
  return null;
}

export default function Contact() {
  const infoRef = useScrollReveal('left',  0,    0.65);
  const formRef = useScrollReveal('right', 0.15, 0.65);

  const [fields, setFields]   = useState({ name: '', email: '', message: '' });
  const [status, setStatus]   = useState(STATUS.IDLE);
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) =>
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate(fields);
    if (err) { setFeedback(err); setStatus(STATUS.ERROR); return; }

    setStatus(STATUS.LOADING);
    setFeedback('');
    try {
      await submitContact(fields);
      setStatus(STATUS.SUCCESS);
      setFeedback('Message sent! I\'ll get back to you soon.');
      setFields({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus(STATUS.ERROR);
      setFeedback(
        error?.response?.data?.message || 'Something went wrong. Please try again.'
      );
    }
  };

  const socials = [
    { href: portfolioData.github,   icon: <FiGithub />,   label: 'GitHub'   },
    { href: portfolioData.linkedin, icon: <FiLinkedin />, label: 'LinkedIn' },
    { href: `mailto:${portfolioData.email}`, icon: <FiMail />, label: 'Email' },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-grid">

          {/* ── Left: info ──────────────────────────────────── */}
          <div ref={infoRef} className="contact-info">
            <h2 className="section-heading">
              <span>Say hello</span>
              Get In Touch
            </h2>
            <div className="accent-line" />
            <p className="contact-desc">
              Have a project in mind, want to collaborate, or just want to say hi?
              My inbox is always open.
            </p>

            <a href={`mailto:${portfolioData.email}`} className="contact-email-link">
              <FiMail />
              {portfolioData.email}
            </a>

            <div className="contact-socials">
              {socials.map(({ href, icon, label }) => (
                href && href !== '#' ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social-btn"
                    aria-label={label}
                  >
                    {icon}
                    <span>{label}</span>
                  </a>
                ) : null
              ))}
            </div>
          </div>

          {/* ── Right: form ─────────────────────────────────── */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form"
            noValidate
          >
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Arpan Goyal"
                value={fields.name}
                onChange={handleChange}
                disabled={status === STATUS.LOADING}
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="you@example.com"
                value={fields.email}
                onChange={handleChange}
                disabled={status === STATUS.LOADING}
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder="Your message..."
                rows={5}
                value={fields.message}
                onChange={handleChange}
                disabled={status === STATUS.LOADING}
              />
            </div>

            {/* Feedback */}
            {feedback && (
              <div className={`form-feedback ${status === STATUS.SUCCESS ? 'form-feedback-ok' : 'form-feedback-err'}`}>
                {status === STATUS.SUCCESS ? <FiCheck /> : <FiAlertCircle />}
                {feedback}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={status === STATUS.LOADING || status === STATUS.SUCCESS}
            >
              {status === STATUS.LOADING ? (
                <><span className="spinner" /> Sending…</>
              ) : status === STATUS.SUCCESS ? (
                <><FiCheck /> Sent!</>
              ) : (
                <><FiSend /> Send Message</>
              )}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
