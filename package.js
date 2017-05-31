Package.describe({
  summary: "Javascript dialect with fewer braces and semicolons",
  version: "1.12.3_1"
});

Package.registerBuildPlugin({
  name: "compileCoffeescript",
  use: ['caching-compiler', 'ecmascript'],
  sources: ['plugin/coffee-cjsx.js'],
  npmDependencies: {
    "coffee-script": "1.12.3",
    "source-map": "0.5.6",
    "coffee-react-transform" : "5.0.0"
  }
});

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0');
  api.use('babel-compiler');

  // Because the CoffeeScript plugin now calls
  // BabelCompiler.prototype.processOneFileForTarget for any ES2015+
  // JavaScript or JavaScript enclosed by backticks, it must provide the
  // same runtime environment that the 'ecmascript' package provides.
  // The following api.imply calls should match those in ../ecmascript/package.js,
  // except that coffeescript does not api.imply('modules').
  api.imply('ecmascript-runtime');
  api.imply('babel-runtime');
  api.imply('promise');
});