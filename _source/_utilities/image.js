/* ----------------------------------------------------------------------------
creates a responsive <picture> with multiple formats and resolutions
---------------------------------------------------------------------------- */
import eleventyImage from '@11ty/eleventy-img';

export default async function image(
	src,
	alt,
	cssClass = null,
	sizes = '100vw',
	loadingAttr = 'lazy',
) {
	const cleanSrc = String(src)
		.replace(/^\/?assets\/images\//, '')
		.replace(/^\//, '');

	const metadata = await eleventyImage(`_source/assets/images/${cleanSrc}`, {
		widths: [300, 600, 900, 1200],
		formats: ['webp', 'jpeg'],
		urlPath: '/assets/images/',
		outputDir: './_public/assets/images/',
		sharpWebpOptions: { quality: 70 },
		sharpJpegOptions: { quality: 78 },
	});

	const attributes = {
		alt,
		sizes,
		loading: loadingAttr,
		decoding: 'async',
	};

	if (cssClass) {
		attributes.class = cssClass;
	}

	return eleventyImage.generateHTML(metadata, attributes);
}
