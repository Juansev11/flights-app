# Flights Search React App

This project was built with React.js, Create React App & Craco, Typescript, Emotion, and Zustand. Deployed with Vercel.

## How to run the app
On `client` install the dependencies with `npm install`.
Then, run the following command `npm run start`. It runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

On `server` install the dependencies with `npm install`.
Then, run the following command `npm run start`. It runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:4000) to view it in the browser.

The server contains a list of programatically generated flights on a JSON file being served to the `client` app for mocking the data. The origin and destinations are combinations of the following IATA city codes: CGN, BER, MUC, HAM, FRA.

## How to run tests

- Run the following command `npm run test` to launch the test runner in the interactive watch mode.

## How to build

Run the following command `npm run build`. It builds the app for production to the `build` folder.

## Project structure (client/frontend)

In order to scale the application in the easiest and most maintainable way, most of the code is kept inside the features folder, which should contain different feature-based things. Every feature folder should contain domain specific code for a given feature. This allows to keep functionalities scoped to a feature and not mix its declarations with shared things. This is much easier to maintain than a flat folder structure with many files.

### `Assets`

Assets folder can contain all the static files such as images, fonts, etc.

### `Components`

Contains UI sharable components. These components can be used in any part of the app as their logic is not linked to a particular process.

### `Config`

All the global configuration, env variables etc. get exported from here and used in the app

### `Features`

Modules containing the main business logic of the application

### `Hooks`

Shared hooks used across the entire application

### `Stores`

Global state stores in this case zustand

### `Test`

Test utilities

### `Styles`

Contains the style settings for the app. This provides some global styles through Emotion and constants related to the look and feel of the app.

### `*.test.tsx`

Contains the test cases and the fixtures needed for testing. There are tests for components flow
and for the utils methods.

## Notes
- Added Accessible headings and general markup, including hidden text only available for screen readers
- Debounced input methods
- Applied filters to query strings as well. Can search flights using the query strings too.
- Responsive grid from desktop to mobile
- Unit tests on utility methods and integration tests on component flow