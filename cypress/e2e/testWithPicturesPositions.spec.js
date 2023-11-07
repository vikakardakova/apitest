describe("DZ for lesson 12", () => {
    beforeEach(() => {
      cy.LoginApi();
    });
  

    it("UI: Add picture and position", () => {
      cy.visit("http://5.189.186.217/categories");
      cy.contains("Додати категорію").click();
      // eslint-disable-next-line
      cy.get("input[type='file']").selectFile("cypress/dog.jpeg", {force: true});
      cy.get("input[id='name']").type("With dog picture + position");
      cy.contains("Зберегти зміни").click();
      cy.contains("Додати позицію").click();
      cy.get('#pos-name').type("with dog");
      cy.get('#pos-cost').clear();
      cy.get('#pos-cost').type(1099);
      cy.get("button[class='modal-action btn waves-effect']").click({force: true});
    })
})