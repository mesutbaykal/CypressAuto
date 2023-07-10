/// <reference types="cypress" />

describe("Context: My First Tests", () => {
  before(() => {
    //runs once before all test cases in this describe block,like beforeClass in testNG
  });
  beforeEach(() => {
    //run before each test case,beforeMethod in testNG
    cy.clearCookies();
  });
  after(() => {
    //similar to afterClass in TestNG, runs once after all tests finished
  });
  afterEach(() => {
    //similar to afterMethod in TestNG
  });
  it("Open a web application", () => {
    cy.visit("https://practice.cydeo.com/registration_form");
  });
});
