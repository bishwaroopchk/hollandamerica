var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,

    multiCapabilities: [
        {'browserName': 'chrome',
            chromeOptions: {
                args: [
                    'disable-extensions'
                ],
            }
        }
    ],

    specs: [
        '../specs/testspec.js'
    ],

    params: {
        waitForAngular: {
            angularFlag: true,
            angularDelay: 1000
        }
    },

    framework: 'jasmine2',

    onPrepare: function() {
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/screenshots'
        }).getJasmine2Reporter());
    },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 120000,
    }

};