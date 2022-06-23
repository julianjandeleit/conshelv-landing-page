const yaml = require("js-yaml");


module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    eleventyConfig.addFilter("stripRootDir", function(str) {
        var parts = str.split('/')
        if (str[0] == '/')
        {
            parts.shift() // first element is empty in this case so needs to be stripped as well
        }
        parts.shift() //removes first element
        return "/"+parts.join("/");
      });

    return {dir: {input: "src",output: "public"},};
};