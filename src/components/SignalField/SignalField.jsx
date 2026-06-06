import { Canvas } from "@react-three/fiber";
import "./SignalField.css";
import SignalCurve from "./SignalCurve";
import SignalParticles from "./SignalParticles";

export default function SignalField() {
  const curves = [];
  const curveConfigs = [];

  for (let i = 0; i < 25; i++) {
    const centerFactor = 1 - Math.abs(i - 12) / 12;

    curves.push(
      <SignalCurve
        key={i}
        yOffset={-5 + i * 0.4}
        amplitude={0.1 + centerFactor * 1.2}
        frequency={0.2}
        phase={i * 0.3}
        opacity={0.05 + centerFactor * 0.15}
        zOffset={(i - 12) * 0.15}
      />,
    );
    curveConfigs.push({
      yOffset: -5 + i * 0.4,
      amplitude: 0.2 + centerFactor * 0.8,
      frequency: 0.2,
      phase: i * 0.3,
      opacity: 0.03 + centerFactor * 0.08,
      zOffset: (i - 12) * 0.15,
    });
  }

  return (
    <div className="signal-field">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        {curveConfigs.map((curve, i) => (
          <SignalCurve key={i} {...curve} />
        ))}
        <SignalParticles count={200} curves={curveConfigs} />
      </Canvas>
    </div>
  );
}
