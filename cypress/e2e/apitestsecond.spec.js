
describe("SECOND APP WITH API  ", () => {
  beforeEach(() => {
  cy.LoginApi();
  });



  it ("UI: Overview open", () => {
      cy.visit('http://5.189.186.217/overview');
      cy.contains(" Огляд ");
  })
  // it ("UI: Analytics open", () => {
  //     cy.visit('http://5.189.186.217/overview');
  //     cy.contains(" Аналітика ").click();
  // })


  it("API: Open categories", () => {
    cy.request({
      method: "GET",
      url: "http://5.189.186.217/api/category",
      headers: {
        Authorization: window.localStorage.getItem("auth-token")
      },
    });
  });


  let _id; 
  it("API - Create category and save id", () => {
    cy.request({
      method: "POST",
      url: "http://5.189.186.217/api/category",
      headers: {
        Authorization: window.localStorage.getItem("auth-token")
      },
      body: {name: "then delete"}
    }).then ((res) => {
      _id = res.body._id;
    });
  });


  it("API - Get list of categories", () => {
    cy.getCategories();
    cy.get("@categories").then((categories) => {
      expect(categories.length).to.be.greaterThan(2); // треба виправити і порівняти з юай
    });

  }); 


  it ("UI: Check list of categories", () => {
    cy.visit('http://5.189.186.217/overview');
    cy.contains(" Асортимент ").click(); //не розумію як порахувати категоріі на юай і який взагалі флоу? отримання даних з юай та порівняння з апі має бути в одному тесті чи якось інакше?

})

  // it("API - create category without saving ID", () => {
  //   cy.request({
  //     method: "POST",
  //     url: "http://5.189.186.217/api/category",
  //     headers: {
  //       Authorization: window.localStorage.getItem("auth-token")
  //     },
  //     body: {
  //       name: "new 03.10"
  //     }
  //   });
  // });

  it("API - delete one particular category", () => {
    cy.request({
      method: "DELETE",
      url: "http://5.189.186.217/api/category/651c158c146a28199b52f61c",
      headers: {
        Authorization: window.localStorage.getItem("auth-token")
      }
    });
  });

  it("API - delete category by ID", () => {
    cy.request({
      method: "DELETE",
      url: `http://5.189.186.217/api/category/${_id}`,
      headers: {
        Authorization: window.localStorage.getItem("auth-token")
      }
    });
  });
});
