const { DateTime } = require('luxon')

module.exports = function (eleventyConfig) {
	// eleventyConfig.setTemplateFormats(['md', 'css', 'jpg', 'png', 'pdf'])

	eleventyConfig.setDataDeepMerge(true)
	eleventyConfig.addFilter('postDate', (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
	})
	eleventyConfig.addPassthroughCopy('assets')
	return {
		templateFormats: ['md', 'njk', 'html', 'liquid'],

		// If your site lives in a different subdirectory, change this.
		// Leading or trailing slashes are all normalized away, so don’t worry about it.
		// If you don’t have a subdirectory, use "" or "/" (they do the same thing)
		// This is only used for URLs (it does not affect your file structure)
		pathPrefix: '/',

		markdownTemplateEngine: 'liquid',
		htmlTemplateEngine: 'liquid',
		dataTemplateEngine: 'liquid',
		dir: {
			input: '.',
			includes: '_includes',
			data: '_data',
			output: '_site',
		},
	}
}
