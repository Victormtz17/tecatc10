import { Shape } from "../types/shape";

export const shapes: Shape[] = [
  { id: 1, type: "square", side: 6 } as const,
  { id: 2, type: "triangle", base: 10, height: 4 } as const,
  { id: 3, type: "circle", radius: 5 } as const
];


  