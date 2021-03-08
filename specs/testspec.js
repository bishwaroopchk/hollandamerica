logger = require('../logger/log');

var homepage = require('../pages/homepage.js'), _udcpage = new UDCPage();
_home = new homepage();

describe('Holland America Home Page navigation', function() {

    it('navigate to url', function() {
        browser.ignoreSynchronization = true;
        browser.get('www.hollandamerica.com');
        logger.log('info', "Open home page");
        _home.isLogoPresent();
    });

    it('Verify Plan link', function() {
        _home.linkPlan.click();
        logger.log('info', "Click on plan link");
        _home.linkFindACruise.click();
        logger.log('info', "Click on Find a Cruise link");
        expect(_home.drpdwnDestination.isDisplayed()).toBeTruthy();
        logger.log('info', "Verify Destination Dropdown presence");
    });

});