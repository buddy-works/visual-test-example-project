describe("snapshot example", () => {
    it("Take snapshot 1", () => {
      cy.visit('/');
  
      new Array(1).fill("").forEach((_, index_1) => {
        cy.takeSnap(`Snapshot ${index_1}`);
        new Array(1).fill("").forEach((_, index_2) => {
          cy.takeSnap(`Group ${index_1}/Snapshot ${index_2}`);
          new Array(1).fill("").forEach((_, index_3) => {
            cy.takeSnap(`Group ${index_1}/Group ${index_2}/Snapshot ${index_3}`);
            new Array(1).fill("").forEach((_, index_4) => {
              cy.takeSnap(`Group ${index_1}/Group ${index_2}/Group ${index_3}/Snapshot ${index_4}`);
              new Array(1).fill("").forEach((_, index_5) => {
                cy.takeSnap(`Group ${index_1}/Group ${index_2}/Group ${index_3}/Group ${index_4}/Snapshot ${index_5}`);
                new Array(1).fill("").forEach((_, index_6) => {
                  cy.takeSnap(`Group ${index_1}/Group ${index_2}/Group ${index_3}/Group ${index_4}/Group ${index_5}/Snapshot ${index_6}`);
                  new Array(1).fill("").forEach((_, index_7) => {
                    cy.takeSnap(`Group ${index_1}/Group ${index_2}/Group ${index_3}/Group ${index_4}/Group ${index_5}/Group ${index_6}/Snapshot ${index_7}`);
                    new Array(1).fill("").forEach((_, index_8) => {
                      cy.takeSnap(`Group ${index_1}/Group ${index_2}/Group ${index_3}/Group ${index_4}/Group ${index_5}/Group ${index_6}/Group ${index_7}/Snapshot ${index_8}`);
                      new Array(1).fill("").forEach((_, index_9) => {
                        cy.takeSnap(`Group ${index_1}/Group ${index_2}/Group ${index_3}/Group ${index_4}/Group ${index_5}/Group ${index_6}/Group ${index_7}/Group ${index_8}/Snapshot ${index_9}`);
                        new Array(1).fill("").forEach((_, index_10) => {
                          cy.takeSnap(`Group ${index_1}/Group ${index_2}/Group ${index_3}/Group ${index_4}/Group ${index_5}/Group ${index_6}/Group ${index_7}/Group ${index_8}/Group ${index_9}/Snapshot ${index_10}`);
                          new Array(1).fill("").forEach((_, index_11) => {
                            cy.takeSnap(`Group ${index_1}/Group ${index_2}/Group ${index_3}/Group ${index_4}/Group ${index_5}/Group ${index_6}/Group ${index_7}/Group ${index_8}/Group ${index_9}/Group ${index_10}/Snapshot ${index_11}`);
                            new Array(1).fill("").forEach((_, index_12) => {
                              cy.takeSnap(`Group ${index_1}/Group ${index_2}/Group ${index_3}/Group ${index_4}/Group ${index_5}/Group ${index_6}/Group ${index_7}/Group ${index_8}/Group ${index_9}/Group ${index_10}/Group ${index_11}/Snapshot ${index_12}`);
                            }); 
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
});