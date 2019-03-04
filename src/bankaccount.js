function BankAccount(name) {
    this.name = name;
    this.errorWarning = function () {
        if (typeof name !== 'string') {
            throw new Error('Please enter a valid name.');
        }
    };
    this.balance = 0;
    this.statements = [];
};

BankAccount.prototype.deposit = function (amount) {
    if (typeof amount !== 'number' || amount < 0) {
        throw new Error('Please enter a valid number.');
    }
    this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
    if (typeof amount !== 'number' || amount < 0) {
        throw new Error('Please enter a valid number.');
    }
    this.balance -= amount;
};



module.exports = BankAccount;