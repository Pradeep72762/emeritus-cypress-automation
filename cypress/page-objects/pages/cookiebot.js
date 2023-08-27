class CookiebotPopup {
    // cookie popup locators
    elements = {
        cookiePopup: () => cy.get("div#cookiebanner"),
        cookiebotPopupTitle: () => cy.get("div#cookiebanner"),
        cookiebotPopupDeny: () => cy.get("#CybotCookiebotDialogBodyButtonDecline"),
        cookiebotPopupAllowAll: () => cy.get("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"),
        cookiebotPopupCustomize: () => cy.xpath("//a[normalize-space(text())='Customize']"),
        cookiebotPopupNecassaryCookies: () => cy.xpath("//h2[normalize-space(text()) ='Necessary']"),
        cookiebotPopupPreferencesCookies: () => cy.xpath("//h2[normalize-space(text()) ='Preferences']"),
        cookiebotPopupStatisticsCookies: () => cy.xpath("//h2[normalize-space(text()) ='Statistics']"),
        cookiebotPopupMarketingCookies: () => cy.xpath("//h2[normalize-space(text()) ='Marketing']"),
        cookiebotPopupNecassaryCookiesState: () => cy.get("#CybotCookiebotDialogBodyLevelButtonNecessary"),
        cookiebotPopupPreferencesCookiesState: () => cy.get("#CybotCookiebotDialogBodyLevelButtonPreferences"),
        cookiebotPopupStatisticsCookiesState: () => cy.get("#CybotCookiebotDialogBodyLevelButtonStatistics"),
        cookiebotPopupMarketingCookiesState: () => cy.get("#CybotCookiebotDialogBodyLevelButtonMarketing")
    }
}

export default CookiebotPopup