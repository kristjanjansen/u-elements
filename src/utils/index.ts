import { arc } from "d3";

export function deg2rad(deg: number = 0): number {
  return (deg * Math.PI) / 180;
}
export function rad2deg(rad: number = 0): number {
  return (rad * 180) / Math.PI;
}

export function pol2car(angle: number, radius: number) {
  return [
    Math.cos((angle - 90) * (Math.PI / 180)) * radius,
    Math.sin((angle - 90) * (Math.PI / 180)) * radius,
  ];
}

export function car2pol(x: number, y: number): [number, number] {
  const angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
  const radius = Math.sqrt(x * x + y * y);
  return [angle, radius];
}

export function remap(
  value: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number
): number {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

export const arcPath = (
  start: number,
  stop: number,
  inner = 0,
  outer = 100,
  corner = 0,
  padding = 0
) =>
  arc()
    .padAngle(0)
    .startAngle(deg2rad(start))
    .endAngle(deg2rad(stop))
    .innerRadius(inner)
    .outerRadius(outer)
    .cornerRadius(corner)
    .padAngle(deg2rad(padding))();
