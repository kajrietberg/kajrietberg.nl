var env = process.env.ELEVENTY_ENV;



module.exports = function(eleventyConfig) {
    // Aliases are in relation to the _includes folder
    eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
    eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
    eleventyConfig.addLayoutAlias('layout', 'layouts/layout.html');
    eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
    eleventyConfig.addLayoutAlias('post', 'layouts/post.html');

    eleventyConfig.setLiquidOptions({
        dynamicPartials: false,
        root: [
            '_includes',
            './'
        ]
    });

    eleventyConfig.addPassthroughCopy('assets');

    return {
        dir: {
            input: "./",
            output: "dist"
        },
        passthroughFileCopy: true
    };
};

