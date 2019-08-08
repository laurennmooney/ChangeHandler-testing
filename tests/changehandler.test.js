let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function() {

    // Set up a test below...
    test("The ChangeHandler class is defined.", function() {
        // Remember, you can arrange, act, and assert...start small
        expect(ChangeHandler).toBeDefined();
    });

    test("the amountDue is set based on an argument", function() {
        let changeHandler = new ChangeHandler(100);
        expect(changeHandler.amountDue).toBe(100);
    });

    test("the cashTendered is set to zero", function() {
        let changeHandler = new ChangeHandler();
        expect(changeHandler.cashTendered).toBe(0);
    });

    // testing the insertCoin method
    test("cashTendered increase by 25 cents when a quarter is added", function() {
        let changeHandler = new ChangeHandler();
        changeHandler.insertCoin("quarter");
        expect(changeHandler.cashTendered).toBe(25);
    });
    test("cashTendered increase by 10 cents when a dime is added", function() {
        let changeHandler = new ChangeHandler();
        changeHandler.insertCoin("dime");
        expect(changeHandler.cashTendered).toBe(10);
    });
    test("cashTendered increase by 5 cents when a nickel is added", function() {
        let changeHandler = new ChangeHandler();
        changeHandler.insertCoin("nickel");
        expect(changeHandler.cashTendered).toBe(5);
    });
    test("cashTendered increase by 10 cents when a penny is added", function() {
        let changeHandler = new ChangeHandler();
        changeHandler.insertCoin("penny");
        expect(changeHandler.cashTendered).toBe(1);
    });
    test("calling cashTendered function multiple times continues to add on the amount", function() {
        let changeHandler = new ChangeHandler();
        changeHandler.insertCoin("quarter");
        changeHandler.insertCoin("quarter");
        changeHandler.insertCoin("quarter");
        expect(changeHandler.cashTendered).toBe(75);
    });
    
    // testing the isPaymentSufficient method
    test("isPaymentSufficient returns true when cashTendered is more than the amountDue", function() {
        let changeHandler = new ChangeHandler(20);
        changeHandler.insertCoin("quarter");
        let payment = changeHandler.isPaymentSufficient();
        expect(payment).toBe(true);
    });
    test("isPaymentSufficient returns false when cashTendered is less than the amountDue", function() {
        let changeHandler = new ChangeHandler(30);
        changeHandler.insertCoin("quarter");
        let payment = changeHandler.isPaymentSufficient();
        expect(payment).toBe(false);
    });
    test("isPaymentSufficient returns true when cashTendered is equal to the amountDue", function() {
        let changeHandler = new ChangeHandler(25);
        changeHandler.insertCoin("quarter");
        let payment = changeHandler.isPaymentSufficient();
        expect(payment).toBe(true);
    });

    // test the giveChange method
    test("32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2", function() {
        let changeHandler = new ChangeHandler(50);
        changeHandler.insertCoin("quarter");
        changeHandler.insertCoin("quarter");
        changeHandler.insertCoin("dime");
        changeHandler.insertCoin("dime");
        changeHandler.insertCoin("dime");
        changeHandler.insertCoin("penny");
        changeHandler.insertCoin("penny");
        expect(changeHandler.giveChange()).toEqual(
            {
            Quarters: 1, 
            Dimes: 0, 
            Nickels: 1, 
            Pennies: 2,
            }
        );
    })});

    test("10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0", function() {
        let changeHandler = new ChangeHandler(15);
        changeHandler.insertCoin("quarter");
        expect(changeHandler.giveChange()).toEqual(
            {
                Quarters: 0, 
                Dimes: 1, 
                Nickels: 0, 
                Pennies: 0
            }
        )
    });

    test("27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2", function() {
        let changeHandler = new ChangeHandler(30);
        changeHandler.insertCoin("quarter");
        changeHandler.insertCoin("quarter");
        changeHandler.insertCoin("nickel");
        changeHandler.insertCoin("penny");
        changeHandler.insertCoin("penny");
        expect(changeHandler.giveChange()).toEqual(
            {
                Quarters: 1, 
                Dimes: 0, 
                Nickels: 0, 
                Pennies: 2
            }
        )
    });

    test("68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", function() {
        let changeHandler = new ChangeHandler(32);
        changeHandler.insertCoin("quarter");
        changeHandler.insertCoin("quarter");
        changeHandler.insertCoin("quarter");
        changeHandler.insertCoin("quarter");
        expect(changeHandler.giveChange()).toEqual(
            {
                Quarters: 2, 
                Dimes: 1, 
                Nickels: 1, 
                Pennies: 3
            }
        )
    });
