 /**
 * @swagger
 * /creditcard/validate:
 *  post:
 *    description: Validate a credit card number
 *    produces:
 *      - application/json
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreditCardInfo'
 *    responses:
 *      200:
 *        description: validation result
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreditCardValidationResult'
 */

import express from "express";
import { validateCreditCardNumber } from "../services/credit-card-validation-service";

const router = express.Router();

router.post("/validate", (req: express.Request, res: express.Response): void => {
    const cardNumber: string = req.body.cardNumber;
    if (!cardNumber) {
        res.status(400);
        res.json({ errorMessage: "Missing paramer 'cardNumber'"});
        return;
    }

    res.status(200);
    res.json(validateCreditCardNumber(cardNumber));
});

export default router;
