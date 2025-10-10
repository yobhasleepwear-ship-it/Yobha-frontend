import React, { useState, useEffect } from "react";

const ComingSoon = () => {
  const launchDate = new Date("2025-10-20T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="coming-soon">
      {/* Background video */}
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/second final render.mp4" type="video/mp4" />
      </video>

      {/* Overlay with lighter tone */}
      <div className="overlay"></div>

      <div className="content">
        <h1 className="fade-in-title">✨ Coming Soon</h1>
        <p className="launch-date">
          Launching on <strong>20th October 2025</strong>
        </p>

        <div className="countdown">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div key={unit} className="time-unit">
              <h2>{timeLeft[unit]}</h2>
              <p>{unit}</p>
            </div>
          ))}
        </div>

        <p className="subtitle fade-in-subtitle">
          A new era of timeless elegance awaits ✨
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Montserrat:wght@300;400;500&display=swap');

        .coming-soon {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Montserrat', sans-serif;
          color: #fff;
          overflow: hidden;
        }

        .bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          filter: brightness(0.75) contrast(1.05) saturate(1.2);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(15, 10, 10, 0.8));
          backdrop-filter: blur(2px);
          z-index: 1;
        }

        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 20px 40px;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.05);
          border-radius: 25px;
          border: 1px solid rgba(255, 215, 0, 0.15);
          box-shadow: 0 0 40px rgba(212, 175, 55, 0.25);
          animation: fadeIn 2s ease-out;
        }

        h1 {
          font-family: 'Playfair Display', serif;
          font-size: 4.5rem;
          letter-spacing: 1.5px;
          margin-bottom: 1.5rem;
          background: linear-gradient(90deg, #e4b169, #b76e79, #f8ecc2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: slideDown 1.8s ease-out;
        }

        .launch-date {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.9);
        }

        .countdown {
          display: flex;
          justify-content: center;
          gap: 30px;
          padding: 25px 50px;
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 0 20px rgba(183, 110, 121, 0.3);
          border: 1px solid rgba(245, 222, 179, 0.3);
          backdrop-filter: blur(15px);
          transition: transform 0.4s ease;
        }

        .countdown:hover {
          transform: scale(1.03);
        }

        .time-unit {
          text-align: center;
          min-width: 80px;
        }

        .time-unit h2 {
          font-size: 3rem;
          font-family: 'Playfair Display', serif;
          background: linear-gradient(180deg, #f8ecc2, #cfa66b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .time-unit p {
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.7);
        }

        .subtitle {
          margin-top: 2.5rem;
          font-size: 1.15rem;
          font-weight: 300;
          color: #f8e1b5;
          letter-spacing: 1px;
          font-style: italic;
        }

        /* Fade and slide animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Glow around content */
        .coming-soon::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 60%, rgba(212,175,55,0.1), transparent 75%);
          z-index: 1;
          animation: glow 5s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from { opacity: 0.3; }
          to { opacity: 0.6; }
        }

        /* Responsive */
        @media (max-width: 768px) {
          h1 { font-size: 3.2rem; }
          .countdown { gap: 20px; padding: 20px 30px; }
          .time-unit h2 { font-size: 2.3rem; }
        }

        @media (max-width: 480px) {
          h1 { font-size: 2.4rem; }
          .launch-date { font-size: 1rem; }
          .countdown { flex-wrap: wrap; padding: 15px 20px; }
          .time-unit h2 { font-size: 1.8rem; }
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
