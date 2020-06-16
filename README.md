# CarbonComponentsSlowTests

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) to reproduce an issue with Carbon.

## How to reproduce

- Clone this repo
- npm ci
- ng test

Then open the DevTools in the Chrome window created by Karma.
Look at the `vendor.js` file in Network tab. It will have 100+ megabytes 🤯

