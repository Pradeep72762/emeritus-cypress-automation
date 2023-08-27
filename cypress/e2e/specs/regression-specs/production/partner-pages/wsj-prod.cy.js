import HelperMethods from "../../../../../common-methods/helper-methods";

const helperMethodObj = new HelperMethods()

//Test suite to validate wsj partner page
describe("Test suite to validate wsj partner pages on prod env: ", () => {

    it('Test to validate wsj partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').partner_pages.wsj)
        cy.wait(15000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-wsj-prod' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")");

        // add functional tests
    })

    it('Test to validate wsjplus partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').partner_pages.wsjplus)
        cy.wait(15000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-wsjplus-prod' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")");

        // add functional tests
    })

    it('Test to validate wsjup partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').partner_pages.wsjup)
        cy.wait(15000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-wsjup-prod' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")");

        // add functional tests
    })
})

