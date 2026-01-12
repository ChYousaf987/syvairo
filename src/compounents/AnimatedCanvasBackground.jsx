import { useEffect, useRef } from "react";

const AIAnimatedBackground = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // More particles for richer effect
    const particles = Array.from({ length: 180 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: 1 + Math.random() * 3,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      color:
        theme === "dark"
          ? `rgba(0, 206, 209, ${0.2 + Math.random() * 0.5})` // neon cyan
          : `rgba(59, 130, 246, ${0.1 + Math.random() * 0.3})`, // light blue
    }));

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    let mouse = { x: w / 2, y: h / 2 };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const draw = () => {
      // Gradient background
      const gradient = ctx.createLinearGradient(0, h, w, 0);
      gradient.addColorStop(0, "#100c5f");
      gradient.addColorStop(0.5, "#000000");
      gradient.addColorStop(1, "#3d0275");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        // Bounce off edges
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;

        const parallaxX = (mouse.x - w / 2) * 0.03;
        const parallaxY = (mouse.y - h / 2) * 0.03;

        // Strong neon glow
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 25; // stronger glow
        ctx.beginPath();
        ctx.arc(p.x + parallaxX, p.y + parallaxY, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Extra glow layer for more intensity
        ctx.globalAlpha = 0.2;
        ctx.beginPath();
        ctx.arc(p.x + parallaxX, p.y + parallaxY, p.radius * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => window.removeEventListener("resize", resize);
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none w-full h-full"
    />
  );
};

export default AIAnimatedBackground;
