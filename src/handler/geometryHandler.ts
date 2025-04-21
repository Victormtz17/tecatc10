// src/handler/geometryHandler.ts
import { Request, Response } from "express";
import { GeometryController } from "../controller/geometryController";

export class GeometryHandler {
  private controller: GeometryController;

  constructor(controller: GeometryController) {
    this.controller = controller;
  }

  getAreas(req: Request, res: Response) {
    try {
      const areas = this.controller.calculateAreas();
      res.json(areas);
    } catch (error) {
      res.status(500).json({ error: "Error calculating areas" });
    }
  }
}

