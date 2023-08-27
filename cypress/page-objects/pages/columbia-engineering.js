class ColumbiaEngSLPPage {

    // search locators
    elements = {
        inviteNow: () => cy.xpath("//a[text()='Invite Now']"),
        enrollNow: () => cy.xpath("//a[normalize-space()='ENROLL NOW']"),       
        referralPageHeading: () => cy.xpath("//h2[contains(text(),'Refer Your Colleagues To Construction Finance Mana')]"),
        firstName: () =>cy.get("input[placeholder='First Name']"),
        lastName: () =>cy.get("input[placeholder='Last Name']"),
        email: () =>cy.get("input[placeholder='Email']"),
        phone: () =>cy.get("input[placeholder='Phone']"),
        workExp: () =>cy.get("#react-select-4-placeholder"),
        downloadBrochureSubmit: () =>cy.get("button[type='submit']"),
        facultyInfoIbrahimOdeh: () => cy.xpath("//button[normalize-space()='More Info']"),
        professorBio: () => cy.xpath("//p[@class='professor-desc-bio']"),
        professorBioClose: () => cy.get("button[aria-label='Close']"),        
        applyNow: () => cy.xpath("//a[normalize-space()='APPLY NOW']"),
        onlineEducationProviderEmeritus: () => cy.xpath("//a[normalize-space()='online education provider Emeritus']"),
        accessibility: () => cy.xpath("//a[normalize-space()='Accessibility']"),

        modalTitle: () => cy.get("div[class='modal__header'] h3[class='modal__title']"),
        viewPaymentPlan: () => cy.xpath("//p[text()='PROGRAM FEE']//following-sibling::button"),
        viewPaymentPlanClose: () => cy.get(".modal__close-icon.blueprint-icon.icon-bp_1_close"),
        learnMoreWithPeers: () => cy.xpath("//p[normalize-space()='Learn with your peers']//following-sibling::*"),
        learnMoreWithPeersPopup: () => cy.xpath("//h4[normalize-space()='Learning is better with your colleagues']"),        
        learnMore: () => cy.xpath("//button[@type='button'][normalize-space()='Learn More']"),
        
    }

    // action methods  

    // click the invite now link
    clickInviteNow() {
        this.elements.inviteNow().invoke('removeAttr', 'target')
            .click()
    }

    // click the enroll now link
    clickInviteNow() {
        this.elements.enrollNow().invoke('removeAttr', 'target')
            .click()
    }

}

export default ColumbiaEngSLPPage
