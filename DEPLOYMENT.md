# Deployment Guide

This guide will help you deploy your portfolio website with Decap CMS to Netlify.

## Prerequisites

1. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, or Bitbucket)
2. **Netlify Account**: Sign up at [netlify.com](https://netlify.com)

## Step 1: Deploy to Netlify

1. **Connect Repository**:
   - Log into Netlify
   - Click "New site from Git"
   - Choose your Git provider and repository
   - Select the branch to deploy (usually `main` or `master`)

2. **Configure Build Settings**:
   - **Build command**: `npm run publish:prod`
   - **Publish directory**: `_public`
   - **Node version**: 18 or higher (set in environment variables if needed)

3. **Deploy**:
   - Click "Deploy site"
   - Wait for the initial deployment to complete

## Step 2: Enable Netlify Identity

1. **Enable Identity**:
   - Go to your site dashboard in Netlify
   - Navigate to "Identity" in the sidebar
   - Click "Enable Identity"

2. **Configure Registration**:
   - Set registration to "Invite only" (recommended for security)
   - Enable external providers if desired (Google, GitHub, etc.)

## Step 3: Enable Git Gateway

1. **Enable Git Gateway**:
   - In the Identity section, scroll down to "Services"
   - Click "Enable Git Gateway"
   - This allows the CMS to commit directly to your repository

## Step 4: Configure Identity Widget

The identity widget is already configured in your site. It will automatically handle:
- User authentication
- Login/logout flows
- Redirects to the CMS

## Step 5: Invite Users

1. **Invite Yourself**:
   - In Netlify Identity, click "Invite users"
   - Enter your email address
   - Check your email and follow the setup link

2. **Set Password**:
   - Follow the email link to set your password
   - You'll be redirected to your site

## Step 6: Access the CMS

1. **Navigate to CMS**:
   - Go to `https://yoursite.netlify.app/admin/`
   - Login with your Netlify Identity credentials

2. **Start Creating Content**:
   - Create your first blog post
   - Upload images
   - Update site settings

## Troubleshooting

### CMS Not Loading
- Check that Netlify Identity is enabled
- Verify Git Gateway is enabled
- Ensure you're accessing `/admin/` (with trailing slash)

### Authentication Issues
- Clear browser cache and cookies
- Try incognito/private browsing mode
- Check that you've accepted the invitation email

### Build Failures
- Check build logs in Netlify dashboard
- Verify Node.js version compatibility
- Ensure all dependencies are in package.json

### Content Not Updating
- Check that Git Gateway has write permissions
- Verify the CMS config.yml file paths are correct
- Look for error messages in the CMS interface

## Environment Variables

If needed, you can set these environment variables in Netlify:

```
NODE_VERSION=18
NPM_VERSION=8
```

## Custom Domain

To use a custom domain:

1. **Add Domain**:
   - Go to "Domain settings" in Netlify
   - Add your custom domain

2. **Configure DNS**:
   - Point your domain to Netlify's servers
   - Enable HTTPS (automatic with Netlify)

3. **Update Site Config**:
   - Update the `url` field in `_source/_data/site.json`
   - Redeploy the site

## Security Considerations

- Keep registration set to "Invite only"
- Regularly review user access
- Use strong passwords
- Enable two-factor authentication if available
- Monitor the activity logs

## Support

For additional help:
- [Netlify Documentation](https://docs.netlify.com/)
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Eleventy Documentation](https://www.11ty.dev/docs/)