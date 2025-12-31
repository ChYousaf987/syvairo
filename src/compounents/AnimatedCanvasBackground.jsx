import { useEffect, useRef } from "react";

const AnimatedCanvasBackground = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const darkColors = [
      "rgba(155,81,224,0.35)",
      "rgba(59,130,246,0.35)",
      "rgba(255,255,255,0.1)",
    ];
    const lightColors = [
      "rgba(155,81,224,0.15)",
      "rgba(59,130,246,0.15)",
      "rgba(0,0,0,0.05)",
    ];

    // Main blobs
    const blobs = Array.from({ length: 15 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: 100 + Math.random() * 200,
      speed: 0.003 + Math.random() * 0.005,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      color: (theme === "dark" ? darkColors : lightColors)[
        Math.floor(Math.random() * 3)
      ],
      angle: Math.random() * Math.PI * 2,
      phase: Math.random() * Math.PI * 2,
    }));

    // Particle layer
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: 5 + Math.random() * 12,
      dx: (Math.random() - 0.5) * 3,
      dy: (Math.random() - 0.5) * 3,
      color:
        theme === "dark" ? "rgba(155,81,224,0.15)" : "rgba(155,81,224,0.08)",
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
      ctx.clearRect(0, 0, w, h);

      // Base background
      ctx.fillStyle = theme === "dark" ? "#0a0b11" : "#f5f7ff";
      ctx.fillRect(0, 0, w, h);

      // Draw main blobs
      blobs.forEach((blob) => {
        blob.angle += blob.speed;
        blob.x += blob.dx;
        blob.y += blob.dy;

        if (blob.x - blob.radius < 0 || blob.x + blob.radius > w) blob.dx *= -1;
        if (blob.y - blob.radius < 0 || blob.y + blob.radius > h) blob.dy *= -1;

        const offsetX = Math.sin(blob.angle + blob.phase) * 100;
        const offsetY = Math.cos(blob.angle + blob.phase) * 100;

        const parallaxX = (mouse.x - w / 2) * 0.05;
        const parallaxY = (mouse.y - h / 2) * 0.05;

        const x = blob.x + offsetX + parallaxX;
        const y = blob.y + offsetY + parallaxY;

        const alpha = 0.25 + 0.2 * Math.sin(blob.angle);
        const color = blob.color.replace(/[\d\.]+\)$/g, `${alpha})`);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, blob.radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw particles
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => window.removeEventListener("resize", resize);
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none w-full h-full"
    />
  );
};

export default AnimatedCanvasBackground;
