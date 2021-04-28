import api from "../api";
import request from "supertest";

describe("API", () => {
    it("should response the GET method", async () => {
        await request(api)
            .post("/creditcard/validate")
            .send({ cardNumber: "4111111111111111" })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toMatchObject({
                    cardNumber: "4111111111111111",
                    cardType: "visa",
                    isValid: true,
                });
            });
    });
});
