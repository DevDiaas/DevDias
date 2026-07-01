import React, { useEffect, useRef, useState } from "react";

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
}

export const ThreeDElement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 460);
    let height = (canvas.height = 460);

    // Grid nodes representing a 3D Sphere
    const nodes: Node3D[] = [];
    const radius = 130;
    const rings = 12;
    const pointsPerRing = 16;

    // Generate Sphere points
    for (let r = 0; r < rings; r++) {
      const phi = (r * Math.PI) / (rings - 1); // elevation from 0 to PI
      const y = Math.cos(phi) * radius;
      const ringRadius = Math.sin(phi) * radius;

      for (let p = 0; p < pointsPerRing; p++) {
        const theta = (p * 2 * Math.PI) / pointsPerRing; // azimuth from 0 to 2PI
        const x = Math.cos(theta) * ringRadius;
        const z = Math.sin(theta) * ringRadius;

        nodes.push({ x, y, z, baseX: x, baseY: y, baseZ: z });
      }
    }

    // Capture local container mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      mouseRef.current.targetX = x * 0.45;
      mouseRef.current.targetY = y * 0.45;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const d = Math.min(parent.clientWidth, 460);
        width = canvas.width = d;
        height = canvas.height = d;
      }
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    let time = 0;

    // Animation Loop
    const draw = () => {
      time += 0.012;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse damping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Rotations
      const angleY = time * 0.25 + mouseRef.current.x * 0.005;
      const angleX = time * 0.15 + mouseRef.current.y * 0.005;
      const angleZ = time * 0.08;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosZ = Math.cos(angleZ);
      const sinZ = Math.sin(angleZ);

      const focalLength = 300;
      const centerX = width / 2;
      const centerY = height / 2;

      // Project nodes in 3D
      const projected = nodes.map((node) => {
        // Organic pulse distortion
        const pulse = 1.0 + Math.sin(time * 1.5 + node.baseY * 0.01) * 0.04;
        let x = node.baseX * pulse;
        let y = node.baseY * pulse;
        let z = node.baseZ * pulse;

        // Rotate Y
        let x1 = x * cosY - z * sinY;
        let z1 = x * sinY + z * cosY;

        // Rotate X
        let y2 = y * cosX - z1 * sinX;
        let z2 = y * sinX + z1 * cosX;

        // Rotate Z
        let x3 = x1 * cosZ - y2 * sinZ;
        let y3 = x1 * sinZ + y2 * cosZ;

        // Final translated Z
        const finalZ = z2 + 200;
        const scale = focalLength / finalZ;

        return {
          sx: centerX + x3 * scale,
          sy: centerY + y3 * scale,
          sz: finalZ,
          scale,
        };
      });

      // Draw Orbiting Outer Rings (Interactive Technological Aesthetic)
      ctx.lineWidth = 1.5;
      
      const drawOrbitRing = (tiltX: number, tiltY: number, color: string, speedMult: number) => {
        ctx.beginPath();
        const segments = 60;
        const ringRad = radius * 1.25;

        for (let s = 0; s <= segments; s++) {
          const theta = (s * 2 * Math.PI) / segments;
          // Coordinates in flat ring
          let rx = Math.cos(theta + time * speedMult) * ringRad;
          let rz = Math.sin(theta + time * speedMult) * ringRad;
          let ry = 0;

          // Rotate around X-tilt
          const cX = Math.cos(tiltX);
          const sX = Math.sin(tiltX);
          const y1 = ry * cX - rz * sX;
          const z1 = ry * sX + rz * cX;

          // Rotate around Y-tilt
          const cY = Math.cos(tiltY + mouseRef.current.x * 0.002);
          const sY = Math.sin(tiltY + mouseRef.current.x * 0.002);
          const x2 = rx * cY - z1 * sY;
          const z2 = rx * sY + z1 * cY;

          const fZ = z2 + 200;
          const sFactor = focalLength / fZ;
          const scrX = centerX + x2 * sFactor;
          const scrY = centerY + y1 * sFactor;

          if (s === 0) ctx.moveTo(scrX, scrY);
          else ctx.lineTo(scrX, scrY);
        }
        ctx.strokeStyle = color;
        ctx.stroke();
      };

      // Draw two offset tech rings orbiting the core sphere
      drawOrbitRing(0.6, 0.4, "rgba(59, 130, 246, 0.35)", 0.5);
      drawOrbitRing(-0.4, -0.6, "rgba(0, 240, 255, 0.25)", -0.4);

      // Draw Sphere connections/lattice (connecting adjacent points)
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = isHovered ? "rgba(59, 130, 246, 0.28)" : "rgba(59, 130, 246, 0.16)";

      for (let r = 0; r < rings - 1; r++) {
        for (let p = 0; p < pointsPerRing; p++) {
          const currIdx = r * pointsPerRing + p;
          const rightIdx = r * pointsPerRing + ((p + 1) % pointsPerRing);
          const downIdx = (r + 1) * pointsPerRing + p;

          // Latitudinal lines
          ctx.beginPath();
          ctx.moveTo(projected[currIdx].sx, projected[currIdx].sy);
          ctx.lineTo(projected[rightIdx].sx, projected[rightIdx].sy);
          ctx.stroke();

          // Longitudinal lines
          ctx.beginPath();
          ctx.moveTo(projected[currIdx].sx, projected[currIdx].sy);
          ctx.lineTo(projected[downIdx].sx, projected[downIdx].sy);
          ctx.stroke();
        }
      }

      // Draw nodes (Sphere points)
      const hoverMultiplier = isHovered ? 1.3 : 1.0;
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const pointSize = Math.max(0.2, (i % 5 === 0 ? 2 : 1) * p.scale * 0.5 * hoverMultiplier);
        
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, pointSize, 0, Math.PI * 2);

        // Highlight every 3rd point with pure neon light for electronic glow
        if (i % 3 === 0) {
          ctx.fillStyle = isHovered ? "rgba(0, 240, 255, 0.85)" : "rgba(0, 240, 255, 0.6)";
        } else if (i % 7 === 0) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
        } else {
          ctx.fillStyle = isHovered ? "rgba(59, 130, 246, 0.65)" : "rgba(59, 130, 246, 0.4)";
        }
        ctx.fill();
      }

      // Draw a highly stylized central core glowing engine
      ctx.beginPath();
      const coreScale = focalLength / 200;
      const corePulse = (45 + Math.sin(time * 3) * 5) * coreScale * hoverMultiplier;
      const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, corePulse);
      grad.addColorStop(0, "rgba(59, 130, 246, 0.22)");
      grad.addColorStop(0.4, "rgba(0, 240, 255, 0.12)");
      grad.addColorStop(1, "rgba(3, 7, 18, 0)");
      ctx.fillStyle = grad;
      ctx.arc(centerX, centerY, corePulse, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full max-w-[460px] aspect-square select-none cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id="3d-tech-canvas-container"
    >
      {/* Visual glowing border container */}
      <div className="absolute inset-0 rounded-full bg-radial from-blue-500/8 via-cyan-500/2 to-transparent blur-3xl" />
      
      {/* Active tech canvas */}
      <canvas
        ref={canvasRef}
        className="relative z-10 block transition-transform duration-500 ease-out hover:scale-105"
        id="3d-sphere-canvas"
      />
      
      {/* Decorative orbital text overlay */}
      <div className="absolute inset-0 pointer-events-none border border-blue-500/10 rounded-full animate-[spin_40s_linear_infinite] opacity-60">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400/20 border border-cyan-400 rounded-full flex items-center justify-center">
          <div className="w-1 h-1 bg-white rounded-full animate-ping" />
        </div>
      </div>
      <div className="absolute inset-8 pointer-events-none border border-cyan-500/5 rounded-full animate-[spin_25s_linear_infinite_reverse] opacity-50" />
    </div>
  );
};
