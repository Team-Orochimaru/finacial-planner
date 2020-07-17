# eBudget

Budgeting can be hard. Our app makes it easy to create a well-organized budget for all your personal financial needs.

## About

**eBudget uses technologies including:**
* [Plaid API](https://plaid.com/docs/)
* Frontend – React.js, Redux
* Backend – Express.js, Sequelize, Postgres
* Style – Materialize CSS, CSS

## Installing

git clone https://github.com/Team-Orochimaru/financial-planner.git

npm install

createdb financial-planner: create postgres database

npm run start-dev: start developer environment with local server and webpack

npm run seed: populate database with dummy users

Visit http://localhost:8080 to start shopping on a local server.

If you want to run the server and/or webpack separately, you can also npm run start-server and npm run build-client.

## Customize

* Create a file called secrets.js in the project root
* This file is listed in .gitignore, and will only be required in your development environment
* Its purpose is to attach the secret environment variables that you will use while developing
* It's very important that you not push it to Github! This information is private! Someone else may use your API keys.
* Example of secrets.js file:

process.env.GOOGLE_CLIENT_ID = 'Your Google Client ID here'

process.env.GOOGLE_CLIENT_SECRET = 'Your Google Client Secret here'

process.env.GOOGLE_CALLBACK = '/auth/google/callback'

# OAuth

To use OAuth with Google, refactor the customized information with your own Google Client information. You may find them from Google API dashboard.

# Authors

* Rob Arcand
* Iskak Mantyubetov
* Ian Gelfand
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
