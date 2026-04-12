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
      <ellipse cx="604" cy="52" rx="80" ry="40" fill="rgba(255,85,0,0.14)" filter="url(#dg-glow)"/>

      {/* upper jaw */}
      <path
        d="M 552,53 C 556,42 566,32 584,26 C 602,20 624,22 638,32 C 648,40 651,52 644,60 C 634,52 616,48 596,47 C 578,47 562,50 556,56 Z"
        fill="#ff4400"/>
      <path
        d="M 552,53 C 556,42 566,32 584,26 C 602,20 624,22 638,32 C 648,40 651,52 644,60"
        fill="none" stroke="#ff7744" strokeWidth="1.8" opacity="0.55"/>

      {/* lower jaw */}
      <path
        d="M 552,56 C 556,68 566,77 584,81 C 600,85 620,82 632,73 C 640,67 641,59 635,57 C 624,65 606,68 588,67 C 570,66 558,62 552,58 Z"
        fill="#bb2200"/>

      {/* upper teeth */}
      <polygon points="578,48 573,38 582,48" fill="#ffedcc" opacity="0.92"/>
      <polygon points="596,46 592,36 601,46" fill="#ffedcc" opacity="0.90"/>
      <polygon points="614,46 611,37 620,47" fill="#ffedcc" opacity="0.86"/>
      <polygon points="630,50 628,41 637,51" fill="#ffedcc" opacity="0.80"/>

      {/* lower teeth */}
      <polygon points="578,67 573,77 582,67" fill="#eeddbb" opacity="0.82"/>
      <polygon points="596,67 592,77 601,67" fill="#eeddbb" opacity="0.80"/>
      <polygon points="614,66 611,75 619,66" fill="#eeddbb" opacity="0.75"/>

      {/* eye */}
      <ellipse cx="576" cy="40" rx="11" ry="12" fill="#ffee44" filter="url(#dg-eye-glow)"/>
      <ellipse cx="577" cy="41" rx="5.5" ry="6.5" fill="#ff8800"/>
      <ellipse cx="576" cy="40" rx="2.5" ry="3"   fill="#110400"/>
      <circle  cx="574" cy="38" r="2.2"            fill="white" opacity="0.88"/>

      {/* horns */}
      <polygon points="558,48 549,18 565,46" fill="#cc2400"/>
      <polygon points="570,44 564,12 578,42" fill="#aa2000"/>
      <polygon points="556,50 550,32 560,48" fill="#882000" opacity="0.65"/>

      {/* crest spines */}
      <polygon points="568,38 563,24 572,37" fill="#cc2600" opacity="0.72"/>
      <polygon points="582,32 579,18 587,31" fill="#cc2600" opacity="0.62"/>
      <polygon points="598,27 596,14 604,26" fill="#cc2600" opacity="0.55"/>

      {/* whiskers */}
      <path d="M 640,44 C 652,38 664,34 672,30 C 678,27 679,22 674,20"
        fill="none" stroke="#ff9955" strokeWidth="2.2" strokeLinecap="round" opacity="0.68"/>
      <path d="M 638,54 C 650,55 661,52 668,57 C 673,62 670,67 663,66"
        fill="none" stroke="#ff9955" strokeWidth="1.8" strokeLinecap="round" opacity="0.58"/>
      <path d="M 640,40 C 653,32 666,24 672,18 C 676,13 672,9 666,11"
        fill="none" stroke="#ff9955" strokeWidth="1.5" strokeLinecap="round" opacity="0.48"/>

      {/* nostril */}
      <ellipse cx="641" cy="40" rx="3.2" ry="2.2" fill="#771800" opacity="0.85"/>

      {/* fire breath */}
      <path d="M 646,48 C 662,40 680,36 696,40 C 685,44 668,46 666,54 C 678,46 694,44 706,50 C 695,56 680,58 678,64"
        fill="none" stroke="url(#dg-fire)" strokeWidth="6" strokeLinecap="round" opacity="0.5"/>
    </g>
  </svg>
);

export default DragonSVG;
