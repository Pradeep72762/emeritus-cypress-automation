import SearchPage from "../../../../../page-objects/pages/search"
import HelperMethods from "../../../../../common-methods/helper-methods";

const helperMethodObj = new HelperMethods()
const searchPageObj = new SearchPage()

beforeEach('Launch Search Page : ', function () {
    // Steps which need to be executed before each test case - navigate to page 
    helperMethodObj.visitPage(Cypress.env('prod_env').search_page)
    cy.window().its('document').its('readyState').should('eq', 'complete')
});

//Test suite to validate layout of search page
describe('Verify search page layout : ', () => {

    it('Without entering any text, click(press enter) the search button and check that 12 cards are displayed on the result page : ', () => {
        //helperMethodObj.visitPage(Cypress.env('search_page'))
        searchPageObj.searchText(" ");
        searchPageObj.elements.programCards().should('have.length', 12) // assertion to check total 12 cards are shown in result page
    })

    it('Check that the topics, programme types, and universities are all present in the left pane : ', () => {
        searchPageObj.elements.filterCategories().should('exist')
            .should("be.visible")
        searchPageObj.elements.filterSchool().should('exist')
            .should("be.visible")
        searchPageObj.elements.filterProgramTypes().should('exist')
            .should("be.visible")
    })
})
