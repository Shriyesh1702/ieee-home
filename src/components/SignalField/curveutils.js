export function getCurveY(x, amplitude, frequency, phase, time, yOffset) {
  return yOffset + Math.sin(x * frequency + phase + time * 0.4) * amplitude;
}
