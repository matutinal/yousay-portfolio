# Portfolio Website

A modern, responsive portfolio website built with [Eleventy](https://www.11ty.dev/) and the Grease CSS framework, featuring an integrated blog with Decap CMS.

## Features

- **Modern Stack**: Built with Eleventy, Lightning CSS, and Esbuild
- **Blog Integration**: Full-featured blog with Decap CMS for easy content management
- **Responsive Design**: Mobile-first approach with flexible grid system
- **Fast Performance**: Optimized for speed and accessibility
- **Content Management**: Decap CMS for easy blog post creation and editing
- **Easy Customization**: Clean, semantic HTML with utility-first CSS
- **CORS Support**: Configured for iframe embedding and cross-origin requests

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```
   The site will be available at `http://localhost:12000`

3. **Build for production**:
   ```bash
   npm run publish:prod
   ```

## Blog & Content Management

### Decap CMS Setup

The site includes Decap CMS (formerly Netlify CMS) for easy blog management:

- **Admin Interface**: Access at `/admin/` when deployed
- **Local Development**: CMS requires authentication, so it's primarily for production use
- **Content Types**: Blog posts, pages, and site settings

### Blog Features

- **Blog Index**: `/blog/` - Lists all published posts
- **Individual Posts**: Automatically generated from markdown files
- **Tags**: Categorize posts with tags
- **Featured Images**: Support for post thumbnails
- **Excerpts**: Short descriptions for post previews

### Adding Blog Posts

#### Method 1: Using Decap CMS (Recommended for production)
1. Deploy to Netlify with Git Gateway enabled
2. Access `/admin/` on your live site
3. Login and create posts using the visual editor

#### Method 2: Manual Creation (Development)
1. Create a new `.md` file in `_source/blog/posts/`
2. Use this frontmatter template:

```yaml
---
layout: blog-post.html
title: "Your Post Title"
date: 2024-07-06T10:00:00.000Z
excerpt: "A brief description of your post"
featured_image: "/assets/images/uploads/your-image.jpg" # Optional
tags: 
  - post
  - your-tag
---

Your post content here in Markdown...
```

## Project Structure

```
_source/
├── _data/           # Site configuration and data files
├── _includes/       # Reusable template components
├── _layouts/        # Page layout templates
│   ├── base.html        # Base layout
│   └── blog-post.html   # Blog post layout
├── admin/           # Decap CMS configuration
│   ├── index.html       # CMS interface
│   └── config.yml       # CMS configuration
├── blog/            # Blog section
│   ├── index.html       # Blog listing page
│   └── posts/           # Blog post markdown files
├── assets/          # Static assets (CSS, images, fonts)
│   ├── css/         # Stylesheets
│   ├── images/      # Image files
│   │   ├── projects/    # Project-related images
│   │   ├── portfolio/   # General portfolio images
│   │   └── uploads/     # CMS uploaded images
│   └── fonts/       # Web fonts
└── index.html       # Homepage

_public/             # Generated site (after build)
```

## Deployment to Netlify

### Prerequisites for CMS
1. **Git Repository**: Push your code to GitHub, GitLab, or Bitbucket
2. **Netlify Account**: Sign up at netlify.com

### Deployment Steps
1. Connect your repository to Netlify
2. Set build command: `npm run publish:prod`
3. Set publish directory: `_public`
4. Enable Netlify Identity in site settings
5. Enable Git Gateway in Identity settings
6. Invite users to access the CMS

### CMS Configuration
The CMS is pre-configured for:
- **Blog Posts**: Create and edit blog posts
- **Site Settings**: Update site title, description, etc.
- **Media Management**: Upload and manage images

## Customization

### Site Configuration
Edit `_source/_data/site.json` to update:
- Site title and description
- Author name
- Contact information

### Content
- **Homepage**: Edit `_source/index.html`
- **Blog Posts**: Use Decap CMS or create markdown files manually
- **Styles**: Customize CSS in `_source/assets/css/`
- **Images**: Add images to `_source/assets/images/`

### CMS Customization
Edit `_source/admin/config.yml` to:
- Add new content types
- Modify field configurations
- Change file naming patterns
- Add custom widgets

### Server Configuration
The development server is configured to run on port 12000 with CORS headers enabled for iframe embedding. Configuration can be found in `eleventy.config.js`.

## Built With

- [Eleventy](https://www.11ty.dev/) - Static site generator
- [Decap CMS](https://decapcms.org/) - Content management system
- [Lightning CSS](https://lightningcss.dev/) - CSS bundler and transformer
- [Esbuild](https://esbuild.github.io/) - JavaScript bundler
- [Grease CSS Framework](https://grease.aaadaaam.com) - Utility-first CSS framework
