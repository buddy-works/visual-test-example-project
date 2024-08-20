describe("snapshot example", () => {
  it("Take snapshot 1", () => {
    cy.visit('/');
    new Array(10).fill("").forEach((_, index) => {
      cy.takeSnap(`Snapshot ${index}`);
    });
  });
  //
  // it("Take snapshot 2", () => {
  //   Cypress.on("uncaught:exception", (err, runnable) => {
  //     // returning false here prevents Cypress from
  //     // failing the test
  //     return false;
  //   });
  //   cy.visit("https://buddy.works/pricing");
  //   cy.takeSnap("Snapshot 2");
  // });
  //
  // it("Take snapshot 2", () => {
  //   cy.visit("/page");
  //   cy.wait(1000);
  //   new Array(5).fill("").forEach((_, index) => {
  //     cy.takeSnap(`Group/Snapshot2 ${index}`);
  //   });
  // });
  //
  // it("Take snapshot 4", () => {
  //   cy.visit("https://buddy.works/blog");
  //   cy.takeSnap("Snapshot 4", { widths: [375, 600, 1280] });
  // });

  // it("Take snapshot", () => {
  //   Cypress.on("uncaught:exception", () => {
  //     // returning false here prevents Cypress from
  //     // failing the test
  //     return false;
  //   });
  //   cy.visit("https://buddy.works/sign-up");
  //   // cy.takeSnap("Snapshot google");
  // });
});
