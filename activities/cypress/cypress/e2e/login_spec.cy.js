import { LoginPage } from "./pages/login_page"

const login = new LoginPage();

describe('loign spec', () => {
  beforeEach(() => {
    // visits the login page before each test case
    cy.visit("https://conduit.realworld.how/login");
  })

  it("should greet with 'Sign in' ", () => {
    // checks to see if 'Sign in' message is on the screen
    cy.contains("Sign in");
  });

  it("should have link to register an account", () => {
    // checks to see if the register a new account link is present
    cy.contains("Need an account?").should("have.attr", "href", "/register");
  })

  it("sign in button should be disabled if missing fields", () => {
    // checks that sign in button is disabled prior to filling in the email and password
    cy.get("form").contains("Sign in").should("be.disabled");

    //calls submitEmail from LoginPage class instace with param 
    login.submitEmail("invalidEmail@invalidemail.com");
    //calls submitPassword from LoginPage class instace with param 
    login.submitPassword("invalidPassword");
    // checks to see that the sign in button has become enabled 
    cy.get("form").contains("Sign in").should("be.enabled");
  });

  it("should print invalid credentials message if email/password are invalid", () => {
    // calls class instance to fill in info and click submit button
    login.submitEmail("invalidEmail@invalidemail.com");
    login.submitPassword("invalidPassword");
    login.clickSubmit();

    // checks to see that we get an error for invalid account credentials
    cy.get('.error-messages > li').contains("email or password is invalid");
  });

  it("should navigate to homepage after login is successful", () => {
    // cypress function to look at the fixtures we have, passing in the users
    cy.fixture("users").then((users) => {
      // filling out the info with the users fixture and clicking submit
      login.submitEmail(users.email);
      login.submitPassword(users.password);
      login.clickSubmit();
    })

    // checking that the url is at the homepage
    cy.url().should("include", "");
  })
})