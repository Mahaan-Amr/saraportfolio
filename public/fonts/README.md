# Fonts Directory

This directory should contain the following Farsi font files:

## Required Font Files

### Vazir Font
- `Vazir-Regular.woff2` (400 weight)
- `Vazir-Medium.woff2` (500 weight)
- `Vazir-Bold.woff2` (700 weight)

### Yekan Font (Optional)
- `Yekan-Regular.woff2` (400 weight)
- `Yekan-Bold.woff2` (700 weight)

## Download Fonts

You can download these fonts from:
- [Vazir Font](https://github.com/rastikerdar/vazir-font)
- [Yekan Font](https://github.com/rastikerdar/yekan-font)

## Installation

1. Download the font files from the GitHub repositories above
2. Extract the `.woff2` files
3. Place them in this `public/fonts/` directory
4. The fonts will be automatically loaded by Next.js

## Fallback

If the local fonts are not available, the system will fall back to:
- Vazir → Tahoma → Arial → sans-serif
- Inter → System fonts → Arial → sans-serif

