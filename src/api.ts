import express from "express";
import creditCardRoutes from "./controllers/credit-card-controller";
import swaggerRoutes from "./config/swagger-route";
import bodyParser from "body-parser";

const api = express();

// Configure app to use bodyParser
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

// Register the routes
api.use("/creditcard", creditCardRoutes);
api.use("/swagger", swaggerRoutes);

export default api;