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
    if (typeof amount !== 'number' || amount < 0) {throw new Error('Please enter a valid number.');}
    this.balance += amount;
    let dateNow = new Date().toString();
    this.statements.push({'date': dateNow,'deposited': amount});
};

BankAccount.prototype.withdraw = function (amount) {
    if (typeof amount !== 'number' || amount < 0) {throw new Error('Please enter a valid number.');}
    if (amount > this.balance) {throw new Error(`You don't have enough funds to withdraw ${amount}.`);}
    this.balance -= amount;
    let dateNow = new Date().toString();
    this.statements.push({'date': dateNow,'withdrawn': amount});
};

BankAccount.prototype.checkBalance = function () {
    let dateNow = new Date().toString();
    return 'Balance at' + dateNow + ': ' + this.balance;
};

BankAccount.prototype.viewStatement = function () {
    function sortByMostRecent(a, b) {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    };

    const sortedByRecentDate = this.statements.sort(sortByMostRecent);
    return sortedByRecentDate;
};

BankAccount.prototype.filterDeposits = function () {
    return this.viewStatement().filter(transaction => transaction.hasOwnProperty('deposited'));
}



module.exports = BankAccount;