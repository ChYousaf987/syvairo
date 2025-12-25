import { useEffect, useRef } from "react";

const AnimatedCanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h;
    let t = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t += 0.0015;

      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";

      /* ================= BASE ================= */

      ctx.clearRect(0, 0, w, h);

      if (isDark) {
        // DARK MODE BASE
        ctx.fillStyle = "#0a0b11";
        ctx.fillRect(0, 0, w, h);
      } else {
        // LIGHT MODE BASE
        ctx.fillStyle = "rgba(245, 247, 255, 0.85)";
        ctx.fillRect(0, 0, w, h);
      }

      /* ================= PURPLE DRIFT ================= */

      const px = w * 0.3 + Math.sin(t * 0.8) * 150;
      const py = h * 0.4 + Math.cos(t * 0.7) * 120;
      const purple = ctx.createRadialGradient(px, py, 0, px, py, w * 0.7);

      if (isDark) {
        purple.addColorStop(0, "rgba(155, 81, 224, 0.42)");
        purple.addColorStop(0.45, "rgba(155, 81, 224, 0.18)");
      } else {
        purple.addColorStop(0, "rgba(155, 81, 224, 0.18)");
        purple.addColorStop(0.45, "rgba(155, 81, 224, 0.08)");
      }

      purple.addColorStop(1, "rgba(155, 81, 224, 0)");
      ctx.fillStyle = purple;
      ctx.fillRect(0, 0, w, h);

      /* ================= BLUE DRIFT ================= */

      const bx = w * 0.7 + Math.cos(t * 1.3) * 180;
      const by = h * 0.3 + Math.sin(t * 1.4) * 110;
      const blue = ctx.createRadialGradient(bx, by, 0, bx, by, w * 0.6);

      if (isDark) {
        blue.addColorStop(0, "rgba(59, 130, 246, 0.40)");
        blue.addColorStop(0.4, "rgba(59, 130, 246, 0.20)");
      } else {
        blue.addColorStop(0, "rgba(59, 130, 246, 0.16)");
        blue.addColorStop(0.4, "rgba(59, 130, 246, 0.08)");
      }

      blue.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.fillStyle = blue;
      ctx.fillRect(0, 0, w, h);

      /* ================= SOFT OVERLAY ================= */

      const overlay = ctx.createLinearGradient(0, 0, 0, h * 0.6);
      overlay.addColorStop(
        0,
        isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.45)"
      );
      overlay.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = overlay;
      ctx.fillRect(0, 0, w, h);

      /* ================= VIGNETTE (DARK ONLY) ================= */

      if (isDark) {
        const vignette = ctx.createRadialGradient(
          w / 2,
          h / 2,
          w * 0.15,
          w / 2,
          h / 2,
          w * 0.8
        );
        vignette.addColorStop(0, "rgba(0,0,0,0)");
        vignette.addColorStop(1, "rgba(0,0,0,0.85)");
        ctx.fillStyle = vignette;
        ctx.fillRect(0, 0, w, h);
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default AnimatedCanvasBackground;
