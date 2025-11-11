# GitHub Pages Setup Instructions

## Quick Start - Enable GitHub Pages

1. **Navigate to Repository Settings**
   - Go to your repository: https://github.com/IntestinalFortitude20/my-music-website
   - Click on "Settings" tab at the top

2. **Access GitHub Pages Settings**
   - In the left sidebar, click "Pages" (under "Code and automation")

3. **Configure Source**
   - Under "Source", select "Deploy from a branch"
   - Under "Branch", select your branch (e.g., `main` or `copilot/setup-music-epk-website`)
   - Select folder: `/ (root)`
   - Click "Save"

4. **Wait for Deployment**
   - GitHub will build and deploy your site (takes 1-2 minutes)
   - Once complete, you'll see a message: "Your site is live at https://intestinalfortitude20.github.io/my-music-website/"

## Accessing Your Website

After deployment, your website will be available at:
```
https://intestinalfortitude20.github.io/my-music-website/
```

## File Structure

Your website includes:
- `index.html` - Homepage
- `about.html` - About Me page
- `music.html` - Music & Performances page
- `events.html` - Events page
- `contact.html` - Contact page
- `styles.css` - All styling
- `_config.yml` - GitHub Pages configuration

## Common Issues

### Site Not Loading?
- Check that GitHub Pages is enabled in Settings → Pages
- Verify the correct branch is selected
- Wait a few minutes after initial setup

### Changes Not Showing?
- GitHub Pages takes 1-2 minutes to rebuild after changes
- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Check the Actions tab to see if the build is still running

### Custom Domain (Optional)
To use a custom domain:
1. Settings → Pages → Custom domain
2. Enter your domain name
3. Follow DNS configuration instructions

## Testing Locally

To test the website on your local machine:

```bash
# Navigate to the repository
cd my-music-website

# Start a simple HTTP server
python3 -m http.server 8080

# Open in browser: http://localhost:8080
```

## What's Next?

See README.md for detailed customization instructions including:
- Replacing placeholder images
- Adding real audio players
- Embedding videos
- Setting up the contact form
- Customizing colors and branding
- Adding your content

Enjoy your new music EPK website! 🎵
