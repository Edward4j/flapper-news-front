# Flapper News
Angular 1 test project - uses the same angular version as for Sparkup Norge project.

## Stack

### Node server

* Node > 4.4.7 (6.9.5 preferred)
* ES5
* ExpressJS

### Angular application

* AngularJS 1.3.15
* ES5

## How to dev on this project ?

There are 2 ways :

- Online mode (plugged to the production API) : `npm run dev`
- Offline mode (use mocks) : `npm run dev:offline`

## How to run tests ?

- Step 1 : run the app in Offline mode : `npm run dev:offline`
- Step 2 : run the selenium server using 2.53.0 version : `webdriver-manager start --version.standalone=2.53.0`
- Step 3 : `npm run test`

## How to check code quality ?

Just run `npm run eslint`.

If there is lots of error, most of them can be fixed automatically using `npm run eslint:fix`.

All the rules are detailed in the .eslintrc.json and you can find all the necessary documentation
on a specific rule by hiting : http://eslint.org/docs/rules/<rule-name>
