* {
  box-sizing: border-box;
}

:root {
  --navy-900: #0f2238;
  --navy-800: #163756;
  --navy-700: #1b476d;
  --navy-600: #285d88;
  --gold-500: #c99a4d;
  --gold-400: #d9b66a;
  --ivory: #f6f1ea;
  --cream: #fffaf5;
  --paper: #fff;
  --text: #1f2e3a;
  --muted: #5b6773;
  --line: rgba(12, 31, 46, 0.12);
  --shadow: 0 18px 40px rgba(18, 41, 59, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", Arial, sans-serif;
  background: var(--cream);
  color: var(--text);
  line-height: 1.6;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

.container {
  width: min(1160px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 78px;
}

.brand {
  display: inline-flex;
  flex-direction: column;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.05em;
  color: var(--navy-900);
}

.brand-mark {
  font-size: 1.25rem;
  font-family: "Cormorant Garamond", serif;
}

.brand-sub {
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-top: 4px;
  color: var(--gold-500);
}

.navlinks {
  display: flex;
  align-items: center;
  gap: 28px;
  color: var(--navy-800);
  font-weight: 500;
}

.navlinks a {
  position: relative;
}

.navlinks a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 100%;
  height: 2px;
  background: var(--gold-500);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.navlinks a:hover::after,
.navlinks a:focus-visible::after {
  transform: scaleX(1);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 999px;
  border: 1px solid transparent;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  cursor: pointer;
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-1px);
  box-shadow: 0 10px 22px rgba(19, 51, 74, 0.15);
}

.btn-primary {
  background: linear-gradient(135deg, var(--navy-700), var(--navy-900));
  color: white;
}

.btn-secondary {
  background: transparent;
  color: var(--navy-800);
  border-color: rgba(27, 71, 109, 0.3);
}

.small {
  min-height: 38px;
  padding: 0 16px;
  font-size: 0.9rem;
}

.full {
  width: 100%;
}

.hero {
  padding: 64px 0 80px;
  background:
    radial-gradient(circle at top right, rgba(205, 178, 109, 0.17), transparent 18%),
    linear-gradient(135deg, #f5f0e8 0%, #fffaf5 35%, #edf4fa 100%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.04fr 0.96fr;
  align-items: center;
  gap: 56px;
}

.eyebrow {
  margin: 0 0 14px;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold-500);
}

.eyebrow.dark {
  color: var(--navy-700);
}

.hero-copy h1,
.section-head h2,
.about-copy h2,
.contact-copy h2 {
  margin: 0 0 18px;
  font-family: "Cormorant Garamond", serif;
  color: var(--navy-900);
  letter-spacing: -0.04em;
  line-height: 0.95;
}

.hero-copy h1 {
  font-size: clamp(3.1rem, 5vw, 6rem);
}

.intro {
  max-width: 560px;
  margin: 0;
  font-size: 1.12rem;
  color: var(--muted);
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.hero-metrics {
  list-style: none;
  padding: 0;
  margin: 30px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

.hero-metrics li {
  min-width: 132px;
  padding: 14px 16px;
  border: 1px solid rgba(17, 41, 58, 0.1);
  background: rgba(255, 255, 255, 0.6);
  border-radius: 18px;
}

.hero-metrics strong {
  display: block;
  color: var(--navy-900);
  font-size: 1rem;
}

.hero-metrics span {
  color: var(--muted);
  font-size: 0.82rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.feature-card {
  width: min(520px, 100%);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid var(--line);
  border-radius: 28px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.feature-art {
  min-height: 360px;
  background:
    linear-gradient(135deg, rgba(7, 27, 42, 0.5), rgba(27, 71, 109, 0.2)),
    url("https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80") center/cover no-repeat;
}

.track-mini {
  padding: 20px 22px 22px;
}

.label {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold-500);
  font-weight: 700;
}

.track-mini h3 {
  margin: 0 0 12px;
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: var(--navy-900);
}

.track-mini audio {
  width: 100%;
}

.catalog,
.process,
.contact {
  padding: 92px 0;
}

.section-head {
  max-width: 700px;
  margin: 0 auto 40px;
  text-align: center;
}

.section-head.narrow {
  max-width: 620px;
}

.section-head h2,
.about-copy h2,
.contact-copy h2 {
  font-size: clamp(2.4rem, 4vw, 4rem);
}

.section-head p,
.about-copy p,
.contact-copy p {
  color: var(--muted);
  margin: 0;
}

.track-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.track-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: 0 12px 24px rgba(15, 34, 56, 0.06);
}

.track-card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.track-copy {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 22px 20px 20px;
}

.track-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

.tag {
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  background: #eef4f9;
  color: var(--navy-700);
  font-size: 0.76rem;
  font-weight: 700;
}

.track-copy h3 {
  margin: 0 0 8px;
  font-size: clamp(1.6rem, 2vw, 2.2rem);
  color: var(--navy-900);
  line-height: 1.1;
}

.track-copy p {
  margin: 0 0 16px;
  color: var(--muted);
}

.track-copy audio {
  width: 100%;
  margin-bottom: 16px;
}

.track-actions {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.process {
  background: linear-gradient(180deg, rgba(214, 185, 118, 0.08), rgba(255, 255, 255, 0));
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.step-card {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(27, 71, 109, 0.08);
  border-radius: 20px;
  padding: 24px 20px;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: var(--navy-900);
  color: white;
  font-weight: 700;
  margin-bottom: 18px;
}

.step-card h3 {
  margin: 0 0 10px;
  color: var(--navy-900);
  font-size: 1.35rem;
}

.step-card p {
  margin: 0;
  color: var(--muted);
}

.about {
  padding-bottom: 92px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 36px;
  align-items: center;
}

.about-panel {
  background: linear-gradient(180deg, var(--navy-900), var(--navy-800));
  color: white;
  border-radius: 28px;
  padding: 30px 28px;
  box-shadow: var(--shadow);
}

.about-panel h3 {
  margin: 0 0 16px;
  font-size: 1.7rem;
}

.about-panel ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.about-panel li {
  padding-left: 20px;
  position: relative;
  color: rgba(255, 255, 255, 0.9);
}

.about-panel li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--gold-400);
}

.contact {
  background: linear-gradient(180deg, #f6f1ea 0%, #ffffff 100%);
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 32px;
  align-items: start;
}

.contact-details {
  margin-top: 24px;
  display: grid;
  gap: 18px;
}

.contact-details span {
  display: block;
  margin-bottom: 6px;
  font-size: 0.73rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold-500);
  font-weight: 800;
}

.contact-details a,
.contact-details p {
  margin: 0;
  color: var(--navy-900);
  font-size: 1.04rem;
}

.contact-form {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 26px;
  box-shadow: 0 16px 32px rgba(23, 45, 68, 0.08);
}

.contact-form label {
  display: block;
  margin-bottom: 18px;
  color: var(--navy-900);
  font-weight: 600;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  margin-top: 8px;
  border: 1px solid rgba(20, 42, 61, 0.16);
  border-radius: 12px;
  background: #fff;
  color: var(--text);
  padding: 14px 16px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: rgba(21, 69, 102, 0.45);
  box-shadow: 0 0 0 4px rgba(27, 71, 109, 0.08);
}

textarea {
  resize: vertical;
  min-height: 120px;
}

footer {
  background: #0f2238;
  color: rgba(255, 255, 255, 0.9);
  padding: 24px 0;
}

.footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-row p {
  margin: 0;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

@media (max-width: 980px) {
  .hero-grid,
  .about-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .steps-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .track-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .nav {
    flex-wrap: wrap;
    justify-content: center;
    padding: 16px 0 12px;
  }

  .navlinks {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .nav-cta {
    width: 100%;
  }

  .hero {
    padding-top: 48px;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .cta-row {
    flex-direction: column;
    align-items: stretch;
  }

  .cta-row .btn,
  .track-actions .btn {
    width: 100%;
  }

  .footer-row {
    justify-content: center;
    text-align: center;
  }
}
