// src/routes/geometryRoutes.ts
import express from "express";
import { GeometryHandler } from "../handler/geometryHandler";
import { GeometryController } from "../controller/geometryController";
import { shapes } from "../db/geometryData";

const router = express.Router();

const controller = new GeometryController(shapes);
const handler = new GeometryHandler(controller);

// Ruta que devuelve áreas de figuras geométricas
router.get("/areas", (req, res) => handler.getAreas(req, res));

export default router;

