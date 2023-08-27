class SearchPage {

    // search locators
    elements = {
        searchBox: () => cy.get("#program-search"),
        programCards: () => cy.xpath("//div[contains(@class, 'g-4')]/div"),
        resultForSearch: () => cy.xpath("//h3[contains(text(), 'Result for')]"),
        filterCategories: () => cy.get("#categories"),
        filterSchool: () => cy.get("#schools"),
        filterProgramTypes: () => cy.get("#program_types"),
        searchProgarms: () => cy.xpath("//div[@class='container']//a"),
        searchProgarmsTitle: () => cy.xpath("//div[@class='container']//a//div[contains(@class, 'cardTitle')]"),
        paginationLayer: () => cy.get(".pagination_pagination__paginationWrapper li"),
        topics: () => cy.xpath("//button[text()='Topics']"),
        universities: () => cy.xpath("//button[text()='Universities']"),
        programTypes: () => cy.xpath("//button[text()='Program Types']"),
        
    }

    // action methods  

    // click the search icon and enter the given text
    searchText(text) {
        this.elements.searchBox().clear().type(`${text}{enter}`)
    }
}

export default SearchPage