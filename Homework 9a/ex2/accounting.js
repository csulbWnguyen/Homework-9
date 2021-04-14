
module.exports = class Account{
    constructor(firstName) {
        this.firstName = firstName;
        this.balance = 0;
    }
    //credit account.
    credit(amount)
    {this.balance+= amount;}
    // describe user
    describe(){
        return `account: ${this.firstName}, balance: ${this.balance}`
    }
};