/* Config file */
module.exports = function(eleventyConfig) {

    // Ce dossier est cloné lors du build
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/uploads");

    return {
      dir: {
          input: "src",
          output: "dist"
      }
    }
};