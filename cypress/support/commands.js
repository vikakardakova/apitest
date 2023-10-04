Cypress.Commands.add("LoginApi", () => {
  cy.request({
    method: "POST",
    url: "http://5.189.186.217/api/auth/login",
    body: {
      // email: "maysalexandr@gmail.com",
      // password: "123456",
      email: Cypress.env("email"),
      password: Cypress.env("password").toString()
    },
  }).then((res) => {
    const token = res.body.token;
    console.log(token);
    cy.visit("http://5.189.186.217/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("auth-token", token);
      },
    });
  });
});



Cypress.Commands.add("getCategories", () => {
    cy.request({
      method: "GET",
      url: "http://5.189.186.217/api/category",
      headers: {
        Authorization: window.localStorage.getItem("auth-token"),
      },
    }).then((res) => {
      const categories = res.body;
      console.log(categories);
      cy.wrap(categories).as("categoriesAPI");
      cy.wrap(res).should("have.property", "status", 200);
    });
  });


  Cypress.Commands.add("getHistory", () => {
    cy.request({
      method: "GET",
      url: "http://5.189.186.217/api/order",
      headers: {
        Authorization: window.localStorage.getItem("auth-token"),
      },
    }).then((res) => {
      const historyAPI = res.body;
      console.log(historyAPI);
      cy.wrap(historyAPI).as("historyAPI");
      //cy.wrap(res).should("have.property", "status", 200);
  });
});