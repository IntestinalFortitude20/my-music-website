# Music EPK Website

My personal music website which contains my contact information and electronic press kit.

## Features

- **Home Page**: Hero section with featured music and highlights
- **About Me**: Biography, musical journey timeline, influences, and press kit materials
- **Music & Performances**: Audio players, album listings, video embeds, and streaming links
- **Events**: Upcoming shows with event cards and past performances
- **Contact**: Contact form, email information, social media links, and FAQ

## GitHub Pages Setup

This website is configured to work with GitHub Pages. To enable it:

1. Go to your repository Settings
2. Navigate to Pages section (under Code and automation)
3. Under "Source", select "Deploy from a branch"
4. Select the branch you want to deploy (usually `main` or `master`)
5. Click Save

Your site will be published at: `https://[username].github.io/[repository-name]/`

## Customization Guide

### Updating Content

1. **Artist Name & Branding**: Replace "Artist Name" throughout all HTML files
2. **Images**: Replace placeholder divs with actual images:
   ```html
   <!-- Replace this: -->
   <div class="hero-image-placeholder">
       <span class="placeholder-text">[Hero Image Placeholder]</span>
   </div>
   
   <!-- With this: -->
   <img src="images/hero-photo.jpg" alt="Artist Name" class="hero-image">
   ```

3. **Audio Players**: Replace placeholder divs with actual audio players:
   ```html
   <!-- Example with HTML5 audio: -->
   <audio controls>
       <source src="music/song.mp3" type="audio/mpeg">
       Your browser does not support the audio element.
   </audio>
   ```

4. **Video Embeds**: Replace placeholder divs with YouTube/Vimeo embeds:
   ```html
   <iframe width="560" height="315" 
       src="https://www.youtube.com/embed/VIDEO_ID" 
       frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
       allowfullscreen>
   </iframe>
   ```

### Contact Form Setup

The contact form uses Formspree (free service):

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Update the form action in `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Newsletter Integration

To add newsletter functionality, integrate with services like:
- [Mailchimp](https://mailchimp.com)
- [Buttondown](https://buttondown.email)
- [ConvertKit](https://convertkit.com)

### Color Scheme

Customize colors in `styles.css` by modifying the CSS variables:

```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #8b5cf6;  /* Secondary brand color */
    --accent-color: #ec4899;     /* Accent highlights */
    /* ... other variables ... */
}
```

## File Structure

```
my-music-website/
├── index.html          # Home page
├── about.html          # About me page
├── music.html          # Music and performances
├── events.html         # Events calendar
├── contact.html        # Contact information and form
├── styles.css          # All styling
├── _config.yml         # GitHub Pages configuration
└── README.md           # This file
```

## Adding Assets

Create these folders for your media files:
- `/images/` - for photos and graphics
- `/music/` - for audio files
- `/videos/` - for video files (if self-hosting)
- `/downloads/` - for EPK PDFs and press materials

## Browser Support

This website is compatible with all modern browsers including:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

© 2025 Artist Name. All rights reserved.
