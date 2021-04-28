import app from "./api";

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
