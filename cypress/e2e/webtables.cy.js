/// <reference types="cypress" />

describe('WebTable tests', { baseUrl: 'https://demoqa.com' }, () => {
  /**
     
     */
  beforeEach('Navigate to upload page', () => {
    cy.clearCookies();
    cy.visit('/webtables');
  });

  it('Check finding and editing a record', () => {
    //locate table body - then navigate through this element to find,then update info with another person
    cy.get('.rt-tbody') //get table body
      .contains('.rt-tr-group', 'Alden') //get the row
      .then((row) => {
        cy.wrap(row).find('[title="Edit"]').click();
        cy.get('#firstName').clear().type('Mesut');
        cy.get('#lastName').clear().type('Baykal');
        cy.get('#submit').click();
        cy.wrap(row).find('.rt-td').eq(0).should('contain', 'Mesut');
        cy.wrap(row).find('.rt-td').eq(1).should('contain', 'Baykal');
      });
  });
});
