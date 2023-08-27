class RotmanSchoolLPPage {

    // search locators
    elements = {
        inviteNow: () => cy.xpath("//a[normalize-space()='INVITE NOW']"),
        referralPageHeading: () => cy.xpath("//h2[normalize-space()='Refer Your Colleagues To Rotman MBA Essentials']"),
        firstName: () => cy.get("input[placeholder='First Name']"),
        lastName: () => cy.get("input[placeholder='Last Name']"),
        email: () => cy.get("input[placeholder='Email']"),
        phone: () => cy.get("input[placeholder='Phone']"),
        workExp: () => cy.get("#react-select-4-placeholder"),
        downloadBrochureSubmit: () => cy.get("button[type='submit']"),
        facultyInfoWalidHejazi: () => cy.xpath("//div[text()='Walid Hejazi']//parent::*//button"),
        professorBio: () => cy.get(".professor-desc-bio"),
        professorBioClose: () => cy.get("button[aria-label='Close']"),
        facultyInfoScottLiao: () => cy.xpath("//div[text()='Scott Liao']//parent::*//button"),
        applyNow: () => cy.xpath("//a[normalize-space()='APPLY NOW']"),
        onlineEducationProviderEmeritus: () => cy.xpath("//a[normalize-space()='online education provider Emeritus']"),
        accessibility: () => cy.xpath("//a[normalize-space()='Accessibility']"),

        modalTitle: () => cy.get("div[class='modal__header'] h3[class='modal__title']"),
        viewPaymentPlan: () => cy.xpath("//p[text()='PROGRAM FEE']//following-sibling::button"),
        viewPaymentPlanClose: () => cy.get(".modal__close-icon.blueprint-icon.icon-bp_1_close"),
        learnMoreWithPeers: () => cy.xpath("//p[text()='Learn with your peers']//following-sibling::*"),
        learnMoreWithPeersPopup: () => cy.xpath("//h3[normalize-space()='Learning is better with your colleagues']"),        
        learnMore: () => cy.xpath("//button[@type='button'][normalize-space()='Learn More']"),

    }

    // action methods  

    // click the invite now link
    clickInviteNow() {
        this.elements.inviteNow().invoke('removeAttr', 'target')
            .click()
    }

}

export default RotmanSchoolLPPage
