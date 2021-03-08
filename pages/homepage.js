var that=this;
var commonsMethod = new commons();

this.elementLogoHome = by.xpath('//img[@alt=\'HollandAmericaLinehomepage\']');
this.drpdwnDestination = by.xpath("(//span[@class='dropdown-title' and contains(text(), 'Destination')])[1]");
this.valueDestination = by.xpath("//button[@aria-label='ALASKA & YUKON']");
this.linkPlan = by.xpath("//a[@aria-label='Plan']");
this.linkFindACruise = by.xpath("//a[text()='Find a Cruise']");



this.isLogoPresent = function () {
    commonsMethod.findElement(that.elementLogoHome).then(function (foundElement){
        expect(foundElement.isDisplayed()).toBeTruthy();
    });
};


