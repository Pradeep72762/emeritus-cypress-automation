const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  //reporter: 'cypress-mochawesome-reporter', //for html reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure = true;
      //require('cypress-mochawesome-reporter/plugin')(on);
    },    
  //experimentalSessionAndOrigin: true, //The experimentalSessionAndOrigin configuration option was removed in Cypress version 12.0.0.
  chromeWebSecurity: false
  },
});


