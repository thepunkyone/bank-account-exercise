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

module.exports = BankAccount;