const BankAccount = require('../src/bankaccount');

describe('currentAccount', () => {
    let currentAccount;
    beforeEach(() => {
        currentAccount = new BankAccount('Vitnija Bluzma'); 
    });

    it('currentAccount type is object', () => {
        expect(currentAccount).toBeInstanceOf(Object);
    });

    it('Name property value is a string', () => {
        expect(typeof currentAccount.name).toBe('string');
        currentAccount = new BankAccount(10);
        expect(() => currentAccount.errorWarning()).toThrowError('Please enter a valid name.'); 
        currentAccount = new BankAccount(true);
        expect(() => currentAccount.errorWarning()).toThrowError('Please enter a valid name.'); 
    });
});