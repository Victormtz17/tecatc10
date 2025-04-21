import express from "express";
import geometryRoutes from "./src/routes/geometryRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de cálculos geométricos funcionando. Visita /areas");
});

app.use("/", geometryRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
