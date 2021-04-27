import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./swagger";
import swaggerJsdoc from "swagger-jsdoc";

// Generate swagger docs from options and route markup
const specs = swaggerJsdoc(swaggerOptions);

const router = express.Router();

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(specs, { explorer: true }));

export default router;
