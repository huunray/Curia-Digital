// .eleventy.js
require("dotenv").config();

module.exports = function (eleventyConfig) {
  // Copy Webflow asset folders straight through
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  // (Add more passthroughs if you have fonts/, assets/, etc.)
  // eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });

  return {
    dir: { input: "src", output: "_site" },
  };
};
