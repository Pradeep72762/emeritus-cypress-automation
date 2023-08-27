import HelperMethods from "../../../../../common-methods/helper-methods";

const helperMethodObj = new HelperMethods()

beforeEach('Launch alelo-enterprisepartner Page : ', function () {
    // Steps which need to be executed before each test case - navigate to page 
    helperMethodObj.visitPage(Cypress.env('prod_env').b2b_pages.alelo_enterprisepartner)
});

//Test suite to validate alelo-enterprisepartner page
describe("Test suite to validate alelo-enterprisepartner page : ", () => {
    it('Test suite to validate alelo-enterprisepartner page: ', () => {
        //cy.viewport(1280, 720);
        cy.wait(10000);
        cy.percySnapshot('B2B-alelo-enterprisepartner page' + "(" + Cypress.browser.name + ")");
    })
})
