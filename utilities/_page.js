var HollandAmericaPOPath = __dirname + "/../pages/";

global.requireHomePagePO= function (relativePath) {
    return require(HomePagePOPath + relativePath);
};

var homePage = requireUpworkUdcPO('homepage.js');  this.homepage = new homePage();