import express from "express";
import { CreditCardType } from "../models/credit-card-type";
import { CreditCardValidationResult } from "../models/credit-card-validation-result";

/**
 * Event API controller
 */
export const validateCreditCard = (req: express.Request, res: express.Response): void => {
    const cardNumber: string = req.body.cardNumber;
    if (!cardNumber) {
        res.status(400);
        res.json({ errorMessage: "Missing paramer 'cardNumber'"});
        return;
    }

    const trimmedCardNumber = cardNumber.trim().replace(/ /g, "");
    const result: CreditCardValidationResult = { cardNumber, cardType: determineCardType(trimmedCardNumber), isValid: false };
    if (result.cardType !== CreditCardType.Unknown && validateCardNumberSum(trimmedCardNumber)) {
        result.isValid = true;
    }

    res.status(200);
    res.json(result);
}

const determineCardType = (cardNumber: string): CreditCardType => {
    console.log(cardNumber);
    if (cardNumber.match(/^3[47]/) && cardNumber.length === 15) {
        return CreditCardType.AMEX;
    } else if (cardNumber.match(/^6011/) && cardNumber.length === 16) {
        return CreditCardType.Discover;
    } else if (cardNumber.match(/^5[1-5]/) && cardNumber.length === 16) {
        return CreditCardType.MasterCard;
    } else if (cardNumber.match(/^4/) && (cardNumber.length === 13 || cardNumber.length === 16)) {
        return CreditCardType.Visa;
    }

    return CreditCardType.Unknown;
}

const validateCardNumberSum = (cardNumber: string): boolean => {
    const cardNumbers: number[] = [];

    // Parse the card number as numbers and reverse the order for further processing
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        const letter = cardNumber.charAt(i);
        const num = parseInt(letter);
        if (isNaN(num)) {
            throw new Error();
        }

        cardNumbers.push(num);
    }

    // Double every odd number in the list
    for (let i = 0; i < cardNumbers.length; i++) {
        if (i % 2 !== 0) {
            cardNumbers[i] *= 2;
        }
    }

    let sum = 0;
    for (let i = 0; i < cardNumbers.length; i++) {
        let num = cardNumbers[i];

        // Add the individual digits of the number onto the sum
        do {
            const digit = num % 10;
            sum += digit;

            // Divide by 10 - essentially stripping the last digit
            num = Math.floor(num / 10);
        } while (num > 0);
    }

    return sum % 10 === 0;
}
