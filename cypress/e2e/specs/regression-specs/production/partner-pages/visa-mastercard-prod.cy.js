import HelperMethods from "../../../../../common-methods/helper-methods";

const helperMethodObj = new HelperMethods()

//Test suite to validate visa-mastercard partner pages
describe("Test suite to validate visa-mastercard partner pages on prod env: ", () => {

    it('Test to validate visa partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').partner_pages.visa)
        cy.wait(15000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-visa-prod' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")");

        // add functional tests
    })

    it('Test to validate mastercard partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').partner_pages.mastercard)
        cy.wait(15000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-mastercard-prod' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")");

        // add functional tests
    })
})

