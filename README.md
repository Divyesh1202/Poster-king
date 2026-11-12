# Poster King — Responsive Poster Maker

Website: https://divyesh1202.github.io/Poster-king/

## User flow
Home → Category → Ready-made Gallery → Poster Preview → Download / Share / Edit.

## Features implemented
- Mobile-friendly multipage navigation: Home, Categories, Create, My Posters, Profile
- Gujarati-first 14 categories and time-aware daily picks (not real trending analytics)
- Generated template gallery using 12 palettes, 5 layout variants and rotating Gujarati quotes
- Shared renderer for preview and editor so the selected design is preserved
- PNG download and native sharing when browser supports file sharing
- Editor: multiple text/photo/logo layers, move/resize, font/color/shape/border/opacity, gradient and uploaded background, undo/redo for layer actions
- Local profile reuse and locally stored recent poster thumbnails
- Installable PWA and static GitHub Pages hosting

## Limitations / production work
- Template gallery is generated designs, **not** thousands of unique premium artworks.
- No secure cloud admin, accounts, database, user sync or automated festival calendar.
- No live AdSense/AdMob, Android APK or Play Store listing.
- Undo/redo does not capture every slider adjustment or background change.
- User content is stored locally in browser; clearing browser data removes it.
- Browser/device QA and accessibility testing are still required.
- Do not place real AdSense/AdMob credentials in public client-side source code.

## Deployment
GitHub Pages from main branch / root. Wait for Pages deployment and refresh to update cached PWA assets.
