class CookiebotAssertions {

    // validations methods
    verifyCookiebotPopupOnEachPage(url, elements, cookieState = "be.checked") {
        cy.request({
            url: url,
            followRedirect: true,
            failOnStatusCode: false,
            timeout: 30000 
        }).then((resp) => {
            if (resp.status == 200 || (resp.status == 301 && resp.redirectedToUrl.includes("emeritus.org"))) {
                //cy.viewport('samsung-note9')
                cy.visit(resp.status == 200 ? url : resp.redirectedToUrl)

                // verify CookieConsent title and buttons (Deny, Allow All, Customize)
                elements.cookiebotPopupTitle().should('exist')
                    .should("be.visible")
                elements.cookiebotPopupDeny().should('have.text', "Deny All")
                elements.cookiebotPopupAllowAll().should('have.text', " Allow All")
                elements.cookiebotPopupCustomize().should('have.text', "Customize ")

                // opens Customize section of cookie popup
                elements.cookiebotPopupCustomize().click()

                // verify Necessary Cookies and deault status
                elements.cookiebotPopupNecassaryCookies().should('have.text', " Necessary ")
                elements.cookiebotPopupPreferencesCookies().should('have.text', " Preferences ")
                elements.cookiebotPopupStatisticsCookies().should('have.text', " Statistics ")
                elements.cookiebotPopupMarketingCookies().should('have.text', " Marketing ")

                // verify Cookies default state as per GDPR-NonGDPR countries
                elements.cookiebotPopupNecassaryCookiesState().should('be.checked')
                elements.cookiebotPopupPreferencesCookiesState().should(cookieState)
                elements.cookiebotPopupStatisticsCookiesState().should(cookieState)
                elements.cookiebotPopupMarketingCookiesState().should(cookieState)

            } else {
                cy.log("Invalid page url due to ...(a) returns '404' (b) url is outside of 'emeritus.org' domain")
            }
        })
    }
}

export default CookiebotAssertions
