var logger        = require("../../utils/logger");
var getPackages   = require("../../utils/packageUtils").getPackages;
var ncu = require('npm-check-updates');

module.exports = function (config) {

  var packages = getPackages(config.packagesLoc);

  packages.map(function(pkg) {
    ncu.run({
      packageFile: pkg.loc
    }).then(function(upgraded) {
      console.log(pkg.name + ': dependencies to upgrade:', JSON.stringify(upgraded, null, 2));
    });
  });
};

