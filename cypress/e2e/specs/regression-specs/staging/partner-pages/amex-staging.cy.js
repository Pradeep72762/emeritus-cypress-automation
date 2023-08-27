import HelperMethods from "../../../../../common-methods/helper-methods";

const helperMethodObj = new HelperMethods()

//Test suite to validate amex partner pages
describe("Test suite to validate amex partner pages on staging env: ", () => {

    it('Test to validate amex partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('staging_env').partner_pages.amex)
        cy.wait(15000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-amex-staging' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")");
       
        // add functional tests
    })

    it('Test to validate amex-india partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('staging_env').partner_pages.amex_india)
         cy.wait(15000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-amex-india-staging' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")");
        
        // add functional tests
    })
})

