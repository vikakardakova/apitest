import { DbHelper } from "../support/apiHelper";

describe("Tests with DB ", () => {
  beforeEach(() => {
    cy.LoginApi();
  })

  it.only("Database request for category", () => {
    DbHelper.getAllCategories().then((categories) => {
      console.log(categories);
    });
    DbHelper.getOneName("test category 4").then((categories) => {
      console.log(categories);
    })
  })
})