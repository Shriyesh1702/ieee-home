import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function SignalCurve({
  yOffset,
  amplitude,
  frequency,
  phase,
  opacity,
  zOffset,
}) {
  const lineRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    const points = [];

    for (let x = -12; x <= 12; x += 0.15) {
      const y = yOffset + Math.sin(x * frequency + phase + t * 0.4) * amplitude;

      points.push([x, y, zOffset]);
    }

    lineRef.current.geometry.setPositions(points.flat());
  });

  return (
    <Line
      ref={lineRef}
      points={[[0, 0, 0]]}
      color="#00AEEF"
      transparent
      opacity={opacity}
      lineWidth={1.5}
    />
  );
}
