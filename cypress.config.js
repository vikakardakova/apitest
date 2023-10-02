const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4200/",
    viewportWidth: 1200,
  },
});