export class NavigateTo {
  loginPage() {
    cy.visit(Cypress.env('login')); // Cypress.env: takes the parameter of defined in the paranthesis
  }
}

export const navigateTo = new NavigateTo();
