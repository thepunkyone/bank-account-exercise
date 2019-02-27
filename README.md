# Bank Account

![NotWest](images/notwest.png)

You work at a large UK bank - NotWest. You need a way to check how much money customers have in the bank, but also to deposit (add more funds) and withdraw (take funds out) from their accounts. Every time a customer deposits or withdraws, these transactions should be kept track of, just in case the customer wants to check their statement later.

Your mission for this task is to use everything you've learnt so far about TDD, arrays, objects and constructor/prototype in JavaScript to build an application that allows you to do your job at NotWest more efficiently.

This is a **self-led** exercise which is **optional**, so there are no walkthroughs or steps to guide you. Feel free to ask for guidance on your cohort Slack channel. Good luck.

## Requirements

A customer should be able to:

* Deposit money into a current account
* Withdraw money from a current account
* Check the current balance of their current account
* View a list of transactions on their current account

You should approach this in a test-driven manner.

## Hints

The following functions are examples of what you might write tests and complete the code for:

* `deposit`
* `withdraw`
* `checkBalance`
* `viewStatement`

You will likely need to keep track of the customer's balance and transactions on a `currentAccount` object.

## Bonus Points (and more practice with arrays)

A customer should be able to:

* Filter their bank statement to see withdrawals _or_ deposits only.
