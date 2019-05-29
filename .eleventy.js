const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
// const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

var env = process.env.ELEVENTY_ENV;


module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    // eleventyConfig.addPlugin(pluginSyntaxHighlight);
    eleventyConfig.setDataDeepMerge(true);


    // Aliases are in relation to the _includes folder
    eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
    eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
    eleventyConfig.addLayoutAlias('layout', 'layouts/layout.html');
    eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
    eleventyConfig.addLayoutAlias('post', 'layouts/post.html');

    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
    });

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });

    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", (array, n) => {
        if( n < 0 ) {
            return array.slice(n);
        }

        return array.slice(0, n);
    });

    eleventyConfig.addCollection("tagList", require("./_11ty/getTagList"));

    // eleventyConfig.setLiquidOptions({
    //     dynamicPartials: false,
    //     root: [
    //         'src/_includes',
    //         './'
    //     ]
    // });

    eleventyConfig.addPassthroughCopy('src/assets');

    return {
        templateFormats: [
            "md",
            "html",
            "liquid",
            "njk"
        ],
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "liquid",
        // dataTemplateEngine: "njk",
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "dist"
        },

    };
};

