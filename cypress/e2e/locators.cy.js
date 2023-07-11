/// <reference types="cypress" />

describe("Find or Get Elements by using locators", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit("/login");
  });

  it("Check different locators", () => {
    // by css locator
    cy.get("input[name='username']").type("Mesut"); //every statement creates an object to be interacted, and next command makes operation to the object created at previous statement
    cy.get("[type='text']").clear();

    cy.get("input").each((item, index, list) => {
      //assert the length of the list is 2
      expect(list).to.have.length(2);
      expect(item).to.have.attr("type");
    });
    //by attribute name
    cy.get("[type]");

    //by className
    cy.get(".btn.btn-primary");
    //by id
    cy.get("#wooden_spoon");
    //if I want to use text: no xpath in cypress,but there is a way
    cy.get("button").should("contain", "Login").click();
  });
});
