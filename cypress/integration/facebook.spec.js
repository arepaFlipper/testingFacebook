"use strict";

describe("Testing the Facebook website", () => {
  beforeEach(() => {
    cy.visit("/");

  });
  it(`should login`, () => {
    cy.get(`#email`).type(Cypress.env("f_user"));
    cy.get(`#pass`).type(Cypress.env("f_pass"));
    cy.get(`[data-testid="royal_login_button"]`).click()
    cy.get(".UIFullPage_Container").should('exist')
  });

  it('should a register-user-window-form pop up',() => {
    cy.get(`[data-testid="open-registration-form-button"]`).click()
    cy.contains('Sign Up').should('exist')
  })

  it('should display the email confirmation field',() =>{
    cy.get(`[data-testid="open-registration-form-button"]`).click()
    cy.get(`[name="firstname"]`).type(Cypress.env("f_firstname"));
    cy.get(`[name="lastname"]`).type(Cypress.env("f_lastname"));
    cy.get(`[name="reg_email__"]`).type(Cypress.env("f_reg_email__"))
    cy.get(`[name="reg_email_confirmation__"]`).should('be.visible')
  })

  it.skip('should display the email confirmation field',() =>{
    cy.get(`[data-testid="open-registration-form-button"]`).click()
    cy.get(`[name="firstname"]`).type(Cypress.env("f_firstname"));
    cy.get(`[name="lastname"]`).type(Cypress.env("f_lastname"));
    cy.get(`[name="reg_email__"]`).type(Cypress.env("f_reg_email__"))
    cy.get('#Month').select('')
  })

  it('should deny request because there are empty fields',() =>{
    cy.get(`[data-testid="open-registration-form-button"]`).click()
    cy.get(`[name="firstname"]`).type(Cypress.env("f_firstname"));
    cy.get(`[name="lastname"]`).type(Cypress.env("f_lastname"));
    cy.get(`[name="reg_email__"]`).type(Cypress.env("f_reg_email__"))
    cy.contains('Female').click()
    cy.contains('button','Sign Up').click()
  })

  it('should display a warning because confirmation email does not match',() =>{
    cy.get(`[data-testid="open-registration-form-button"]`).click()
    cy.get(`[name="firstname"]`).type(Cypress.env("f_firstname"));
    cy.get(`[name="lastname"]`).type(Cypress.env("f_lastname"));
    cy.get(`[name="reg_email__"]`).type(Cypress.env("f_reg_email__"));
    cy.get(`[name="reg_email_confirmation__"]`).type(`${Cypress.env("f_reg_email__")}x`);
    cy.get(`#password_step_input`).type(Cypress.env("f_pass"))
    cy.get(`._5dbc`).should('be.visible');

  })

});
