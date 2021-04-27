import express from "express";
import creditCardRoutes from "./routes/credit-card-route";
import swaggerRoutes from "./config/swagger-route";
import bodyParser from "body-parser";

const app = express();

// Configure app to use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Register the routes
app.use("/creditcard", creditCardRoutes);
app.use("/swagger", swaggerRoutes);

// Start and listen
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

// Handle 404s for other urls
app.use((req, res) => {
    res.status(404).send("Not found");
});

export default app;
