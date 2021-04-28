import { CreditCardType } from "../models/credit-card-type";
import { CreditCardValidationResult } from "../models/credit-card-validation-result";

/**
 * Validates the credit card number
 * @param cardNumber the input card number
 * @returns an object with the validation results for the card number
 */
export const validateCreditCardNumber = (cardNumber: string): CreditCardValidationResult => {
    const trimmedCardNumber = cardNumber.trim().replace(/ /g, "");
    const result: CreditCardValidationResult = { cardNumber, cardType: determineCardType(trimmedCardNumber), isValid: false };
    if (result.cardType !== CreditCardType.Unknown && validateCardNumberSum(trimmedCardNumber)) {
        result.isValid = true;
    }
    return result;
};


/**
 * Determines which card type the provided card number is
 * @param cardNumber the input card number
 * @returns the card type the number appears to belong to
 */
const determineCardType = (cardNumber: string): CreditCardType => {
    if (cardNumber.match(/^3[47]/) && cardNumber.length === 15) {
        return CreditCardType.Amex;
    } else if (cardNumber.match(/^6011/) && cardNumber.length === 16) {
        return CreditCardType.Discover;
    } else if (cardNumber.match(/^5[1-5]/) && cardNumber.length === 16) {
        return CreditCardType.MasterCard;
    } else if (cardNumber.match(/^4/) && (cardNumber.length === 13 || cardNumber.length === 16)) {
        return CreditCardType.Visa;
    }

    return CreditCardType.Unknown;
}

/**
 * Determine whether the card numbers sum is valid according to the Luhn algorithm
 * @param cardNumber the input card number
 * @returns whether the card number satisfies the test
 */
const validateCardNumberSum = (cardNumber: string): boolean => {
    let sum = 0;

    // Parse the card number as numbers and reverse the order for further processing
    for (let i = 0; i < cardNumber.length; i++) {
        const letter = cardNumber.charAt(cardNumber.length - i - 1);
        let num = parseInt(letter);

        if (isNaN(num)) {
            return false;
        }

        if (i % 2 !== 0) {
            // If the index of the digit is odd then double it
            num *= 2;

            if (num >= 10) {
                sum += 1;
            }
        }

        sum += num % 10;

        // if (num >= 10) {
        //     // Handle doubled values between 10 and 19
        //     sum += 1 + num % 10;
        // } else {
        //     // Handle remaining values between 0 and 9
        //     sum += num;
        // }
    }

    return sum % 10 === 0;
}
