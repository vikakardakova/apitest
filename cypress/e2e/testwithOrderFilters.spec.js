describe("Add order ", () => {
    beforeEach(() => {
      cy.LoginApi();
    });
    let orderNumber;
    it("Create order", () => {
      cy.visit("http://5.189.186.217/overview/");
      cy.intercept("POST", "http://5.189.186.217/api/order").as ("Order");
      cy.contains(" Додати замовлення ").click();
      cy.get(".card.waves-effect.pointer[tabindex='0']").first().click();
      cy.contains("button", 'Додати').click();
      cy.contains("Завершити").click();
      cy.contains("Підтвердити").click();
      cy.wait("@Order").then((res) => {
        console.log(res.response.body); 
        if (res.response.body && res.response.body.order) {
          orderNumber = res.response.body.order;
          cy.log(orderNumber);
        } else {
          cy.log("Property 'order' is not present in the response body.");
        }
      });
})

it("Check filters", () => {
  cy.visit("http://5.189.186.217/overview");
  cy.wait("@lastResponse");
  cy.contains("Історія").click();
  cy.get('.page-title > .btn > .material-icons').click();
  // eslint-disable-next-line
  cy.get('input#number').click({force: true }).type(orderNumber);   
  cy.contains("Применить").click();
  cy.get('tbody > tr > :nth-child(1)').should('exist');
  })
}) 