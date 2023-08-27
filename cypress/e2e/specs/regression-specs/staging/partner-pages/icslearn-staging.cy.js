import HelperMethods from "../../../../../common-methods/helper-methods";

const helperMethodObj = new HelperMethods()

//Test suite to validate icslearn partner page
describe("Test suite to validate icslearn partner pages on staging env: ", () => {

    it('Test to validate icslearn partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('staging_env').partner_pages.icslearn)
        cy.wait(15000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-icslearn-staging' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")");

        // add functional tests
    })
})

