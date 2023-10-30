describe("Add order ", () => {
    beforeEach(() => {
      cy.LoginApi();
    });
    let orderNumber;
    it("Create order", () => {
      cy.visit("http://5.189.186.217/overview/");
      //cy.wait("@lastResponse", { timeout: 7000 });
      cy.intercept("POST", "http://5.189.186.217/api/order",{statusCode: 201}).as ("Order");
      cy.contains(" Додати замовлення ").click();
      cy.get(".card.waves-effect.pointer[tabindex='0']").first().click();
      cy.wait(1000);
      cy.contains("button", 'Додати').click();
      cy.contains("Завершити").click();
      cy.contains("Підтвердити").click();
      cy.wait("@Order").then((res) => {
        console.log(res.response.body); // Вивести вміст відповіді у консоль
        if (res.response.body && res.response.body.order) {
          orderNumber = res.response.body.order;
          cy.log(orderNumber);
        } else {
          cy.log("Property 'order' is not present in the response body.");
        }
      });
})
}) 