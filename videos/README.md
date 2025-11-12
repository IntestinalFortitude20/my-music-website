# Videos Folder

This folder is for video files if you choose to self-host videos on your website.

## Purpose

Store video files that you want to host directly on your website. However, **embedding videos from YouTube, Vimeo, or other platforms is strongly recommended** instead of self-hosting due to bandwidth and storage considerations.

## When to Use This Folder

Self-host videos only when:
- You have small, short video clips (under 50MB)
- You want complete control over video presentation
- You need videos to work offline or without external dependencies

## Recommended Approach: External Embedding

### YouTube (Recommended)
```html
<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
```

### Vimeo
```html
<iframe src="https://player.vimeo.com/video/VIDEO_ID" 
    width="640" height="360" 
    frameborder="0" 
    allow="autoplay; fullscreen; picture-in-picture" 
    allowfullscreen>
</iframe>
```

## Self-Hosting Videos (If Needed)

### Recommended Video Formats

#### MP4 (H.264) - Primary format
- **Best for:** Universal browser support
- **Codec:** H.264 video, AAC audio
- **Pros:** Excellent compression, widely supported
- **File naming:** `video-title.mp4`

#### WebM - Secondary format (optional)
- **Best for:** Open-source alternative
- **Codec:** VP8/VP9 video, Vorbis/Opus audio
- **Pros:** Open format, good compression
- **File naming:** `video-title.webm`

### File Organization

```
videos/
├── performances/
│   ├── live-show-2025.mp4
│   └── acoustic-session.mp4
├── music-videos/
│   ├── song-title-official.mp4
├── behind-the-scenes/
│   └── studio-session.mp4
└── README.md (this file)
```

## Adding Self-Hosted Videos to Your Website

Replace video placeholders in your HTML files:

**Before:**
```html
<div class="video-placeholder">
    <span class="placeholder-text">[YouTube Video Embed]</span>
</div>
```

**After (Self-hosted):**
```html
<video controls width="100%" class="video-player">
    <source src="videos/performances/live-show.mp4" type="video/mp4">
    <source src="videos/performances/live-show.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
```

### Video Attributes

```html
<video 
    controls           <!-- Show playback controls -->
    preload="metadata" <!-- Only load video metadata, not the entire video -->
    poster="images/video-thumbnail.jpg" <!-- Thumbnail image before play -->
    width="100%">
    <source src="videos/video-file.mp4" type="video/mp4">
</video>
```

## Video Specifications

### Resolution Options
- **1080p (1920x1080):** High quality, large files
- **720p (1280x720):** Good quality, moderate file size (recommended)
- **480p (854x480):** Lower quality, smaller files

### Optimization Settings
- **Framerate:** 30 fps (or 24 fps for cinematic look)
- **Bitrate:** 
  - 720p: 2-5 Mbps
  - 1080p: 4-8 Mbps
- **Audio:** 128-192 kbps AAC

### File Size Guidelines
- Target: Under 50MB per video for reasonable load times
- Maximum: 100MB (beyond this, use external hosting)

## Compression Tools

Before uploading videos, compress them using:
- **HandBrake** (free, open-source)
- **Adobe Media Encoder**
- **FFmpeg** (command-line)
- **Online tools:** CloudConvert, Online-Convert

### FFmpeg Example Command
```bash
ffmpeg -i input.mov -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k output.mp4
```

## Performance Considerations

⚠️ **Warning:** Self-hosting videos can:
- Consume significant bandwidth
- Slow down your website
- Exceed GitHub Pages bandwidth limits (100GB/month)
- Increase storage usage (1GB limit for GitHub repositories)

**Best Practice:** Upload videos to YouTube/Vimeo and embed them on your site.

## Example: Replacing Placeholders in music.html

Update video sections in `music.html`:

```html
<div class="video-item">
    <!-- Using YouTube (Recommended) -->
    <iframe width="100%" height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" allowfullscreen>
    </iframe>
    
    <h3>Live Performance - Song Title</h3>
    <p>Venue Name • December 2025</p>
</div>
```

Or with self-hosted video:

```html
<div class="video-item">
    <video controls width="100%" poster="images/video-thumbnail.jpg">
        <source src="videos/performances/live-show.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <h3>Live Performance - Song Title</h3>
    <p>Venue Name • December 2025</p>
</div>
```

## Copyright and Licensing

⚠️ **Important:**
- Only upload videos you own the rights to
- Ensure you have proper licensing for music, footage, and any third-party content
- Consider YouTube's Content ID system for copyright protection

## Storage Limits

GitHub repository size limits:
- **Recommended:** Keep repositories under 1GB
- **File size limit:** 100MB per file
- **Warning issued:** At 75MB per file

For larger videos, use external hosting services.
