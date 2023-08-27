import HelperMethods from "../../../../../common-methods/helper-methods";

const helperMethodObj = new HelperMethods()

//Test suite to validate udemy partner pages
describe("Test suite to validate udemy partner pages on prod env: ", () => {

    it('Test to validate udemy partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').partner_pages.udemy)
        cy.wait(15000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-udemy-prod' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")");

        // add functional tests
    })

    it('Test to validate udemy-india partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').partner_pages.udemy_india)
        cy.wait(15000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-udemy-india-prod' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")");

        // add functional tests
    })
})

