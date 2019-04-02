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
            'src/_includes',
            './'
        ]
    });

    eleventyConfig.addPassthroughCopy('src/assets');

    return {
        dir: {
            input: "src",
            output: "dist"
        },
        passthroughFileCopy: true
    };
};

