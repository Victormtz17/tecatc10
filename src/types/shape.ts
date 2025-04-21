export interface Square {
    id: number;
    type: "square";
    side: number;
  }
  
  export interface Triangle {
    id: number;
    type: "triangle";
    base: number;
    height: number;
  }
  
  export interface Circle {
    id: number;
    type: "circle";
    radius: number;
  }
  
  export type Shape = Square | Triangle | Circle;
  