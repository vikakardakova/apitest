Cypress.Commands.add("LoginApi", () => {
  cy.request({
    method: "POST",
    url: "http://5.189.186.217/api/auth/login",
    body: {
      email: "maysalexandr@gmail.com",
      password: "123456",
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
      cy.wrap(categories).as("categories");
      cy.wrap(res).should("have.property", "status", 200);
      //cy.wrap(categories).as("categories");
    });
  });