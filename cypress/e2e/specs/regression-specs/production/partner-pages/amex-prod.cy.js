import HelperMethods from "../../../../../common-methods/helper-methods";

const helperMethodObj = new HelperMethods()

//Test suite to validate amex partner pages
describe("Test suite to validate amex partner pages on prod env: ", () => {

    it('Test to validate amex partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').partner_pages.amex)
        cy.wait(15000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-amex-prod' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")");

        // add functional tests
    })

    it('Test to validate amex-india partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').partner_pages.amex_india)
        cy.wait(15000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-amex-india-prod' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")");

        // add functional tests
    })
})

