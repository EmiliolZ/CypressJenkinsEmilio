const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions:{
    reporterDir: "reports",
    reportFilename: "my new report",
    JSON: true,
    html: true
  },
   e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
