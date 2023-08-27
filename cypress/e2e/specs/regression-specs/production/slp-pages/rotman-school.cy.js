import HelperMethods from "../../../../../common-methods/helper-methods"
import RotmanSchoolLPPage from "../../../../../page-objects/pages/rotman-school"

const helperMethodObj = new HelperMethods()
const rotmanSchoolLPPage = new RotmanSchoolLPPage()

//Test suite to validate Rotman SchoolSLP Page
describe.skip("Test suite to validate Rotman SchoolSLP Page on prod env: ", () => {
    beforeEach(function() {
        // Steps which need to be executed before each test case
        //const now = new Date(2023, 0, 1);
        //cy.clock(now); // freezes the system time to Jan 1, 2018
      });

    it("Test the page's visual user interface and ribbon section(referral link) : ", () => {
        let url
        helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.rotman)
        cy.wait(2000)
            .viewport(1280, 720)
            .percySnapshot('slp-rotman-prod' + "(" + Cypress.browser.name + ")");

        // add functional tests        
        rotmanSchoolLPPage.elements.inviteNow().then((e) => {
            url = e.prop('href')
            cy.log(url)
        })
        rotmanSchoolLPPage.clickInviteNow()
        cy.url().should('eq', "https://execonline.rotman.utoronto.ca/en/refer/01t2s000000ZgnqAAC?source=ribbon") //Verify the referral link's url
        rotmanSchoolLPPage.elements.referralPageHeading().should('contain.text', "Refer Your Colleagues To Rotman MBA Essentials")

    })

    it.only("Test to validate lead form and download brochure : ", () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.rotman)
        cy.wait(2000)
        rotmanSchoolLPPage.elements.firstName().type("Jonny")
        rotmanSchoolLPPage.elements.lastName().type("Sharma")
        rotmanSchoolLPPage.elements.email().type("jonny@gmail.com")
        rotmanSchoolLPPage.elements.phone().type("1231231231")
        rotmanSchoolLPPage.elements.workExp().click()
        cy.contains('5-10 Years').click();
        rotmanSchoolLPPage.elements.downloadBrochureSubmit().click().wait(5000)
        cy.percySnapshot('slp-rotman-prod-download-brochureEE-page' + "(" + Cypress.browser.name + ")")
            .wait(2000)
        cy.get('body').type('{backspace}');
       
    })

    it("Test to validate program's payment plan info : ", () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.rotman)
        cy.wait(2000)

        // visual tests to verify view payment plan modal pop-up
        rotmanSchoolLPPage.elements.viewPaymentPlan().click()
        cy.wait(2000)
            .percySnapshot('slp-rotman-prod-payment-plan-popup' + "(" + Cypress.browser.name + ")");
            rotmanSchoolLPPage.elements.viewPaymentPlanClose().click()
    })

    it("Test to validate learn with peers info/pop-up : ", () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.rotman)
        cy.wait(2000)
        rotmanSchoolLPPage.elements.learnMoreWithPeers().click()
        cy.wait(2000)
        rotmanSchoolLPPage.elements.learnMoreWithPeersPopup().should('exist')
            .should("be.visible")
    })

    it("Test to validate faculty info : ", () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.rotman)
        cy.wait(2000)
        rotmanSchoolLPPage.elements.facultyInfoWalidHejazi().click({force: true})
        cy.wait(1000)
        rotmanSchoolLPPage.elements.professorBio().should('contain.text', "Walid Hejazi teaches macro and global economics in the MBA and Executive MBA programs")
        rotmanSchoolLPPage.elements.professorBioClose().click()
        cy.wait(1000)
        rotmanSchoolLPPage.elements.facultyInfoScottLiao({force: true}).click()
        cy.wait(1000)
        rotmanSchoolLPPage.elements.professorBio().should('contain.text', "Scott Liao has been researching and teaching financial accounting with a focus on banking and data analytics for more than 12 years")
        rotmanSchoolLPPage.elements.professorBioClose().click()
        cy.wait(1000)
    })

    it("Test to validate footer section info - Apply Now, Accessibility and  online education provider Emeritus links: ", () => {
        helperMethodObj.visitPage(Cypress.env('prod_env').slp_pages.rotman)
        cy.wait(3000)
        rotmanSchoolLPPage.elements.applyNow().invoke('removeAttr', 'target').click()
        cy.wait(2000)
            .percySnapshot('slp-rotman-prod-applyNow-page' + "(" + Cypress.browser.name + ")")
            .wait(2000)
            .go("back")
            .wait(2000)
            rotmanSchoolLPPage.elements.onlineEducationProviderEmeritus().click()
        cy.wait(3000)
            .percySnapshot('slp-rotman-prod-onlineEducationProviderEmeritus-page' + "(" + Cypress.browser.name + ")")
            .wait(2000)
            .go("back")
            .wait(2000)
            rotmanSchoolLPPage.elements.accessibility().click()
        cy.wait(3000)
            .percySnapshot('slp-rotman-prod-accessibility-page' + "(" + Cypress.browser.name + ")")
            .wait(2000)
            .go("back")
            .wait(2000)
    })

})
