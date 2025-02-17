describe("error example", () => {
    it("error", () => {
      cy.visit('/error');
      cy.takeSnap('Snapshot error');
    });
  });
  