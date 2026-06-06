import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { getCurveY } from "./curveuatils";

export default function SignalParticles({ count = 1500, curves }) {
  const ref = useRef();

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => {
      const fromLeft = Math.random() > 0.5;

      return {
        curveIndex: Math.floor(Math.random() * curves.length),

        direction: fromLeft ? 1 : -1,

        progress: fromLeft ? Math.random() * 0.4 : 0.6 + Math.random() * 0.4,
      };
    });
  }, [count, curves]);

  const positions = useMemo(() => new Float32Array(count * 3), [count]);

  useFrame((state) => {
    if (!ref.current) return;

    const t = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const particle = particles[i];

      const cfg = curves[particle.curveIndex];

      const distFromCenter = Math.abs(particle.progress - 0.5);

      const speed = 0.00015 + (0.5 - distFromCenter) * 0.0004;

      if (particle.direction > 0) {
        particle.progress += speed;
      } else {
        particle.progress -= speed;
      }

      const x = -12 + particle.progress * 24;

      const y = getCurveY(
        x,
        cfg.amplitude,
        cfg.frequency,
        cfg.phase,
        t,
        cfg.yOffset,
      );

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = cfg.zOffset;

      const reachedCenter = Math.abs(particle.progress - 0.5) < 0.01;

      if (reachedCenter) {
        const fromLeft = Math.random() > 0.5;

        particle.direction = fromLeft ? 1 : -1;

        particle.progress = fromLeft
          ? Math.random() * 0.3
          : 0.7 + Math.random() * 0.3;

        particle.curveIndex = Math.floor(Math.random() * curves.length);
      }
    }

    ref.current.geometry.attributes.position.array = positions;

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#00AEEF"
        size={0.035}
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}
