/**
 * @swagger
 * components:
 *   schemas:
 *     CreditCardInfo:
 *       required:
 *         - cardNumber
 *       properties:
 *         cardNumber:
 *           type: string
 *           description: The credit card number
*/

export interface CreditCardInfo {
    cardNumber: string;
}