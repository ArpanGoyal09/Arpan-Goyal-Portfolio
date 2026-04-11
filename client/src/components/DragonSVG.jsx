const DragonSVG = () => (
  <svg
    viewBox="0 0 480 500"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Dragon illustration"
    role="img"
    style={{ width: '100%', height: '100%' }}
  >
    <defs>
      <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff4d00" />
        <stop offset="100%" stopColor="#ff6b2b" />
      </linearGradient>
      <linearGradient id="g2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#cc3a00" />
        <stop offset="100%" stopColor="#992800" />
      </linearGradient>
      <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff6b2b" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#ff4d00" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="fire" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffdd00" />
        <stop offset="55%" stopColor="#ff6600" />
        <stop offset="100%" stopColor="#ff4d00" stopOpacity="0" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* ── LEFT WING (large, dominant) ─────────────────────────── */}
    <polygon
      points="20,380 10,180 55,70 140,20 215,90 230,200 210,260 190,300"
      fill="url(#g2)"
    />
    <polygon
      points="10,180 55,70 140,20 215,90 190,160"
      fill="url(#g1)"
      opacity="0.85"
    />
    {/* Low-poly membrane triangles */}
    <polygon points="10,180 55,70 80,140"  fill="#ff4d00" opacity="0.45" />
    <polygon points="55,70 140,20 100,70"  fill="#cc3a00" opacity="0.55" />
    <polygon points="140,20 215,90 175,65" fill="#ff5500" opacity="0.38" />
    <polygon points="10,180 80,140 190,160 230,200 180,220" fill="#aa3300" opacity="0.38" />
    <polygon points="20,380 60,300 190,300 210,260 180,220 10,180" fill="#882200" opacity="0.45" />
    {/* Wing edge highlight */}
    <polyline
      points="140,20 215,90 230,200 210,260"
      fill="none" stroke="#ff6b2b" strokeWidth="1.5" opacity="0.5"
    />

    {/* ── RIGHT WING (smaller, angled back) ───────────────────── */}
    <polygon
      points="240,175 270,50 340,30 370,100 335,170 295,195"
      fill="url(#g2)" opacity="0.8"
    />
    <polygon points="270,50 340,30 300,60"  fill="#ff5500" opacity="0.48" />
    <polygon points="270,50 370,100 315,95" fill="url(#g1)" opacity="0.48" />
    <polygon points="340,30 370,100 355,55" fill="#cc3a00" opacity="0.42" />
    <polyline
      points="340,30 370,100 335,170"
      fill="none" stroke="#ff6b2b" strokeWidth="1" opacity="0.4"
    />

    {/* ── BODY ────────────────────────────────────────────────── */}
    <polygon
      points="200,220 248,205 298,235 315,305 285,350 235,360 198,330 188,275"
      fill="url(#g1)"
    />
    {/* Belly highlight */}
    <polygon
      points="215,245 252,230 282,265 275,318 242,338 210,308"
      fill="#ff6b2b" opacity="0.32"
    />
    {/* Shadow depth */}
    <polygon
      points="285,350 315,305 300,355 270,365"
      fill="#cc3a00" opacity="0.55"
    />

    {/* ── NECK ────────────────────────────────────────────────── */}
    <polygon
      points="248,205 272,192 302,205 298,235 252,245"
      fill="url(#g2)"
    />

    {/* ── HEAD ────────────────────────────────────────────────── */}
    <polygon
      points="275,160 305,142 348,148 372,174 362,210 330,220 297,207 274,188"
      fill="url(#g1)"
    />
    {/* Lower jaw */}
    <polygon
      points="312,192 348,188 368,198 362,212 330,220 308,208"
      fill="url(#g2)"
    />
    {/* Snout / muzzle */}
    <polygon
      points="348,148 390,138 400,160 378,172 350,168"
      fill="url(#g1)"
    />
    {/* Eye */}
    <polygon points="308,166 318,158 327,166 320,175 310,172" fill="#ffdd00" filter="url(#glow)" />
    <polygon points="313,167 318,162 323,167 319,172" fill="#ff8800" opacity="0.6" />
    {/* Horns */}
    <polygon points="285,154 278,118 295,150" fill="#cc3a00" />
    <polygon points="302,148 296,112 312,145" fill="#aa2e00" />
    {/* Head crest */}
    <polygon points="275,160 282,145 295,158" fill="#cc3a00" opacity="0.55" />

    {/* ── FIRE BREATH ─────────────────────────────────────────── */}
    <polygon
      points="397,152 442,130 456,150 470,137 462,160 474,150 460,172 440,163 415,159 398,163"
      fill="url(#fire)"
      filter="url(#glow)"
    />
    <polygon points="398,156 420,148 426,159 409,164" fill="#ffdd00" opacity="0.88" />
    <polygon points="414,151 436,141 441,153 421,159" fill="#ffaa00" opacity="0.7" />

    {/* ── TAIL ────────────────────────────────────────────────── */}
    <polygon
      points="198,330 182,378 152,415 112,448 90,438 118,410 145,376 170,340"
      fill="url(#g2)"
    />
    <polygon
      points="170,340 145,376 118,410 90,438 82,450 72,465 88,468 105,452 128,422 158,390 180,355 195,338"
      fill="url(#g1)" opacity="0.55"
    />
    {/* Tail tip */}
    <polygon points="72,465 82,450 92,468 80,475" fill="#ff4d00" opacity="0.8" />
    {/* Dorsal spikes on tail */}
    <polygon points="152,415 162,395 168,415 158,420" fill="#cc3a00" opacity="0.68" />
    <polygon points="182,378 190,360 196,378 186,384" fill="#cc3a00" opacity="0.68" />

    {/* ── FRONT LEG ───────────────────────────────────────────── */}
    <polygon points="258,335 268,385 253,400 243,382 248,342" fill="url(#g2)" />
    <polygon points="253,398 258,415 248,415 243,398" fill="#992800" />
    <polygon points="244,395 249,411 239,410 235,395" fill="#992800" />
    <polygon points="262,397 267,414 257,413 254,397" fill="#992800" />

    {/* ── BACK LEG ────────────────────────────────────────────── */}
    <polygon points="210,345 220,392 205,406 192,390 198,350" fill="url(#g2)" />
    <polygon points="205,404 210,420 200,419 195,404" fill="#992800" />
    <polygon points="196,401 200,418 190,416 187,401" fill="#992800" />
    <polygon points="214,403 218,420 208,419 205,403" fill="#992800" />

    {/* ── DORSAL SPINES ───────────────────────────────────────── */}
    <polygon points="220,220 226,202 232,218" fill="#cc3a00" opacity="0.8" />
    <polygon points="238,210 245,192 252,209" fill="#cc3a00" opacity="0.8" />
    <polygon points="258,206 265,188 272,205" fill="#cc3a00" opacity="0.8" />
  </svg>
);

export default DragonSVG;
