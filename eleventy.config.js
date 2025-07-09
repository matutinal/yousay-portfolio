import markdownIt from 'markdown-it';
import esbuild from './_source/_utilities/esbuild.js';
import lightingcss from './_source/_utilities/lightningcss.js';
import image from './_source/_utilities/image.js';
import style from './_source/_utilities/style.js';
import setVar from './_source/_utilities/setVar.js';
import fullDate from './_source/_utilities/fullDate.js';
import markdownify from './_source/_utilities/markdownify.js';
import { IdAttributePlugin } from '@11ty/eleventy';

export default async function (eleventyConfig) {
  /* --------------------------------------------------------------------------
  Plugins, bundles, shortcodes, filters
  -------------------------------------------------------------------------- */
  eleventyConfig.addPlugin(esbuild);
  eleventyConfig.addPlugin(lightingcss);
  eleventyConfig.addPlugin(IdAttributePlugin);
  eleventyConfig.addBundle('css', { transforms: [style] });
  eleventyConfig.addShortcode('image', image);
  eleventyConfig.addPairedShortcode('setVar', setVar);
  eleventyConfig.addFilter('fullDate', fullDate);
  eleventyConfig.addFilter('markdownify', markdownify);

  /* --------------------------------------------------------------------------
  Collections
  -------------------------------------------------------------------------- */
  // Blog posts collection
  eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('_source/blog/posts/*.md').sort((a, b) => {
      return new Date(b.data.date) - new Date(a.data.date);
    });
  });

  // Services collection
  eleventyConfig.addCollection('services', function(collectionApi) {
    return collectionApi.getFilteredByGlob('_source/services/*.md').sort((a, b) => {
      return (a.data.order || 0) - (b.data.order || 0);
    });
  });

  /* --------------------------------------------------------------------------
  MarkdownIt settings
  -------------------------------------------------------------------------- */
  const markdownItOptions = {
    html: true,
    typographer: true,
  };
  eleventyConfig.setLibrary('md', markdownIt(markdownItOptions));

  /* --------------------------------------------------------------------------
  Files & folders
  -------------------------------------------------------------------------- */
  eleventyConfig.ignores.add('.DS_Store');
  eleventyConfig.setServerPassthroughCopyBehavior('passthrough');
  eleventyConfig.addPassthroughCopy('_source/assets/fonts');
  eleventyConfig.addPassthroughCopy('_source/assets/images');
  eleventyConfig.addPassthroughCopy('_source/admin');
  eleventyConfig.addPassthroughCopy('_source/_redirects');

  // Configure the dev server
  eleventyConfig.setServerOptions({
    port: 12000,
    showAllHosts: true,
    headers: {
      'X-Frame-Options': 'ALLOWALL',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  });

  return {
    dir: {
      input: '_source',
      output: '_public',
      layouts: '_layouts',
      includes: '_includes',
    },
    templateFormats: ['html', 'md', 'liquid'],
    htmlTemplateEngine: 'liquid',
  };
}
