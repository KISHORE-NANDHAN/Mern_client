// cypress.config.js file
// we will configure Cypress
const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000',
        setupNodeEvents(on, config) {
            // Implement node event listeners here
        },
    },
});
