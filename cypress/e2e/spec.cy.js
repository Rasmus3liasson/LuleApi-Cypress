describe("Test to see if our page i running on digital ocean", () => {
  it("Visits our deployed site on our digital ocean", () => {
    cy.visit("https://lionfish-app-b672u.ondigitalocean.app/");
  });
});

describe("Test to see that correct host is applied when server is running", () => {
  it("Visits correct local host", () => {
    cy.visit("http://localhost:8080/");

    cy.url().should("include", "localhost:8080");
  });
});

describe("Find logotype", () => {
  it("finds 'img' logotype", () => {
    cy.visit("http://localhost:8080/");

    cy.get(".logotype").should("have.attr", "src", "/static/logo-cinema.png");
  });
});

describe("Logotype have a click event", () => {
  it("clicks logotype", () => {
    cy.visit("http://localhost:8080/");

    cy.get(".logotype")
      .should("have.attr", "src", "/static/logo-cinema.png")
      .click();
  });
});
