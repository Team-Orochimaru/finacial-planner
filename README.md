# eBudget

Budgeting can be hard. Our app makes it easy to create a well-organized budget for all your personal financial needs.

## About

**eBudget uses technologies including:**
* [Plaid API](https://plaid.com/docs/)
* Frontend – [React.js](https://reactjs.org/), [Redux.js](https://redux.js.org/)
* Backend – [Express.js](https://expressjs.com/), [Sequelize ORM](https://sequelize.org/), [PostgreSQL](https://www.postgresql.org/)
* Style – [Materialize CSS](https://materializecss.com/), [CSS](https://www.w3.org/Style/CSS/Overview.en.html)

## Installing

**Use the following commands on your local terminal to download the app and get started:**

`git clone https://github.com/Team-Orochimaru/financial-planner.git`

`cd financial-planner`

`npm install`

`createdb financial-planner`: creates postgres database

`npm run start-dev`: starts developer environment with local server and webpack

`npm run seed`: populates your local database with dummy users

Visit [localhost:8080](http://localhost:8080) to view the app on your local server.

If you want to run the server and/or webpack separately, you can also run `npm run start-server` and `npm run build-client`.

## Customize

* Create a file called secrets.js in your project's root directory
* This file is listed in .gitignore by default, and will only be required in your development environment
* Its purpose is to attach the API-specific environment variables that you will use while developing
* Be sure to keep the information contained in your secrets.js file confidential (i.e. Don't push the file to GitHub)
* Example secrets.js file:

```
process.env.PLAID_CLIENT_ID = 'Your Plaid Client ID goes here';
process.env.PLAID_SECRET = 'Your Plaid Secret goes here';
process.env.PLAID_PUBLIC_KEY = 'Your Plaid Public Key goes here';
```

## Authors

* Rob Arcand
* Ian Gelfand
* Iskak Mantyubetov
* Vasyl Semak

## MVP

* Users can link a bank account and pull in overall balance information and individual transactions
* Users can set a monthly budget by spending category and track against the budget
* Users can see their spending by category
* Savings calculator to help users plan goals related to savings
* Data visualization for key charts / graphs

## Stretch Goals

* Differentiating between bank transactions (debit card) vs. credit card transactions
* Email or text alerts when bills are due
* 401K calculator
* Subscription management (i.e. a clear way to see which subscriptions, such as Spotify, Apple Music, etc, that a user is signed up for and aiming to help cancel unused subscriptions)
* Mobile application
  Technical Challenges
* Third party integration
* Intuitive UI / UX
