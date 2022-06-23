const yaml = require("js-yaml");


module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    eleventyConfig.addFilter("stripRootDir", function(str) {
        var parts = str.split('/')
        parts.shift() //removes first element
        return "/"+parts.join("/");
      });

    return {dir: {input: "src",output: "public"},};
};