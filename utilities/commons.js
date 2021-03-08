
var commons = function (brw) {
    'use strict';
    var that = this;
    if (brw) {
        that.browser = brw;
    }

    this.findElement = function (elementPath, doNotScrollIntoView, browsers/*, waitForAngular*/) {
        if (browsers === undefined) {
            var waitForAngular = configParams.waitForAngular.angularFlag;
            if (true === waitForAngular) {

                try {
                    var promise = element(elementPath).getWebElement().then(function (elementFound) {
                        //browser.driver.actions().mouseMove(elementFound).perform();
                        if (!doNotScrollIntoView) {
                            browser.executeScript('arguments[0].scrollIntoView()', elementFound);
                        }
                        return elementFound;
                    });
                    return promise;
                } catch (err) {
                    console.log('Timeout caused by AngularJS. ' + err);
                }
            } else {
                return browser.driver.wait(function () {
                    browser.driver.sleep(configParams.waitForAngular.angularDelay);
                    return browser.driver.findElements(elementPath).then(function () {
                        var elementFound = browser.driver.findElement(elementPath);
                        return elementFound;
                    });
                }, configParams.globalTimeout);
            }
        } else {
            var waitForAngular = configParams.waitForAngular.angularFlag;
            if (true === waitForAngular) {

                try {
                    var promise = element(elementPath).getWebElement().then(function (elementFound) {
                        //browser.driver.actions().mouseMove(elementFound).perform();
                        if (!doNotScrollIntoView) {
                            browsers.executeScript('arguments[0].scrollIntoView()', elementFound);
                        }
                        return elementFound;
                    });
                    return promise;
                } catch (err) {
                    console.log('Timeout caused by AngularJS. ' + err);
                }
            } else {
                return browsers.driver.wait(function () {
                    browsers.driver.sleep(configParams.waitForAngular.angularDelay);
                    return browsers.driver.findElements(elementPath).then(function () {
                        var elementFound = browsers.driver.findElement(elementPath);
                        return elementFound;
                    });
                }, configParams.globalTimeout);
            }
        }
    };

}