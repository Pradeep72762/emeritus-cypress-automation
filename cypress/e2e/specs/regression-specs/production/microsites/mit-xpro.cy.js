import HelperMethods from "../../../../../common-methods/helper-methods";

const helperMethodObj = new HelperMethods()

beforeEach('Launch microsite mit-xpro : ', function () {
    // Steps which need to be executed before each test case - navigate to page 
    helperMethodObj.visitPage(Cypress.env('prod_env').microsites_pages.mit_xpro)
});

//Test suite to validate microsite mit-xpro
describe("Test suite to validate microsite mit-xpro : ", () => {
    it('Test suite to validate microsite mit-xpro : ', () => {
        cy.wait(5000);
        cy.percySnapshot('mit-xpro' + "(" + Cypress.browser.name + ")");
    })
})
