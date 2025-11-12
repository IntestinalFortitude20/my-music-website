# Images Folder

This folder contains all image assets for your music EPK website.

## Folder Structure

### `/hero/`
**Purpose:** Hero/banner images for the homepage
- Main hero image for homepage header
- High-quality, visually striking photos
- **Recommended size:** 1920x1080px or larger
- **Format:** JPG or PNG

**Example usage in HTML:**
```html
<img src="images/hero/main-hero.jpg" alt="Artist Name" class="hero-image">
```

### `/albums/`
**Purpose:** Album artwork and cover art
- Album covers
- EP artwork
- Single artwork
- **Recommended size:** 3000x3000px (square format)
- **Format:** JPG or PNG

**Example usage:**
```html
<img src="images/albums/album-name.jpg" alt="Album Name Cover">
```

### `/events/`
**Purpose:** Event and performance photos
- Upcoming event promotional images
- Past performance photos
- Venue photos
- **Recommended size:** 1200x800px or larger
- **Format:** JPG

**Example usage:**
```html
<img src="images/events/event-dec-2025.jpg" alt="December 2025 Event">
```

### `/press/`
**Purpose:** High-resolution press photos for media/press kit
- Professional headshots
- Performance photos
- Promotional photos
- **Recommended size:** 3000x2000px or larger (high resolution)
- **Format:** JPG (highest quality)

**Example usage:**
```html
<img src="images/press/press-photo-1.jpg" alt="Artist Name Press Photo">
<a href="images/press/press-photo-1.jpg" download>Download Press Photo</a>
```

### `/profile/`
**Purpose:** Profile and about page images
- Profile picture for About page
- Biography photos
- Candid shots
- **Recommended size:** 800x800px or larger
- **Format:** JPG or PNG

**Example usage:**
```html
<img src="images/profile/artist-profile.jpg" alt="Artist Name Profile" class="profile-image">
```

### `/influences/`
**Purpose:** Images of musical influences/inspirations
- Photos of artists who inspire you
- Band logos or promotional images
- **Recommended size:** 400x400px (square)
- **Format:** JPG

**Example usage:**
```html
<img src="images/influences/influence-1.jpg" alt="Artist Name">
```

### `/social-icons/`
**Purpose:** Social media icons and logos
- Custom social media icons
- Platform logos (Spotify, Apple Music, YouTube, etc.)
- **Recommended size:** 64x64px or SVG format
- **Format:** PNG with transparency or SVG

**Example usage:**
```html
<img src="images/social-icons/spotify-icon.png" alt="Spotify">
```

## Image Optimization Tips

1. **Compress images** before uploading to reduce load times
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target file sizes under 200KB for web use

2. **Use appropriate formats:**
   - JPG: Photos and images with many colors
   - PNG: Images requiring transparency
   - SVG: Icons and logos (scalable, small file size)

3. **Alt text:** Always provide descriptive alt text for accessibility

4. **Responsive images:** Consider using different sizes for mobile vs desktop

## Adding Images to Your Website

Replace placeholder divs in HTML files with actual image tags:

**Before:**
```html
<div class="hero-image-placeholder">
    <span class="placeholder-text">[Hero Image Placeholder]</span>
</div>
```

**After:**
```html
<img src="images/hero/main-hero.jpg" alt="Artist Name performing live" class="hero-image">
```

## Image Copyright Notice

⚠️ **Important:** Ensure you have the rights to use all images on your website. This includes:
- Photos you took yourself
- Professional photos you commissioned
- Images with proper licensing

Do not use copyrighted images without permission.
