const { defineConfig } = require("cypress");
const { configurePlugin } = require("cypress-mongodb");

module.exports = defineConfig({
  //retries: 1,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },
  env: {
    mongodb: {
      uri: "mongodb://testUser:qwerty12345@5.189.186.217:27017/?authMechanism=DEFAULT",
      database: "admin",
      //collection: "collection_name",
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      configurePlugin(on);
    },
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4200/",
    viewportWidth: 1200,
  },
});
