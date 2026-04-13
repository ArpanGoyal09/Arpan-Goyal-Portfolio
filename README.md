# Arpan Goyal — Personal Portfolio

A full-stack personal portfolio website built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

**Live Demo:** `https://arpan-goyal-portfolio.vercel.app/`
               `https://arpan-goyal-portfolio.onrender.com`

---

## Tech Stack

| Layer     | Technology                              |
|-----------|-----------------------------------------|
| Frontend  | React.js (Vite), GSAP, Framer Motion   |
| Backend   | Node.js, Express.js                     |
| Database  | MongoDB (Mongoose)                      |
| Styling   | CSS Custom Properties, Clash Display + Satoshi fonts |
| Animation | GSAP + ScrollTrigger, CSS keyframes     |
| Deployment| Vercel (client) · Render (server)       |

---

## Features

- **Dragon-themed hero** — geometric SVG dragon with floating animation and GSAP entrance
- **Typewriter effect** — cycles through roles without any library
- **Dark / Light mode** — CSS variable toggle, persisted in localStorage, no flash on reload
- **Animated skill bars** — GSAP ScrollTrigger, animates from 0% only when in viewport
- **Scroll-drawn timeline** — center line draws itself as you scroll (GSAP scrub)
- **Contact form** — connected to Express API, validated client + server side, stored in MongoDB
- **CV download** — PDF and DOCX served via Express routes (`/api/download/pdf`, `/api/download/docx`)
- **Fully responsive** — mobile-first, tested at 320px → 1440px

---

## Project Structure

```
Portfolio/
├── client/               
│   ├── public/
│   ├── src/
│   │   ├── components/   
│   │   ├── context/      
│   │   ├── data/         
│   │   ├── hooks/        
│   │   └── utils/        
│   └── .env.example
└── server/               
    ├── config/           
    ├── models/           
    ├── routes/           
    ├── middleware/       
    ├── uploads/          
    └── .env.example
```

---

## Local Setup

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free tier)

### 1. Clone

```bash
git clone https://github.com/ArpanGoyal09/Arpan-Goyal-Portfolio.git
cd portfolio
```

### 2. Backend

```bash
cd server
npm install

# Create .env from the example
cp .env.example .env
# Edit .env and add your real MONGO_URI
```

Place your resume files in `server/uploads/`:
- `Arpan_Goyal_Resume.pdf`
- `Arpan_Goyal_Resume.docx`

```bash
npm run dev     # runs on http://localhost:5000
```

### 3. Frontend

```bash
cd ../client
npm install

# Create .env from the example
cp .env.example .env
# VITE_API_URL=http://localhost:5000
```

```bash
npm run dev     # runs on http://localhost:5173
```

### 4. Run both together (from root)

```bash
# From the Portfolio/ root
npm install
npm run dev
```

---

## Environment Variables

**server/.env**
```
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/portfolio
PORT=5000
CLIENT_URL=http://localhost:5173
```

**client/.env**
```
VITE_API_URL=http://localhost:5000
```

> Never commit `.env` files. They are excluded via `.gitignore`.

---

## Deployment

| Service | Config |
|---------|--------|
| **Vercel** (client) | Root: `client/` · Build: `npm run build` · Output: `dist` |
| **Render** (server) | Root: `server/` · Start: `node server.js` · Add env vars in dashboard |

After deploying:
1. Set `CLIENT_URL` on Render to your Vercel URL
2. Set `VITE_API_URL` on Vercel to your Render URL
3. Add resume files to Render via the dashboard shell or a persistent disk

---

## Author

**Arpan Goyal**
- GitHub: [@ArpanGoyal09](https://github.com/ArpanGoyal09)
- Email: goyalarpan8444@gmail.com
- J.K. Lakshmipat University · B.Tech CSE · 2023–2027
