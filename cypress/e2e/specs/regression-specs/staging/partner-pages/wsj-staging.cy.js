import HelperMethods from "../../../../../common-methods/helper-methods";

const helperMethodObj = new HelperMethods()

//Test suite to validate wsj partner page
describe("Test suite to validate wsj partner pages on staging env: ", () => {

    it('Test to validate wsj partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('staging_env').partner_pages.wsj)
        cy.wait(10000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-wsj-staging' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")",{
            percyCSS: `@media screen and (max-width:768px) {
                .logo-parent display-block {
                 position: static !important
                 }
               }`
        });

        // add functional tests
    })

    it('Test to validate wsjplus partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('staging_env').partner_pages.wsjplus)
        cy.wait(10000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-wsjplus-staging' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")");

        // add functional tests
    })

    it('Test to validate wsjup partner page : ', () => {
        helperMethodObj.visitPage(Cypress.env('staging_env').partner_pages.wsjup)
        cy.wait(10000)
        cy.viewport(1280, 720);
        cy.percySnapshot('pp-wsjup-staging' + "(" + Cypress.browser.name + "-v" + Cypress.browser.version + ")");

        // add functional tests
    })
})

