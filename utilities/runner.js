var Runner = function(config) {
    log.set(config);
    this.preparer_ = null;
    this.driverprovider_ = null;
    this.config_ = config;
};

Runner.prototype.setupGlobals_ = function(browser_) {
    global.protractor = protractor;
    global.browser = browser_;
    global.$ = browser_.$;
    global.$$ = browser_.$$;
    global.element = browser_.element;
    global.by = global.By = protractor.By;
}
