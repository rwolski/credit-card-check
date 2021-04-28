import { CreditCardType } from "../models/credit-card-type";
import { validateCreditCardNumber } from "./credit-card-validation-service";

describe("CreditCardValidationService", () => {
    it("should evaluate 4111111111111111 is a valid Visa card", () => {
        expect(validateCreditCardNumber("4111111111111111")).toMatchObject({
            cardNumber: "4111111111111111",
            cardType: CreditCardType.Visa,
            isValid: true,
        });
    });

    it("should evaluate 4111 1111 1111 1111 is a valid Visa card", () => {
        expect(validateCreditCardNumber("4111 1111 1111 1111")).toMatchObject({
            cardNumber: "4111 1111 1111 1111",
            cardType: CreditCardType.Visa,
            isValid: true,
        });
    });

    it("should evaluate 4a11111111111111 is an invalid Visa card", () => {
        expect(validateCreditCardNumber("4a11111111111111")).toMatchObject({
            cardNumber: "4a11111111111111",
            cardType: CreditCardType.Visa,
            isValid: false,
        });
    });

    it("should evaluate 4111111111111 is an invalid Visa card", () => {
        expect(validateCreditCardNumber("4111111111111")).toMatchObject({
            cardNumber: "4111111111111",
            cardType: CreditCardType.Visa,
            isValid: false,
        });
    });

    it("should evaluate 4012888888881881 is a valid Visa card", () => {
        expect(validateCreditCardNumber("4012888888881881")).toMatchObject({
            cardNumber: "4012888888881881",
            cardType: CreditCardType.Visa,
            isValid: true,
        });
    });

    it("should evaluate 378282246310005 is a valid AMEX card", () => {
        expect(validateCreditCardNumber("378282246310005")).toMatchObject({
            cardNumber: "378282246310005",
            cardType: CreditCardType.Amex,
            isValid: true,
        });
    });

    it("should evaluate 6011111111111117 is a valid Discover card", () => {
        expect(validateCreditCardNumber("6011111111111117")).toMatchObject({
            cardNumber: "6011111111111117",
            cardType: CreditCardType.Discover,
            isValid: true,
        });
    });

    it("should evaluate 5105105105105100 is a valid MasterCard card", () => {
        expect(validateCreditCardNumber("5105105105105100")).toMatchObject({
            cardNumber: "5105105105105100",
            cardType: CreditCardType.MasterCard,
            isValid: true,
        });
    });

    it("should evaluate 5105105105105100 is a valid MasterCard card", () => {
        expect(validateCreditCardNumber("5105105105105100")).toMatchObject({
            cardNumber: "5105105105105100",
            cardType: CreditCardType.MasterCard,
            isValid: true,
        });
    });

    it("should evaluate 5105 1051 0510 5106 is an invalid MasterCard card", () => {
        expect(validateCreditCardNumber("5105 1051 0510 5106")).toMatchObject({
            cardNumber: "5105 1051 0510 5106",
            cardType: CreditCardType.MasterCard,
            isValid: false,
        });
    });

    it("should evaluate 9111111111111111 is an invalid MasterCard card", () => {
        expect(validateCreditCardNumber("9111111111111111")).toMatchObject({
            cardNumber: "9111111111111111",
            cardType: CreditCardType.Unknown,
            isValid: false,
        });
    });
});
