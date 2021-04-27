 /**
 * @swagger
 * /creditcard:
 *  post:
 *    description: Validate a credit card number
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: card number
 *        description: The credit card number
 *        in: json
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: validation result
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/CreditCardValidationResult'
 */

import express from "express";
import { validateCreditCard } from "../controllers/credit-card-controller";

const router = express.Router();

router.post("", validateCreditCard);

export default router;
