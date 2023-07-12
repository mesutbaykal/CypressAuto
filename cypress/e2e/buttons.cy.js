/// <reference types="cypress" />

describe('Context: My First Tests', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit('/multiple_buttons');
  });

  it('Check Different Button Actions', () => {
    // select a button with text
    cy.contains('Button 2').should('be.visible').click();
    cy.contains('Clicked on button two!').should('be.visible');
    // get list of elements
    cy.get('.btn.btn-primary').then(($buttons) => {
      cy.wrap($buttons).eq(2).click();
      // assert the text
      cy.contains('Clicked on button three!').should('be.visible');
    });
    // got all buttons with tagName
    cy.get('button').each((item, index, list) => {
      // assert length of list,verify number of buttons
      expect(list).to.have.length(6);
      expect(item).to.have.attr('onclick');
    });

    // get all buttons, after that get only the item and check for text of each item,if it is equal to Button 4,then click on it
    cy.get('button').each((item) => {
      if (item.text() === 'Button 4') {
        cy.log(item.text());
        cy.wrap(item).click(); // wrap() turns JQuery into Cypress
        cy.contains('Clicked on button four!').should('be.visible');
      }
    });
  });
});
