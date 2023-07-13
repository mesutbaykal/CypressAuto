const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.cydeo.com/',
    env: {
      login: '/login',
      apiUrl: 'https://demoqa.com',
      apiBooks: '/BookStore/v1/Books',
      generateUser: '/Account/v1/User',
      generateToken: '/Account/v1/GenerateToken',
      loginAPI: '/Account/v1/Login',
    },
    video: false,
    retries: 1,
    defaultCommandTimeout: 5000,
    viewportHeight: 800,
    viewportWidth: 1200,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
