# Credit Card Validation API
This is a simple credit card validation API using NodeJS, Express, Linting, Swagger and Jest.

**Commands**
 
To run the API locally at http://localhost:8080

    npm run start

To build the API

    npm run build

To run the unit tests

    npm run test

To run the linting rules

    npm run lint

**Services**

A single API endpoint has been provided to allow validation of a credit card.

    POST /creditcard/validate
 with a request body such as 
 

    {
        "cardNumber": "4111111111111111"
    }

**Swagger UI**

While running the application a swagger / Open API UI is available at `/swagger` (e.g. `http://localhost:8080/swagger`)

**Extensions**

The following is a list of possible extensions
 - Extend with validation of credit card expiry and cvv number
 - Add more test cases of erroneous input
 - Add more API/server test cases
 - Improve build pipeline to provide live/hot reloading
 - Add coverage tests
 - Build a UI
