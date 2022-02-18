/* Config file */
module.exports = function(eleventyConfig) {

    // Ce dossier est cloné lors du build
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/assets");

    return {
      dir: {
          input: "src",
          output: "dist"
      }
    }
};