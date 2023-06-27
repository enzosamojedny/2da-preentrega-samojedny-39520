# Trabajo-Final-JS-Samojedny-39520

This is a bank simulator, you can perform several fun tasks with it: 

1-You have to register (it's mandatory in order to access the program, else you won't be able to play with the content)
The website will use your inputs to register you as a new client (make sure you input a high gross salary)

2- You can transfer money to two hard-coded real clients, and you will get a receipt for each transaction. Each receipt has a unique
number of transaction, as well as the current time and more useful data.

3- Ask for loans

4-Buy and sell stocks using Alphavantage API (stock prices are updated at the end of the week, as it's meant for long-term investing)

5-You can get the total sum of the stocks invested in the main page, and right next to it, the liquidity left.

This program mostly uses sessionStorage to save all the data, as it's sole purpose is to be a demonstration of JS.
It cointains a lot of error-handling code, to make sure every input and output is correct.

There are a couple of known issues i have to work on, when i have enough time, these are:

*There is a bug in loans.js, where the loan amount is not correctly updated in sessionStorage ( loan key should be transformed in updatedAmount, right now the bug can only be by-passed if you buy 1 stock, and the value of frontend.js will be updated correctly)

*There is a bug in investments.js, where it won't let you sell stocks if you don't have enough cash (It is because of some error-handling mistakes in sell functions)
