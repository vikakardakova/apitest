export class DbHelper {
    static getAllCategories () {
    return cy.findMany({}, {collection: "categories"});
    }

    static getOneName (name) {
        return cy.findOne({name}, {collection: "categories"});
    }
}
