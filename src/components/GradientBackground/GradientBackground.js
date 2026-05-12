import { useEffect, useRef } from "react";
import './GradientBackground.scss';

export default function GradientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animFrameId;

    const orbs = [
      { x: 0.2,  y: 0.3, r: 0.50, color: [37, 25, 210],  speed: 0.00025, phase: 0   },
      { x: 0.7,  y: 0.6, r: 0.45, color: [255, 68, 0],  speed: 0.00030, phase: 1.2 },
      { x: 0.5,  y: 0.2, r: 0.40, color: [236, 43, 122],  speed: 0.00025, phase: 2.5 },
      { x: 0.3,  y: 0.8, r: 0.35, color: [255, 166, 0],  speed: 0.00040, phase: 4.0 },
      { x: 0.85, y: 0.2, r: 0.30, color: [37, 25, 210],   speed: 0.00020, phase: 3.1 },
    ];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw(ts) {
      const W = canvas.width, H = canvas.height;
      ctx.fillStyle = "#04010f";
      ctx.fillRect(0, 0, W, H);

      orbs.forEach(o => {
        const px = (o.x + 0.18 * Math.sin(ts * o.speed + o.phase)) * W;
        const py = (o.y + 0.18 * Math.cos(ts * o.speed * 0.7 + o.phase)) * H;
        const rad = o.r * Math.max(W, H);
        const g = ctx.createRadialGradient(px, py, 0, px, py, rad);
        const [r, gr, b] = o.color;
        g.addColorStop(0,   `rgba(${r},${gr},${b},0.60)`);
        g.addColorStop(0.5, `rgba(${r},${gr},${b},0.20)`);
        g.addColorStop(1,   `rgba(${r},${gr},${b},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      });

      animFrameId = requestAnimationFrame(draw);
    }
    animFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="canvas"
    />
  );
}