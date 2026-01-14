import { useEffect, useRef } from "react";

const AIAnimatedBackground = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particleCount = 70; // Keep under 100 for performance

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: 2 + Math.random() * 3,
      dx: (Math.random() - 0.5) * 0.8,
      dy: (Math.random() - 0.5) * 0.8,
      color: theme === "dark" ? "rgba(155,81,224,0.7)" : "rgba(59,130,246,0.7)",
    }));

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    let mouse = { x: w / 2, y: h / 2 };
    const mouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", mouseMove);

    const draw = () => {
      // Background gradient
      const gradient = ctx.createLinearGradient(0, h, w, 0);
      gradient.addColorStop(0, "#100c5f");
      gradient.addColorStop(0.5, "#000000");
      gradient.addColorStop(1, "#3d0275");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      const parallaxX = (mouse.x - w / 2) * 0.01;
      const parallaxY = (mouse.y - h / 2) * 0.01;

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;

        ctx.beginPath();
        ctx.fillStyle = p.color;

        // ✨ Glow Effect (very fast)
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;

        ctx.arc(p.x + parallaxX, p.y + parallaxY, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none w-full h-full"
    />
  );
};

export default AIAnimatedBackground;
