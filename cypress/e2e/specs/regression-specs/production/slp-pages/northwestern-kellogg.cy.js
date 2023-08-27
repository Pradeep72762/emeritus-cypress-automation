import HelperMethods from "../../../../../common-methods/helper-methods"
import NorthwesternKelloggSLPPage from "../../../../../page-objects/pages/northwestern-kellogg"

const helperMethodObj = new HelperMethods()
const northwesternKelloggSLPPage = new NorthwesternKelloggSLPPage()

//Test suite to validate Northwestern Kellogg SLP Page
describe("Test suite to validate Northwestern Kellogg SLP Page on prod env: ", () => {
    beforeEach(function () {
        // Steps which need to be executed before each test case
        //const now = new Date(2023, 0, 1);
        //cy.clock(now); // freezes the system time to Jan 1, 2018
        cy.viewport(390, 844)
        helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.northwestern_kellogg)
    });

    it("Test the page's visual user interface and ribbon section(referral link) : ", () => {
        let url
        //helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.northwestern_kellogg)
        cy.wait(2000)
            .viewport(1280, 720)
            .percySnapshot('slp-northwestern-kellogg-prod' + "(" + Cypress.browser.name + ")");

        // add functional tests   
        /* --Commenting as the functionality on the page is taken out/updated to enrollnow
        northwesternKelloggSLPPage.elements.inviteNow().then((e) => {
            url = e.prop('href')
            cy.log(url)
        })
        northwesternKelloggSLPPage.clickInviteNow()
        cy.url().should('eq', "https://online.em.kellogg.northwestern.edu/en/refer/01t2s000000ZppzAAC?source=ribbon") //Verify the referral link's url
        northwesternKelloggSLPPage.elements.referralPageHeading().should('contain.text', "Refer Your Colleagues To Omnichannel Marketing: Driving Customer Value & Business Growth")
        */
    })

    it("Test to validate lead form and download brochure : ", () => {
        //helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.northwestern_kellogg)
        cy.wait(2000)
        northwesternKelloggSLPPage.elements.firstName().type("Jonny")
        northwesternKelloggSLPPage.elements.lastName().type("Sharma")
        northwesternKelloggSLPPage.elements.email().type("jonny@gmail.com")
        northwesternKelloggSLPPage.elements.phone().type("1231231231")
        northwesternKelloggSLPPage.elements.workExp().click()
        cy.contains('5-10 Years').click();
        northwesternKelloggSLPPage.elements.downloadBrochureSubmit().click({ force: true })
        cy.wait(5000)
        cy.percySnapshot('slp-northwestern-kellogg-prod-download-brochureEE-page' + "(" + Cypress.browser.name + ")")
            .wait(2000)
            .go("back")
    })

    it("Test to validate program's payment plan info : ", () => {
        //helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.northwestern_kellogg)
        cy.wait(2000)

        // visual tests to verify view payment plan modal pop-up
        northwesternKelloggSLPPage.elements.viewPaymentPlan().click()
        cy.wait(2000)
            .percySnapshot('slp-northwestern-kellogg-prod-payment-plan-popup' + "(" + Cypress.browser.name + ")");
        northwesternKelloggSLPPage.elements.viewPaymentPlanClose().click()
    })

    it("Test to validate learn with peers info/pop-up : ", () => {
        //helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.northwestern_kellogg)
        cy.wait(2000)
        northwesternKelloggSLPPage.elements.learnMoreWithPeers().click()
        cy.wait(3000)
        northwesternKelloggSLPPage.elements.learnMoreWithPeersPopup().should('exist')
            .should("be.visible")
    })

    it("Test to validate faculty info : ", () => {
        //helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.northwestern_kellogg)
        cy.wait(2000)
        northwesternKelloggSLPPage.elements.facultyInfoJimLecinski().click({ force: true })
        cy.wait(1000)
        northwesternKelloggSLPPage.elements.professorBio().should('contain.text', "Jim Lecinski is a marketing educator and adviser. His focus is marketing strategy and digital transformation")
        northwesternKelloggSLPPage.elements.professorBioClose().click()
        cy.wait(1000)
        northwesternKelloggSLPPage.elements.facultyInfoJulieHennessy().click({ force: true })
        cy.wait(1000)
        northwesternKelloggSLPPage.elements.professorBio().should('contain.text', "Julie Hennessy teaches MBA and executive-level classes focused on developing marketing strategies")
        northwesternKelloggSLPPage.elements.professorBioClose().click()
        cy.wait(1000)
    })

    it("Test to validate footer section info - Apply Now, Accessibility and  online education provider Emeritus links: ", () => {
        //helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.northwestern_kellogg)
        cy.wait(2000)
        northwesternKelloggSLPPage.elements.applyNow().invoke('removeAttr', 'target').click()
        cy.wait(2000)
            .percySnapshot('slp-northwestern-kellogg-prod-applyNow-page' + "(" + Cypress.browser.name + ")")
            .wait(2000)
            .go("back")
            .wait(2000)
        //    northwesternKelloggSLPPage.elements.onlineEducationProviderEmeritus().click()
        // cy.wait(3000)
        //     .percySnapshot('slp-northwestern-kellogg-prod-onlineEducationProviderEmeritus-page' + "(" + Cypress.browser.name + ")")
        //     .wait(2000)
        //     .go("back")
        //     .wait(2000)
        northwesternKelloggSLPPage.elements.accessibility().click()
        cy.wait(3000)
            .percySnapshot('slp-northwestern-kellogg-prod-accessibility-page' + "(" + Cypress.browser.name + ")")
            .wait(2000)
            .go("back")
            .wait(2000)
    })

})
