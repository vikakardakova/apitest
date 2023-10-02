describe("SECOND APP WITH API  ", () => {
  beforeEach(() => {
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
  it ("Overview open", () => {
      cy.visit('http://5.189.186.217/overview');
      cy.contains(" Огляд ");
  })
  it ("Analytics open", () => {
      cy.visit('http://5.189.186.217/overview');
      cy.contains(" Аналітика ").click();
  })

  it("Api test with category", () => {
    cy.request({
      method: "GET",
      url: "http://5.189.186.217/api/category",
      headers: {
        Authorization: window.localStorage.getItem("auth-token")
      },
    });
  });


  it("Api - create category", () => {
    cy.request({
      method: "POST",
      url: "http://5.189.186.217/api/category",
      headers: {
        Authorization: window.localStorage.getItem("auth-token")
      },
      body: {
        name: "Viktoria API TEST"
      }
    });
  });


  it("Api - delete category", () => {
    cy.request({
      method: "DELETE",
      url: "http://5.189.186.217/api/category/651ae95b146a28199b52ef16",
      headers: {
        Authorization: window.localStorage.getItem("auth-token")
      }
    });
  });
});
