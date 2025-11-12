# Downloads Folder

This folder contains downloadable files for your music EPK website, including press kits, promotional materials, and other assets.

## Purpose

Store files that visitors (press, promoters, venue managers) can download, such as:
- Electronic Press Kit (EPK) PDFs
- High-resolution press photos
- Media information sheets
- Technical riders
- Stage plots
- Song lyrics (PDF)
- Press releases

## File Organization

```
downloads/
├── epk/
│   ├── artist-name-epk-2025.pdf
│   └── artist-name-one-sheet.pdf
├── press-photos/
│   ├── artist-name-press-1-highres.jpg
│   ├── artist-name-press-2-highres.jpg
│   └── artist-name-press-3-highres.jpg
├── technical/
│   ├── stage-plot.pdf
│   ├── tech-rider.pdf
│   └── input-list.pdf
├── promotional/
│   ├── press-release-latest.pdf
│   └── bio-sheet.pdf
└── README.md (this file)
```

## What to Include in Your EPK (Electronic Press Kit)

Your EPK PDF should contain:

### Essential Information
1. **Artist Biography** (short and long versions)
2. **High-quality press photos** (3-5 professional images)
3. **Music samples** (links to streaming platforms)
4. **Performance history** (notable venues, festivals)
5. **Media coverage** (reviews, interviews, features)
6. **Contact information** (booking, press, management)
7. **Social media handles** and follower counts
8. **Streaming statistics** (if applicable)
9. **Video links** (live performances, music videos)
10. **Technical requirements** (if relevant for live shows)

### One-Sheet
A condensed, single-page version with:
- Artist name and photo
- Genre and location
- Brief bio (2-3 sentences)
- Key achievements
- Contact information
- QR code to full EPK or website

## Creating Your EPK PDF

### Tools
- **Canva** (templates available, easy to use)
- **Adobe InDesign** (professional layouts)
- **Microsoft Word/Google Docs** (simple option)
- **Apple Pages** (Mac users)

### Design Tips
- Use high-quality images (300 DPI)
- Keep it professional and visually appealing
- Include your branding (colors, logo)
- Make sure text is readable
- Export as PDF for universal compatibility
- Keep file size under 10MB

## Adding Download Links to Your Website

### On the About Page (about.html)

Replace placeholder with download button:

**Before:**
```html
<button class="btn btn-primary">Download Full EPK (PDF)</button>
```

**After:**
```html
<a href="downloads/epk/artist-name-epk-2025.pdf" 
   class="btn btn-primary" 
   download="Artist-Name-EPK-2025.pdf">
    Download Full EPK (PDF)
</a>
```

### For Press Photos

**Before:**
```html
<div class="press-photo-placeholder">
    <span class="placeholder-text">[High-Res Photo 1]</span>
    <button class="btn btn-small">Download</button>
</div>
```

**After:**
```html
<div class="press-photo">
    <img src="images/press/press-photo-1.jpg" alt="Artist Name Press Photo">
    <a href="downloads/press-photos/artist-name-press-1-highres.jpg" 
       class="btn btn-small" 
       download="Artist-Name-Press-Photo-1.jpg">
        Download High-Res
    </a>
</div>
```

## Technical Rider and Stage Plot

For live performance bookings, include:

### Technical Rider
- Equipment requirements
- Sound/lighting specifications
- Stage setup preferences
- Power requirements
- Hospitality requests

### Stage Plot
- Visual diagram of stage setup
- Instrument/equipment positions
- Monitor placement
- Cable routing

### Input List
- Detailed list of all inputs
- Microphone types
- DI requirements

**Example HTML:**
```html
<div class="technical-downloads">
    <h3>Technical Information</h3>
    <ul>
        <li>
            <a href="downloads/technical/tech-rider.pdf" download>
                Download Technical Rider (PDF)
            </a>
        </li>
        <li>
            <a href="downloads/technical/stage-plot.pdf" download>
                Download Stage Plot (PDF)
            </a>
        </li>
        <li>
            <a href="downloads/technical/input-list.pdf" download>
                Download Input List (PDF)
            </a>
        </li>
    </ul>
</div>
```

## File Format Guidelines

### PDFs
- **Use for:** EPK, press releases, technical documents
- **Advantages:** Universal compatibility, preserves formatting
- **Max size:** 10MB recommended

### High-Res Photos (JPEG)
- **Resolution:** 300 DPI, 3000x2000px or larger
- **Color space:** RGB for web, CMYK for print
- **Quality:** 90-100% (minimal compression)
- **Max size:** 5-10MB per photo

### ZIP Archives (Optional)
For multiple files:
```html
<a href="downloads/press-kit-complete.zip" download>
    Download Complete Press Kit (ZIP)
</a>
```

## Press Release Template

A good press release includes:
- **Headline:** Attention-grabbing title
- **Date and location**
- **Opening paragraph:** Who, what, when, where, why
- **Body:** Key details and quotes
- **Boilerplate:** Standard artist bio
- **Contact information**

## File Naming Conventions

Use clear, descriptive names:
- ✅ `artist-name-epk-2025.pdf`
- ✅ `artist-name-press-photo-1-highres.jpg`
- ✅ `artist-name-tech-rider.pdf`
- ❌ `epk.pdf`
- ❌ `photo1.jpg`
- ❌ `document.pdf`

## Privacy and Access

Consider:
- **Public access:** Anyone can download these files
- **Password protection:** Not available with static hosting (GitHub Pages)
- **Alternative:** Use contact form for sensitive documents, send via email

## Regular Updates

Keep your downloads current:
- Update EPK annually or after major milestones
- Add new press photos regularly
- Update press releases for new releases/events
- Refresh statistics and achievements
- Update contact information as needed

## Copyright Notice

All downloadable materials should include:
- Copyright notice: "© 2025 Artist Name. All rights reserved."
- Usage terms: "For press and promotional use only"
- Contact information for permissions

Example footer text in EPK:
```
© 2025 Artist Name. All rights reserved.
These materials are for press and promotional use only.
For licensing inquiries, contact: your.email@example.com
```

## File Size and Bandwidth

Be mindful of:
- Keep individual files under 10MB
- Compress images without losing quality
- Consider using external services for very large files:
  - Dropbox
  - Google Drive
  - WeTransfer

## Accessibility

Make downloads accessible:
- Use descriptive link text
- Indicate file type and size
- Example: `Download EPK (PDF, 2.5MB)`

```html
<a href="downloads/epk/artist-name-epk.pdf" download>
    Download Electronic Press Kit 
    <span class="file-info">(PDF, 2.5MB)</span>
</a>
```
