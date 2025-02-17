describe("crop example", () => {
    it("crop", () => {
      cy.visit('/crop');
      cy.takeSnap('Snapshot crop');
    });
  });
  