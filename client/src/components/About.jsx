import { useState, useRef } from 'react';
import { FiMapPin, FiBook, FiUser, FiCamera, FiMusic,
         FiPlay, FiPause, FiExternalLink, FiImage,
         FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import portfolioData from '../data/portfolioData';

const badges = [
  { icon: <FiMapPin />, label: portfolioData.location },
  { icon: <FiBook />,   label: `${portfolioData.university} · ${portfolioData.degree}` },
  { icon: <FiUser />,   label: portfolioData.year },
];

export default function About() {
  const [activeHobby, setActiveHobby] = useState('photography');
  const [lightbox, setLightbox]       = useState(null);
  const [playingId, setPlayingId]     = useState(null);
  const [progress, setProgress]       = useState(0);
  const [canLeft, setCanLeft]         = useState(false);
  const [canRight, setCanRight]       = useState(true);

  const audioRef   = useRef(null);
  const trackRef   = useRef(null);
  const imgRef     = useScrollReveal('left',  0,    0.7);
  const textRef    = useScrollReveal('right', 0.1,  0.7);
  const badgesRef  = useScrollReveal('up',    0.25, 0.6);
  const hobbiesRef = useScrollReveal('up',    0.1,  0.5);

  const photos = portfolioData.hobbies.photography;
  const tracks = portfolioData.hobbies.music;

  // ── Slider scroll ───────────────────────────────────────────────
  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  const slideBy = (dir) => {
    const el = trackRef.current;
    if (!el || photos.length === 0) return;
    const itemW = el.scrollWidth / photos.length;
    el.scrollBy({ left: dir * itemW, behavior: 'smooth' });
  };

  // ── Audio controls ──────────────────────────────────────────────
  const togglePlay = (track) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playingId === track.id) {
      audio.pause();
      setPlayingId(null);
    } else {
      audio.src = track.audioSrc;
      audio.currentTime = 0;
      audio.play();
      setPlayingId(track.id);
      setProgress(0);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">

          {/* ── Avatar ─────────────────────────────────────────── */}
          <div ref={imgRef} className="about-avatar-wrap">
            <div className="about-avatar">
              {portfolioData.photo
                ? <img src={portfolioData.photo} alt="Arpan Goyal" className="about-avatar-img" />
                : <span className="about-initials">AG</span>
              }
            </div>
            <div className="about-avatar-ring" aria-hidden="true" />
          </div>

          {/* ── Text ───────────────────────────────────────────── */}
          <div className="about-text">
            <div ref={textRef}>
              <h2 className="section-heading">
                <span>Who I am</span>
                About Me
              </h2>
              <div className="accent-line" />
              <p className="about-bio">{portfolioData.bio}</p>
            </div>
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

        {/* ── Hobbies ────────────────────────────────────────────── */}
        <div ref={hobbiesRef} className="hobbies-section">
          <h3 className="hobbies-title">Beyond the Code</h3>
          <div className="accent-line" />

          <div className="hobby-tabs" role="tablist">
            <button
              role="tab" aria-selected={activeHobby === 'photography'}
              className={`hobby-tab${activeHobby === 'photography' ? ' active' : ''}`}
              onClick={() => setActiveHobby('photography')}
            ><FiCamera /> Photography</button>
            <button
              role="tab" aria-selected={activeHobby === 'music'}
              className={`hobby-tab${activeHobby === 'music' ? ' active' : ''}`}
              onClick={() => setActiveHobby('music')}
            ><FiMusic /> Music Production</button>
          </div>

          {/* Photography */}
          {activeHobby === 'photography' && (
            <div className="hobby-panel" role="tabpanel">
              {photos.length === 0 ? (
                <div className="hobby-empty">
                  <FiImage className="hobby-empty-icon" />
                  <p>Photos coming soon — check back later.</p>
                </div>
              ) : (
                <div className="photo-slider-wrapper">
                  {/* Arrows */}
                  <button
                    className="slider-arrow slider-arrow-left"
                    onClick={() => slideBy(-1)}
                    disabled={!canLeft}
                    aria-label="Previous photo"
                  ><FiChevronLeft /></button>
                  <button
                    className="slider-arrow slider-arrow-right"
                    onClick={() => slideBy(1)}
                    disabled={!canRight}
                    aria-label="Next photo"
                  ><FiChevronRight /></button>

                  {/* Track */}
                  <div
                    className="photo-slider-track"
                    ref={trackRef}
                    onScroll={updateArrows}
                  >
                    {photos.map(photo => (
                      <button
                        key={photo.id}
                        className="photo-slide"
                        onClick={() => setLightbox(photo)}
                        aria-label={`View: ${photo.caption}`}
                      >
                        <img src={photo.src} alt={photo.alt} loading="lazy" />
                        <div className="photo-overlay">
                          <FiCamera className="photo-overlay-icon" />
                          <span>{photo.caption}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Music */}
          {activeHobby === 'music' && (
            <div className="hobby-panel" role="tabpanel">
              {tracks.length === 0 ? (
                <div className="hobby-empty">
                  <FiMusic className="hobby-empty-icon" />
                  <p>Tracks coming soon — stay tuned.</p>
                </div>
              ) : (
                <div className="music-grid">
                  {tracks.map(track => {
                    const isPlaying = playingId === track.id;
                    return (
                      <div key={track.id} className={`track-card${isPlaying ? ' playing' : ''}`}>
                        <div className="track-art" aria-hidden="true"><FiMusic /></div>
                        <div className="track-info">
                          <h4 className="track-title">{track.title}</h4>
                          {track.description && <p className="track-desc">{track.description}</p>}
                          {track.tags?.length > 0 && (
                            <div className="track-tags">
                              {track.tags.map(tag => <span key={tag} className="track-tag">{tag}</span>)}
                            </div>
                          )}
                          {isPlaying && (
                            <div className="track-progress-wrap">
                              <div className="track-progress-bar" style={{ width: `${progress}%` }} />
                            </div>
                          )}
                        </div>
                        <div className="track-controls">
                          {track.audioSrc && (
                            <button
                              className={`track-play-btn${isPlaying ? ' playing' : ''}`}
                              onClick={() => togglePlay(track)}
                              aria-label={isPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
                            >{isPlaying ? <FiPause /> : <FiPlay />}</button>
                          )}
                          {track.link && track.link !== '#' && (
                            <a href={track.link} target="_blank" rel="noreferrer"
                              className="track-ext-link"
                              aria-label={`Open on ${track.platform}`}
                            ><FiExternalLink /></a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Hidden audio */}
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={() => { setPlayingId(null); setProgress(0); }} />

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}
          role="dialog" aria-modal="true" aria-label={lightbox.caption}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            {lightbox.caption && <p className="lightbox-caption">{lightbox.caption}</p>}
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          </div>
        </div>
      )}
    </section>
  );
}
