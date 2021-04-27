export default {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Credit Card API",
            version: "1.0.0",
            description: "This API allows you to validate credit cards.",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
        },
        servers: [
            {
                url: "http://localhost:8080",
            },
        ],
    },
    apis: ["./dist/routes/*.js", "./dist/models/*.js"],
};
