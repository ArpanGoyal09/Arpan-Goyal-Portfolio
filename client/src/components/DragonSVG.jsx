const BODY = 'M 625,52 C 900,52 1100,160 1100,316 C 1100,472 900,578 600,578 C 300,578 100,472 100,316 C 100,160 300,52 572,52';

const DragonSVG = () => (
  <svg
    id="hero-dragon-svg"
    viewBox="0 0 1200 640"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    style={{ width: '100%', height: '100%', overflow: 'visible' }}
    aria-hidden="true"
  >
    <defs>
      <filter id="dg-glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="7" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="dg-eye-glow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="4" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <linearGradient id="dg-fire" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#ffee00"/>
        <stop offset="55%"  stopColor="#ff8800"/>
        <stop offset="100%" stopColor="#ff4400" stopOpacity="0"/>
      </linearGradient>
    </defs>

    {/* ambient ring glow */}
    <ellipse cx="600" cy="316" rx="490" ry="260"
      fill="none" stroke="rgba(255,85,0,0.055)" strokeWidth="90"/>

    {/* body — three layers driven by strokeDashoffset in Hero.jsx */}
    <path id="dg-body-shadow"    d={BODY} fill="none" stroke="#7a1200" strokeWidth="68" strokeLinecap="round" strokeLinejoin="round"/>
    <path id="dg-body-main"      d={BODY} fill="none" stroke="#ff4400" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round"/>
    <path id="dg-body-highlight" d={BODY} fill="none" stroke="#ff7744" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>

    {/* dorsal spines — revealed mid-draw */}
    <g id="dg-spines" opacity="0">
      <polygon points="748,28 737,36 759,36"       fill="#ff2800" opacity="0.88"/>
      <polygon points="866,36 855,44 877,44"       fill="#ff2800" opacity="0.88"/>
      <polygon points="980,84 968,96 992,96"       fill="#ff2800" opacity="0.84"/>
      <polygon points="1116,178 1140,190 1116,202" fill="#ff2800" opacity="0.84"/>
      <polygon points="1126,296 1150,308 1126,320" fill="#ff2800" opacity="0.82"/>
      <polygon points="1110,418 1134,428 1110,438" fill="#ff2800" opacity="0.80"/>
      <polygon points="974,596 963,620 985,620"    fill="#ff2800" opacity="0.80"/>
      <polygon points="790,600 779,624 801,624"    fill="#ff2800" opacity="0.80"/>
      <polygon points="598,604 587,628 609,628"    fill="#ff2800" opacity="0.78"/>
      <polygon points="405,600 394,624 416,624"    fill="#ff2800" opacity="0.78"/>
      <polygon points="220,592 209,616 231,616"    fill="#ff2800" opacity="0.78"/>
      <polygon points="74,418 50,428 74,438"       fill="#ff2800" opacity="0.80"/>
      <polygon points="58,296 34,308 58,320"       fill="#ff2800" opacity="0.82"/>
      <polygon points="72,178 48,190 72,202"       fill="#ff2800" opacity="0.84"/>
      <polygon points="214,82 202,94 226,94"       fill="#ff2800" opacity="0.84"/>
      <polygon points="328,38 316,46 340,46"       fill="#ff2800" opacity="0.86"/>
      <polygon points="450,26 438,34 462,34"       fill="#ff2800" opacity="0.88"/>
    </g>

    {/* scale arc marks */}
    <g stroke="#ff8855" strokeWidth="1.4" fill="none" opacity="0.3">
      <path d="M 692,34 C 698,22 716,22 722,34"/>
      <path d="M 808,42 C 814,30 832,30 838,42"/>
      <path d="M 928,72 C 934,60 952,60 958,72"/>
      <path d="M 1048,142 C 1060,132 1076,132 1088,142"/>
      <path d="M 1106,252 C 1120,244 1136,244 1150,252"/>
      <path d="M 1104,386 C 1118,394 1134,394 1148,386"/>
      <path d="M 1042,504 C 1050,516 1066,516 1074,504"/>
      <path d="M 905,562 C 913,574 929,574 937,562"/>
      <path d="M 738,580 C 746,592 762,592 770,580"/>
      <path d="M 593,582 C 601,594 617,594 625,582"/>
      <path d="M 446,580 C 454,592 470,592 478,580"/>
      <path d="M 285,558 C 293,570 309,570 317,558"/>
      <path d="M 148,496 C 156,508 172,508 180,496"/>
      <path d="M 86,380 C 72,388 58,388 44,380"/>
      <path d="M 88,244 C 74,236 60,236 46,244"/>
      <path d="M 154,122 C 142,112 128,112 116,122"/>
      <path d="M 294,52 C 288,40 272,40 266,52"/>
      <path d="M 432,32 C 426,20 410,20 404,32"/>
      <path d="M 526,24 C 520,12 504,12 498,24"/>
    </g>

    {/* tail — curls upward from body start at (625,52) */}
    <g id="dg-tail">
      <path
        d="M 625,52 C 645,44 660,32 666,20 C 671,10 666,3 659,2 C 652,1 645,7 643,16 C 641,23 642,32 636,40"
        fill="none" stroke="#cc2600" strokeWidth="16" strokeLinecap="round"/>
      <path
        d="M 666,20 C 672,10 669,2 661,1"
        fill="none" stroke="#aa2000" strokeWidth="10" strokeLinecap="round"/>
      <ellipse cx="659" cy="3" rx="6" ry="5" fill="#ff4400" filter="url(#dg-glow)" opacity="0.9"/>
    </g>

    {/* head — revealed last, faces RIGHT toward tail gap */}
    <g id="dg-head" opacity="0">

      {/* ambient glow */}
      <ellipse cx="604" cy="52" rx="96" ry="52"
        fill="rgba(255,85,0,0.13)" filter="url(#dg-glow)"/>

      {/* ── depth shadow (slightly larger, darker) ── */}
      <path d="M 552,52 C 551,36 558,20 574,12 C 590,4 614,2 636,12 C 652,20 664,36 664,52 C 664,66 654,80 636,88 C 616,96 590,96 568,88 C 552,82 544,70 544,60 C 544,56 548,54 552,52 Z"
        fill="#3d0808" opacity="0.55"/>

      {/* ── main skull (filled closed path, facing right) ── */}
      <path d="M 550,52 C 549,38 556,24 570,16 C 582,8 600,6 618,10 C 634,14 648,24 656,38 C 660,44 662,48 662,52 C 662,56 660,62 656,68 C 646,80 628,90 606,94 C 582,96 560,88 550,76 C 546,68 546,60 550,52 Z"
        fill="#991b1b"/>

      {/* skull sheen — upper highlight */}
      <path d="M 570,16 C 582,8 600,6 618,10 C 634,14 648,24 656,38 C 646,28 632,20 616,16 C 600,12 582,12 570,20 Z"
        fill="#dc2626" opacity="0.42"/>

      {/* ── brow ridge (defines the eye socket) ── */}
      <path d="M 562,28 C 574,18 590,14 608,16 C 624,18 638,26 648,40"
        fill="none" stroke="#f87171" strokeWidth="4" strokeLinecap="round" opacity="0.52"/>

      {/* ── upper jaw / snout ── */}
      <path d="M 662,50 C 652,36 636,28 614,24 C 596,20 576,22 564,30 C 576,26 596,24 616,28 C 636,32 652,42 660,52 Z"
        fill="#cc2626"/>
      {/* snout ridge line */}
      <path d="M 564,30 C 576,24 596,22 618,26 C 638,30 654,40 662,52"
        fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" opacity="0.38"/>

      {/* ── lower jaw ── */}
      <path d="M 662,54 C 650,70 630,80 606,84 C 582,88 562,82 554,72 C 564,78 582,82 606,80 C 628,78 648,68 660,56 Z"
        fill="#7f1d1d"/>

      {/* ── upper teeth ── */}
      <polygon points="596,24 592,10 603,24"  fill="#ffedd8" opacity="0.92"/>
      <polygon points="614,22 610,8  621,22"  fill="#ffedd8" opacity="0.88"/>
      <polygon points="632,28 628,14 639,28"  fill="#ffedd8" opacity="0.84"/>
      <polygon points="648,40 644,26 655,40"  fill="#ffedd8" opacity="0.78"/>

      {/* ── lower teeth ── */}
      <polygon points="596,82 592,96 603,82"  fill="#eeddbb" opacity="0.80"/>
      <polygon points="614,84 610,98 621,84"  fill="#eeddbb" opacity="0.76"/>
      <polygon points="630,80 626,94 637,80"  fill="#eeddbb" opacity="0.70"/>

      {/* ── eye — large amber, slit pupil ── */}
      <circle cx="586" cy="40" r="18" fill="#ff8c00" filter="url(#dg-eye-glow)" opacity="0.9"/>
      <circle cx="586" cy="40" r="12" fill="#ff6020"/>
      <ellipse cx="586" cy="40" rx="3.5" ry="7" fill="#110400"/>
      <circle  cx="582" cy="36" r="3.2"          fill="white" opacity="0.88"/>
      <circle  cx="586" cy="40" r="12"           fill="none" stroke="#ff4400" strokeWidth="1.5" opacity="0.3"/>

      {/* ── scale marks on skull ── */}
      <path d="M 575,24 C 580,18 588,18 593,24" fill="none" stroke="#f87171" strokeWidth="1.6" opacity="0.30"/>
      <path d="M 593,20 C 598,14 606,14 611,20" fill="none" stroke="#f87171" strokeWidth="1.6" opacity="0.30"/>
      <path d="M 612,18 C 617,12 625,12 630,18" fill="none" stroke="#f87171" strokeWidth="1.6" opacity="0.30"/>
      <path d="M 563,38 C 567,32 573,32 577,38" fill="none" stroke="#f87171" strokeWidth="1.3" opacity="0.22"/>

      {/* ── horns — curved strokes swept back-left from skull ── */}
      {/* primary horn */}
      <path d="M 596,12 C 584,0 574,-10 562,-14"
        fill="none" stroke="#7f1d1d" strokeWidth="13" strokeLinecap="round"/>
      <path d="M 596,12 C 584,0 574,-10 562,-14"
        fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" opacity="0.36"/>
      {/* secondary horn */}
      <path d="M 614,10 C 604,-2 596,-12 590,-18"
        fill="none" stroke="#6b1a1a" strokeWidth="9" strokeLinecap="round"/>
      <path d="M 614,10 C 604,-2 596,-12 590,-18"
        fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" opacity="0.26"/>
      {/* small crest horn */}
      <path d="M 632,14 C 626,4 622,-4 620,-8"
        fill="none" stroke="#991b1b" strokeWidth="6" strokeLinecap="round"/>

      {/* ── crest spines on top of skull ── */}
      <polygon points="604,14 598,0  611,13"  fill="#f97316" opacity="0.82"/>
      <polygon points="620,12 615,-2 626,11"  fill="#f97316" opacity="0.72"/>
      <polygon points="638,18 634,4  645,18"  fill="#f97316" opacity="0.64"/>

      {/* ── whiskers from snout going RIGHT ── */}
      <path d="M 662,46 C 675,36 688,28 700,22 C 708,17 712,13 706,9"
        fill="none" stroke="#ff9955" strokeWidth="2.6" strokeLinecap="round"
        className="dragon-whisker dw1" opacity="0.72"/>
      <path d="M 662,52 C 676,54 690,50 702,54 C 710,57 713,64 706,68"
        fill="none" stroke="#ff9955" strokeWidth="2.0" strokeLinecap="round"
        className="dragon-whisker dw2" opacity="0.60"/>
      <path d="M 662,42 C 675,32 690,24 702,18 C 710,13 712,8 706,4"
        fill="none" stroke="#ff9955" strokeWidth="1.5" strokeLinecap="round"
        className="dragon-whisker dw3" opacity="0.48"/>

      {/* ── beard tendril below snout ── */}
      <path d="M 654,70 C 662,80 664,90 658,96 C 654,101 644,100 640,94"
        fill="none" stroke="#cc4422" strokeWidth="2.4" strokeLinecap="round" opacity="0.54"/>

      {/* ── nostril ── */}
      <ellipse cx="654" cy="48" rx="5" ry="3.5" fill="#5c0f0f" opacity="0.86"/>

      {/* ── ember particles near mouth ── */}
      <circle className="dragon-ember" cx="676" cy="40" r="3.8" fill="#ff8c00"/>
      <circle className="dragon-ember" cx="690" cy="30" r="2.6" fill="#fbbf24"/>
      <circle className="dragon-ember" cx="684" cy="54" r="3.2" fill="#f97316"/>
      <circle className="dragon-ember" cx="698" cy="62" r="2.2" fill="#ff8c00"/>
      <circle className="dragon-ember" cx="680" cy="22" r="2.0" fill="#fbbf24"/>
    </g>
  </svg>
);

export default DragonSVG;
