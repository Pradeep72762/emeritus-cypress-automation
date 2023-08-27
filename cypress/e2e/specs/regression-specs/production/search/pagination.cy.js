import SearchPage from "../../../../../page-objects/pages/search"
import HelperMethods from "../../../../../common-methods/helper-methods";

const helperMethodObj = new HelperMethods()
const searchPageObj = new SearchPage()

beforeEach('Launch Search Page : ', function () {
    // Steps which need to be executed before each test case - navigate to page 
    helperMethodObj.visitPage(Cypress.env('prod_env').search_page)
});

//Test suite to validate pagination on result page if matched program cards are more than 12
describe('Verify search page Pagination : ', () => {

    it('Pagination is implemented on result page if matched program cards are more than 12 : ', () => {
        //helperMethodObj.visitPage(Cypress.env('search_page'))
        searchPageObj.searchText(" ");
        searchPageObj.elements.paginationLayer().should('have.length', 4)
            .should("be.visible")
    })
})
