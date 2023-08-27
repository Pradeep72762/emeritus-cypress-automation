import HelperMethods from "../../../../../common-methods/helper-methods"
import WhartonSLPPage from "../../../../../page-objects/pages/wharton-slp"

const helperMethodObj = new HelperMethods()
const whartonSLPPage = new WhartonSLPPage()

//Test suite to validate Wharton school's SLP page
describe.skip("Test suite to validate Wharton school's SLP page on prod env: ", () => {
    beforeEach(function() {
        // Steps which need to be executed before each test case
        cy.viewport(390, 844)
        const now = new Date(2023, 0, 1);
        cy.clock(now); // freezes the system time to Jan 1, 2018
      });

    it("Test the page's visual user interface and ribbon section(referral link) : ", () => {
        let url
        helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.wharton)
        cy.wait(2000)
        cy.percySnapshot('slp-wharton-prod' + "(" + Cypress.browser.name + ")");

        // add functional tests        
        whartonSLPPage.elements.inviteNow().then((e) => {
            url = e.prop('href')
            cy.log(url)
        })
        whartonSLPPage.clickInviteNow()
        cy.url().should('eq', "https://online-execed.wharton.upenn.edu/en/refer/01t2s000000ZqBPAA0?source=ribbon") //Verify the referral link's url
        whartonSLPPage.elements.referralPageHeading().should('contain.text', "Refer Your Colleagues To Executive Presence and Influence: Persuasive Leadership Development")

    })

    it("Test to validate lead form and download brochure : ", () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.wharton)
        cy.wait(2000)
        whartonSLPPage.elements.firstName().type("Jonny")
        whartonSLPPage.elements.lastName().type("Sharma")
        whartonSLPPage.elements.email().type("jonny@gmail.com")
        whartonSLPPage.elements.phone().type("1231231231")
        whartonSLPPage.elements.workExp().click()
        cy.contains('5-10 Years').click();
        whartonSLPPage.elements.downloadBrochureSubmit().click({force: true}).wait(5000)
        cy.percySnapshot('slp-wharton-prod-download-brochureEE-page' + "(" + Cypress.browser.name + ")")
            .wait(3000)
            .go("back")

        //whartonSLPPage.elements.downloadBrochure().click()
    })

    it("Test to validate program's payment plan info : ", () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.wharton)
        cy.wait(2000)

        // visual tests to verify view payment plan modal pop-up
        whartonSLPPage.elements.viewPaymentPlan().click()
        cy.wait(2000)
            .percySnapshot('slp-wharton-prod-payment-plan-popup' + "(" + Cypress.browser.name + ")");
        whartonSLPPage.elements.viewPaymentPlanClose().click()
    })

    it("Test to validate learn with peers info/pop-up : ", () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.wharton)
        cy.wait(2000)
        whartonSLPPage.elements.learnMoreWithPeers().click()
        cy.wait(2000)
        whartonSLPPage.elements.learnMoreWithPeersPopup().should('exist')
            .should("be.visible")
    })

    it("Test to validate faculty info : ", () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.wharton)
        cy.wait(2000)
        whartonSLPPage.elements.facultyInfoMichaelUseem().click({force: true})
        cy.wait(1000)
        whartonSLPPage.elements.professorBio().should('contain.text', "Michael Useem is professor of Management and faculty director of the Center for Leadership and Change Management and McNulty Leadership Program at the Wharton School, University of Pennsylvania")
        whartonSLPPage.elements.professorBioClose().click()
        cy.wait(1000)
        whartonSLPPage.elements.facultyInfoCadeMassey().click({force: true})
        cy.wait(1000)
        whartonSLPPage.elements.professorBio().should('contain.text', "Cade Massey is a practice professor in the Wharton School’s Operations, Information, and Decisions Department.")
        whartonSLPPage.elements.professorBioClose().click()
        cy.wait(1000)
    })

    it("Test to validate footer section info - Apply Now, Accessibility and  online education provider Emeritus links: ", () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.wharton)
        cy.wait(3000)
        whartonSLPPage.elements.applyNow().click()
        cy.wait(2000)
            .percySnapshot('slp-wharton-prod-applyNow-page' + "(" + Cypress.browser.name + ")")
            .wait(2000)
            .go("back")
            .wait(2000)
        whartonSLPPage.elements.onlineEducationProviderEmeritus().click()
        cy.wait(3000)
            .percySnapshot('slp-wharton-prod-onlineEducationProviderEmeritus-page' + "(" + Cypress.browser.name + ")")
            .wait(2000)
            .go("back")
            .wait(2000)
        whartonSLPPage.elements.accessibility().click()
        cy.wait(3000)
            .percySnapshot('slp-wharton-prod-accessibility-page' + "(" + Cypress.browser.name + ")")
            .wait(2000)
            .go("back")
            .wait(2000)
    })
})

