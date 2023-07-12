/// <reference types="cypress" />

describe('Input form Tests', () => {
  beforeEach('navigate to register page', () => {
    cy.clearCookies();
    cy.visit('/registration_form');
  });

  it('Check Different Button Actions', () => {
    cy.get('input[name="firstname"]').type('Mike');
    cy.get('input[name="lastname"]').type('Brown');
    cy.get('input[name="username"]').type('CrazyHeart');

    const email = `formtest${Math.floor(100000 + Math.random() * 900000)}@cydeo.com`;
    cy.get('input[name="email"]').type(email);
    const password = `test${Math.floor(100000 + Math.random() * 900000)}`;
    cy.get('input[name="password"]').type(password);

    const phoneNumber = `555-000-${Math.floor(1000 + Math.random() * 9000)}`;
    cy.get('input[name="phone"]').type(phoneNumber);
    cy.get('input[name="birthday"]').type('01/01/1990');
  });

  it('Check different input box fields and verify', () => {
    cy.get('.radio')
      .find('[type=radio]')
      .then((radio) => {
        cy.wrap(radio).first().check().should('be.checked'); // cypress works in a chainable functions

        // check confirmation label is visible
        cy.wrap(radio).eq(1).check().should('be.checked');
        cy.get('[data-bv-icon-for="gender"]').should('be.visible');
        // third radio button is not checked
        cy.wrap(radio).eq(2).should('not.be.checked');
      });
  });

  it('Check different checkbox actions', () => {
    cy.get('[type="checkbox"]').then((checkbox) => {
      cy.wrap(checkbox).eq(1).check().should('be.checked');
      // uncheck
      cy.wrap(checkbox).eq(1).uncheck().should('not.be.checked');
      //
      cy.wrap(checkbox).eq(2).should('have.value', 'javascript').check().should('be.checked');
    });
  });

  it('Check selection of a single choice from a select dropdown', () => {
    // select one element
    cy.get('select[name="job_title"]').select('SDET');
    // assert that dropdown has correct text after selecting
    cy.get('select[name="job_title"]').contains('SDET');
  });

  it('Check selection of all list options', () => {
    // provide data from fixtures file
    cy.fixture('departments').then((departments) => {
      // get all options of menu,iterate them
      cy.get('select[name="department"]>option').each((option, index) => {
        // get each option text
        const optionText = option.text();
        // cy.log(optionText);
        // cy.log(index);
        // cy.log(departments[index]);
        cy.get('select[name="department"]')
          .select(optionText)
          .should('have.value', option.val())
          // .should('have.text', departments[index])
          .contains(departments[index]);
      });
    });
  });
});
