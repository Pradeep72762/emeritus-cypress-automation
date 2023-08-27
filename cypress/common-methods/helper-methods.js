class HelperMethods {
    static gdprFlag = false

    visitPage(page) {
        cy.visit(page)
    }
}

export default HelperMethods