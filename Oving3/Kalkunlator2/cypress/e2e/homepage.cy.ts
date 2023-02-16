describe("Tests for visiting root", () => {
    it("visits the app root url and checks titles", () => {
      cy.visit("http://localhost:5173/");
      cy.contains("h1", "Calculator");
    });
  
    
  });