# Music Folder

This folder contains audio files for your music EPK website.

## Purpose

Store your music tracks, songs, and audio files that will be played directly on your website using HTML5 audio players.

## Recommended Audio Formats

### MP3 (Recommended)
- **Best for:** Universal compatibility
- **Bitrate:** 192-320 kbps for high quality
- **Pros:** Supported by all browsers, good compression
- **File naming:** `song-title.mp3`

### OGG Vorbis (Optional fallback)
- **Best for:** Open-source alternative
- **Quality:** Similar to MP3
- **Pros:** Free, open format
- **File naming:** `song-title.ogg`

### WAV (Not recommended for web)
- **Quality:** Lossless, very high quality
- **Cons:** Very large file sizes, slow loading
- **Use case:** Keep originals elsewhere, convert to MP3 for web

## File Organization

Organize your music files logically:

```
music/
├── singles/
│   ├── song-title-1.mp3
│   └── song-title-2.mp3
├── albums/
│   ├── album-name/
│   │   ├── track-01.mp3
│   │   ├── track-02.mp3
│   │   └── track-03.mp3
├── demos/
│   └── demo-track.mp3
└── README.md (this file)
```

## Adding Audio to Your Website

Replace audio player placeholders in your HTML files:

**Before:**
```html
<div class="audio-player-placeholder">
    <span class="placeholder-text">[Audio Player Placeholder]</span>
</div>
```

**After:**
```html
<audio controls class="audio-player">
    <source src="music/song-title.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

### With Multiple Format Support:
```html
<audio controls>
    <source src="music/song-title.mp3" type="audio/mpeg">
    <source src="music/song-title.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>
```

## Example Usage from music.html

Update the track items in `music.html`:

```html
<div class="track-item">
    <div class="track-image">
        <img src="images/albums/album-cover.jpg" alt="Album Name">
    </div>
    <div class="track-info">
        <h3>Song Title</h3>
        <p class="track-details">Album Name • 2025</p>
        <audio controls class="audio-player">
            <source src="music/singles/song-title.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
</div>
```

## File Size Guidelines

- **Streaming quality:** 128-192 kbps MP3 (smaller files, faster loading)
- **High quality:** 256-320 kbps MP3 (best quality, larger files)
- **Target:** Keep files under 10MB each for web streaming

## Optimization Tips

1. **Compress audio files** to reduce load times while maintaining quality
2. **Trim silence** from the beginning and end of tracks
3. **Normalize audio levels** for consistent playback volume
4. **Consider hosting** large files on external platforms (Spotify, SoundCloud) and embedding instead

## Alternative: External Streaming

Instead of self-hosting large audio files, you can embed players from:

### Spotify
```html
<iframe src="https://open.spotify.com/embed/track/YOUR_TRACK_ID" 
    width="300" height="380" frameborder="0" allowtransparency="true" 
    allow="encrypted-media">
</iframe>
```

### SoundCloud
```html
<iframe width="100%" height="166" scrolling="no" frameborder="no" 
    src="https://w.soundcloud.com/player/?url=YOUR_TRACK_URL">
</iframe>
```

### Bandcamp
```html
<iframe style="border: 0; width: 350px; height: 470px;" 
    src="https://bandcamp.com/EmbeddedPlayer/track=YOUR_TRACK_ID">
</iframe>
```

## Copyright and Licensing

⚠️ **Important:** 
- Only upload music you own the rights to
- Ensure you have proper licensing for any samples or covers
- Consider copyright implications when making music available for download

## Performance Notes

- Browsers will only download audio when the user clicks play (not on page load)
- Use the `preload="metadata"` attribute to load only basic track info
- For multiple tracks on one page, avoid setting `preload="auto"` on all tracks

```html
<audio controls preload="metadata">
    <source src="music/song-title.mp3" type="audio/mpeg">
</audio>
```
