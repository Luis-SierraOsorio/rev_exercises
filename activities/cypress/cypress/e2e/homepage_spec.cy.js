describe('homepage spec', () => {
  beforeEach(() => {
    cy.visit("https://conduit.realworld.how/");
  });

  it('should have sign in button', () => {
    cy.contains("Sign in");
  });

  it("clicking on sign in button should redirect to sign in page", () => {
    cy.contains("Sign in").click();
    cy.url().should("include", "login");
  })

  it("shuld have a register button", () => {
    cy.contains("Sign up");
  })
})