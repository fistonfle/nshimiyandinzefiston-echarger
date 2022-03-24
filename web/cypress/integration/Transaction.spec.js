describe("Should come to login", () => {
  it("Comes to login page", () => {
    cy.visit("http://localhost:3000/getin");

    cy.get("div.transaction")
      .should("be.visible")
      .within(() => {
        cy.get("input#username").type("fiston");
        cy.get("input#meter").type("384628");

        cy.get("button").click();
        cy.url().should("eq", "http://localhost:3000/home");        
      });
  });

 
});

