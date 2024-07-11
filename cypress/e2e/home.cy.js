// client/cypress/e2e/home.cy.js
describe('Home Page test', () => {
    it('Check The Input field', () => {
        cy.visit('/');
        cy.get('input').type('Cindrella');
        cy.get('button').should('be.visible');
        cy.get('button').click();
        cy.contains('Welcome, Cindrella');
        cy.get('input').should('have.value', 'Cindrella');
    });
});
// npm install cypress --save-dev