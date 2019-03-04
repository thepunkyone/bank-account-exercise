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

    it('currentAccount has a balance property with the starting value of 0', () => {
        expect(currentAccount.balance).toBe(0);
    });
    it('currentAccount has a statements property with the starting value of empty array', () => {
        expect(currentAccount.statements).toEqual([]);
    });

    it('deposit method is a function', () => {
        expect(typeof currentAccount.deposit).toBe('function');
    });
    //How to test separate arguments - mock functions?
    it('deposit method\'s property can only be a number', () => {
        expect(() => currentAccount.deposit('100')).toThrowError('Please enter a valid number');
    });
    it('deposit method\'s property cannot be a negative number', () => {
        expect(() => currentAccount.deposit(-100)).toThrowError('Please enter a valid number');
    });
    it('deposit method increases account balance by the defined amount', () => {
        currentAccount.deposit(100);
        expect(currentAccount.balance).toBe(100);
    }); 

    it('withdraw method\'s property can only be a number', () => {
        expect(() => currentAccount.deposit('100')).toThrowError('Please enter a valid number');
    });
    it('withdraw method\'s property cannot be a negative number', () => {
        expect(() => currentAccount.deposit(-100)).toThrowError('Please enter a valid number');
    });
    it('withdraw method decreases account balance by the defined amount', () => {
        currentAccount.balance = 200;
        currentAccount.withdraw(100);
        expect(currentAccount.balance).toBe(100);
    });
    it('error if withdrawing an amount that exceeds the account balance', () => {
        expect(() => currentAccount.withdraw(100)).toThrowError('You don\'t have enough funds to withdraw 100.');
    }); 
});