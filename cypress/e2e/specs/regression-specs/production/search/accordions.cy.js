import SearchPage from "../../../../../page-objects/pages/search"
import HelperMethods from "../../../../../common-methods/helper-methods";

const helperMethodObj = new HelperMethods()
const searchPageObj = new SearchPage()

beforeEach('Launch Search Page : ', function () {
    // Steps which need to be executed before each test case - navigate to page 
    helperMethodObj.visitPage(Cypress.env('prod_env').search_page)
});

//Test suite to validate accordions on search page
describe("Check the search page's accordions for topics, universities, and programme types : ", () => {
    it('Topics section is by default extended : ', () => {
        searchPageObj.elements.topics()
            .invoke('attr', 'aria-expanded')
            .should('eq', 'true')
    })
    it('When you click on Topics, the Topics section is collapsed : ', () => {
        searchPageObj.elements.topics().
            click()
            .invoke('attr', 'aria-expanded')
            .should('eq', 'false')
    })

    it('Universities section is by default extended : ', () => {
        searchPageObj.elements.universities()
            .invoke('attr', 'aria-expanded')
            .should('eq', 'true')
    })
    it('When you click on Universities , the Universities section is collapsed : ', () => {
        //searchPageObj.searchText(" ");
        searchPageObj.elements.universities().
            click()
            .invoke('attr', 'aria-expanded')
            .should('eq', 'false')
    })

    it('Program Types section is by default extended : ', () => {
        searchPageObj.elements.programTypes()
            .invoke('attr', 'aria-expanded')
            .should('eq', 'true')
    })
    it('When you click on Program Types, the Program Types section is collapsed : ', () => {
        searchPageObj.elements.programTypes().
            click()
            .invoke('attr', 'aria-expanded')
            .should('eq', 'false')
    })
})
