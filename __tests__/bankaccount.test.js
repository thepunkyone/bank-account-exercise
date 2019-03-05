const BankAccount = require('../src/bankaccount');

describe('currentAccount', () => {
    let currentAccount;
    beforeEach(() => {
        currentAccount = new BankAccount('Vitnija Bluzma'); 
    });

    //currentAccount object and its properties
    it('currentAccount type is object', () => {
        expect(currentAccount).toBeInstanceOf(Object);
    });
    it('Name property value is a string', () => {
        expect(typeof currentAccount.name('Vitnija Bluzma')).toBe('string');
        expect(() => currentAccount.name(10)).toThrowError('Please enter a valid name.'); 
        expect(() => currentAccount.name(true)).toThrowError('Please enter a valid name.');
    });
    it('currentAccount has a balance property with the starting value of 0', () => {
        expect(currentAccount.balance).toBe(0);
    });
    it('currentAccount has a statements property with the starting value of empty array', () => {
        expect(currentAccount.statements).toBeInstanceOf(Array);
        expect(currentAccount.statements).toEqual([]);

        let dateNow = new Date().toString();
        currentAccount.deposit(100);
        expect(currentAccount.statements).toEqual([{'date': dateNow, 'deposited': 100}]);
        currentAccount.withdraw(50);
        currentAccount.statements = [{'date': dateNow, 'deposited': 100}, {'date': dateNow, 'withdrawn': 50}];
    });

    //deposit method
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
        expect(typeof currentAccount.balance).toBe('number');
    }); 

    //withdraw method
    it('withdraw method\'s property can only be a number', () => {
        expect(() => currentAccount.withdraw('100')).toThrowError('Please enter a valid number');
    });
    it('withdraw method\'s property cannot be a negative number', () => {
        expect(() => currentAccount.withdraw(-100)).toThrowError('Please enter a valid number');
    });
    it('withdraw method decreases account balance by the defined amount', () => {
        currentAccount.balance = 200;
        currentAccount.withdraw(100);
        expect(currentAccount.balance).toBe(100);
        expect(typeof currentAccount.balance).toBe('number');
    });
    it('error if withdrawing an amount that exceeds the account balance', () => {
        expect(() => currentAccount.withdraw(100)).toThrowError('You don\'t have enough funds to withdraw 100.');
    }); 

    //checkBalance method
    it('checkBalance method returns the account balance', () => {
        let dateNow = new Date().toString();
        currentAccount.deposit(50);
        expect(currentAccount.checkBalance()).toBe('Balance at' + dateNow +': ' + 50);
    });

    //viewStatement method
    it('viewStatement method returns an array of transactions', () => {
        expect(currentAccount.viewStatement()).toEqual([]);

        const date = 'Tue Mar 05 2019 00:41:00 GMT+0000 (GMT)';
        const date2 = 'Tue Mar 05 2019 00:51:00 GMT+0000 (GMT)';

        currentAccount.statements = [{'date': date, 'deposited': 50}, {'date': date2, 'withdrawn': 10}];
        expect(currentAccount.viewStatement()).toEqual([{'date': date2, 'withdrawn': 10}, {'date': date, 'deposited': 50}]);
    });

    //filter methods for statements
    it('filter methods return only deposits or only withdrawals', () => {
        const date = 'Tue Mar 05 2019 00:41:00 GMT+0000 (GMT)';
        const date2 = 'Tue Mar 05 2019 00:51:00 GMT+0000 (GMT)';

        currentAccount.statements = [{'date': date, 'deposited': 50}, {'date': date2, 'withdrawn': 10}];
        expect(currentAccount.filterDeposits()).toEqual([{'date': date, 'deposited': 50}]);
        expect(currentAccount.filterWithdrawals()).toEqual([{'date': date2, 'withdrawn': 10}]);
    });    
});