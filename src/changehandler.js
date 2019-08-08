/**
 * This class handles change for a vending machine.
 *
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
  constructor(amountDue) {
    this.amountDue = amountDue;
    this.cashTendered = 0;
  }

  /**
   * The customer inserts a coin, increasing the cashTendered.
   * The parameter "type" is a string that is either quarter, dime, nickel, or penny
   */
  insertCoin(typeOfCoin) {
    if (typeOfCoin === "quarter") {
      this.cashTendered += 25;
    } else if (typeOfCoin === "dime") {
      this.cashTendered += 10;
    } else if (typeOfCoin === "nickel") {
      this.cashTendered += 5;
    } else if (typeOfCoin === "penny") {
      this.cashTendered += 1;
    }
  }

  /**
   * Returns true if enough coins have been inserted to at least meet the amountDue
   */
  isPaymentSufficient() {
      if (this.cashTendered >= this.amountDue) {
        return true;
      } else {
        return false
      }
    }

  giveChange() {
    let changeDue = this.cashTendered - this.amountDue;    

    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    while (changeDue > 0) {
      if (changeDue >= 25) {
        changeDue -= 25;
        quarters++;
      } else if (changeDue >= 10) {
        changeDue -= 10;
        dimes++;
      } else if (changeDue >= 5) {
        changeDue -= 5;
        nickels++;
      } else {
        changeDue -= 1;
        pennies++;        
      }
    }

    // TODO return the correct change in the following format...
    return {
      Quarters: quarters,
      Dimes: dimes,
      Nickels: nickels,
      Pennies: pennies
    };
  }
}


module.exports = { ChangeHandler };