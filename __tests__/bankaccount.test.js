const BankAccount = require('../src/bankaccount');

describe('currentAccount', () => {
    let currentAccount;
    beforeEach(() => {
        currentAccount = new BankAccount();
    });

    it('currentAccount type is object', () => {
        expect(currentAccount).toBeInstanceOf(Object);
    });
});