/**
 * @swagger
 * components:
 *   schemas:
 *     CreditCardValidationResult:
 *       required:
 *         - cardnumber
 *         - cardType
 *         - isValid
 *       properties:
 *         cardnumber:
 *           type: string
 *           description: The card number validated
 *         cardType:
 *           type: string
 *           description: The card type if recognised
 *         isValid:
 *           type: boolean
 *           description: Whether the card number is valid
*/

export interface CreditCardValidationResult {
    cardNumber: string;
    cardType: string;
    isValid: boolean;
}

