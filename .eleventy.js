module.exports = function (eleventyConfig) {
  // Copy Webflow asset folders straight through
  eleventyConfig.addPassthroughCopy({ "/css": "css" });
  eleventyConfig.addPassthroughCopy({ "/js": "js" });
  eleventyConfig.addPassthroughCopy({ "/images": "images" });

  // (Add more passthroughs if you have fonts/, assets/, etc.)
  // eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });

  return {
    dir: { input: "src", output: "_site" },
  };
};
