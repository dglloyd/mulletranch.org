const { defineConfig } = require("cypress");
let baseUrl = process.env.CI ? 'http://localhost:8888' : 'http://localhost:1313'

module.exports = defineConfig({
  e2e: {
    baseUrl: baseUrl,
    supportFile: false,
  },
});
