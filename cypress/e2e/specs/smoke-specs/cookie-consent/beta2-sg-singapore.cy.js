import CookiebotPopup from "../../../../page-objects/pages/cookiebot"
import CookiebotAssertions from "../../../../common-methods/cookie-consent-assertions"
import HelperMethods from "../../../../common-methods/helper-methods"
import { beta2_urls } from "../../../../fixtures/cookiebot-data/beta2-sg-singapore.json"// importing URLs from beta2-sg.json file into 'beta2_urls' variable


// determines whether a country is GDPR or non-GDPR based on the specification mentioned in browserstack.json
before('Before hook', function () {
    cy.readFile("browserstack.json", (err, data) => {
        if (err) {
            return console.error(err);
        };
    }).then((data) => {
        const gdprCountries = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB"]
        var geolocation = gdprCountries.includes(data["run_settings"]["geolocation"])
        HelperMethods.gdprFlag = geolocation;

    })
});

// creates a single test suite and dynamically adds or generates test cases based on JSON data
describe('A cookie consent pop-up is displayed immediately when the user visits the web page ', () => {
    beta2_urls.forEach((item) => {
        it(`${item}`, () => {
            const cookiebotPageObj = new CookiebotPopup();
            const cookiebotAssertionObj = new CookiebotAssertions();
            cookiebotAssertionObj.verifyCookiebotPopupOnEachPage(
                item, cookiebotPageObj.elements, HelperMethods.gdprFlag ? "not.be.checked" : "be.checked");
        })
    })
})
