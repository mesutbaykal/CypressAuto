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
  it.skip("Open a web application", () => {
    cy.visit("https://practice.cydeo.com/registration_form");
  });
  xit("Test 2", () => {
    expect(false).to.equal(false);
  });
  it("Test 3", () => {
    expect(false).not.to.equal(true);
  });
  it("Test 4", () => {
    expect(5).to.equal(5);
  });
  it("Test 5", () => {
    expect(true).to.equal("5" == 5);
  });
});
