const BankAccount = require('../src/bankaccount');

describe('currentAccount', () => {
    let currentAccount;
    beforeEach(() => {
        currentAccount = new BankAccount('Vitnija Bluzma'); 
    });

    it('currentAccount type is object', () => {
        console.log(currentAccount);
        expect(currentAccount).toBeInstanceOf(Object);
    });
});