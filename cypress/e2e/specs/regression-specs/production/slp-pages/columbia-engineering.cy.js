import HelperMethods from "../../../../../common-methods/helper-methods"
import ColumbiaEngSLPPage from "../../../../../page-objects/pages/columbia-engineering"

const helperMethodObj = new HelperMethods()
const columbiaEngSLPPage = new ColumbiaEngSLPPage()

//Test suite to validate Columbia Engineering SLP Page
describe("Test suite to validate Columbia Engineering SLP Page on prod env: ", () => {
    beforeEach(function () {
        // Steps which need to be executed before each test case
        //const now = new Date(2023, 0, 1);
        //cy.clock(now); // freezes the system time to Jan 1, 2018

        cy.viewport(390, 844)
        helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.columbia_eng)

    });

    it("Test the page's visual user interface and ribbon section(referral link) : ", () => {
        let url
        //helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.columbia_eng)
        cy.wait(2000)
            .percySnapshot('slp-columbia-eng-prod' + "(" + Cypress.browser.name + ")");

        // add functional tests     

        /* --Commenting as the functionality on the page is taken out/updated to enrollnow

        columbiaEngSLPPage.elements.inviteNow().then((e) => {
            url = e.prop('href')
            cy.log(url)
        })
        columbiaEngSLPPage.clickInviteNow()
        cy.url().should('eq', "https://online-exec.cvn.columbia.edu/en/refer/01t0I000006bUjGQAU?source=ribbon") //Verify the referral link's url
        columbiaEngSLPPage.elements.referralPageHeading().should('contain.text', "Refer Your Colleagues To Construction Finance Management")
        */

    })

    it("Test to validate lead form and download brochure : ", () => {
        //helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.columbia_eng)
        cy.wait(3000)
        columbiaEngSLPPage.elements.firstName().type("Jonny")
        columbiaEngSLPPage.elements.lastName().type("Sharma")
        columbiaEngSLPPage.elements.email().type("jonny@gmail.com")
        columbiaEngSLPPage.elements.phone().type("1231231231")
        columbiaEngSLPPage.elements.workExp().click()
        cy.contains('5-10 Years').click().wait(2000);
        columbiaEngSLPPage.elements.downloadBrochureSubmit().click({ force: true }).wait(5000)
        cy.percySnapshot('slp-columbia-eng-prod-download-brochureEE-page' + "(" + Cypress.browser.name + ")")
            .wait(2000)
            .go("back")
    })

    it("Test to validate program's payment plan info : ", () => {
        //helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.columbia_eng)
        cy.wait(3000)

        // visual tests to verify view payment plan modal pop-up
        columbiaEngSLPPage.elements.viewPaymentPlan().click()
        cy.wait(2000)
            .percySnapshot('slp-columbia-eng-prod-payment-plan-popup' + "(" + Cypress.browser.name + ")");
        columbiaEngSLPPage.elements.viewPaymentPlanClose().click()
    })

    it("Test to validate learn with peers info/pop-up : ", () => {
        //helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.columbia_eng)
        cy.wait(3000)
        columbiaEngSLPPage.elements.learnMoreWithPeers().click()
        cy.wait(2000)
        columbiaEngSLPPage.elements.learnMoreWithPeersPopup().should('exist')
            .should("be.visible")
    })

    it("Test to validate faculty info : ", () => {
        //helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.columbia_eng)
        cy.wait(3000)
        columbiaEngSLPPage.elements.facultyInfoIbrahimOdeh().click({ force: true })
        cy.wait(1000)
        columbiaEngSLPPage.elements.professorBio().should('contain.text', "Dr. Ibrahim Odeh is the founding director of the Global Leaders in Construction Management (GLCM) research initiative at Columbia University")
        columbiaEngSLPPage.elements.professorBioClose().click()
        cy.wait(1000)
    })

    it("Test to validate footer section info - Apply Now, Accessibility and  online education provider Emeritus links: ", () => {
        //helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.columbia_eng)
        cy.wait(3000)
        columbiaEngSLPPage.elements.applyNow().invoke('removeAttr', 'target').click()
        cy.wait(2000)
            .percySnapshot('slp-columbia-eng-prod-applyNow-page' + "(" + Cypress.browser.name + ")")
            .wait(2000)
            .go("back")
            .wait(2000)
        columbiaEngSLPPage.elements.onlineEducationProviderEmeritus().click()
        cy.wait(3000)
            .percySnapshot('slp-columbia-eng-prod-onlineEducationProviderEmeritus-page' + "(" + Cypress.browser.name + ")")
            .wait(2000)
            .go("back")
            .wait(2000)
        columbiaEngSLPPage.elements.accessibility().click()
        cy.wait(3000)
            .percySnapshot('slp-columbia-eng-prod-accessibility-page' + "(" + Cypress.browser.name + ")")
            .wait(2000)
            .go("back")
            .wait(2000)
    })


})

