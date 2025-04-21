// src/controller/geometryController.ts
import { Shape } from "../types/shape";

export class GeometryController {
  private shapes: Shape[];

  constructor(shapes: Shape[]) {
    this.shapes = shapes;
  }

  calculateAreas() {
    return this.shapes.map((shape: Shape) => {
      if (shape.type === "square") {
        return {
          id: shape.id,
          type: shape.type,
          area: shape.side * shape.side
        };
      }

      if (shape.type === "triangle") {
        return {
          id: shape.id,
          type: shape.type,
          area: (shape.base * shape.height) / 2
        };
      }

      if (shape.type === "circle") {
        return {
          id: shape.id,
          type: shape.type,
          area: Math.PI * shape.radius * shape.radius
        };
      }

      return {
        id: (shape as any).id,
        type: (shape as any).type,
        area: null
      }
    });
  }
}
