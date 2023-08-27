import HelperMethods from "../../../../../common-methods/helper-methods";

const helperMethodObj = new HelperMethods()

//Test suite to validate udemy partner pages
describe("Test suite to validate udemy partner pages on staging env: ", () => {

    it('Test to validate udemy partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('staging_env').partner_pages.udemy)
        cy.wait(15000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-udemy-staging' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")");

        // add functional tests
    })

    it('Test to validate udemy-india partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('staging_env').partner_pages.udemy_india)
        cy.wait(15000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-udemy-india-staging' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")");

        // add functional tests
    })
})

