# Changelog

## [Latest] - Fonts & Animations Update

### Added
- **Premium Typography**:
  - Vazir font for Farsi (with CDN fallback)
  - Inter font for English (Google Fonts)
  - Playfair Display for decorative headings
  - Automatic language-based font switching

- **Advanced Text Animations**:
  - `AnimatedText` component with 7 animation types:
    - Letter-by-letter reveal
    - Word-by-word reveal
    - Line-by-line reveal
    - Fade animation
    - Slide animation
    - Glitch effect
    - Gradient animation
  - `GradientText` component for animated gradient text
  - `TypewriterText` component for typewriter effects
  - `MorphingText` component for word morphing

- **Enhanced Component Animations**:
  - Improved hover effects with rotation and scale
  - Animated background gradients on hover
  - Stagger animations for grid items
  - Enhanced scroll-triggered animations
  - Icon rotation animations

- **Documentation**:
  - `FONTS_AND_ANIMATIONS.md` - Comprehensive guide
  - Updated README with font and animation info
  - Updated PROJECT_SUMMARY.md

### Changed
- Updated Hero section to use animated text components
- Enhanced About section with gradient text and word animations
- Improved Skills section with fade animations
- Better font loading with CDN fallback

### Technical
- Font loading optimized with `display: swap`
- GPU-accelerated animations for better performance
- Viewport-based animation triggers
- Reduced motion support

## [Initial] - Portfolio Creation

### Added
- Next.js 16 with TypeScript
- Bilingual support (Farsi/English)
- Dark/Light mode
- Navigation with language and theme toggles
- Hero section with particles
- About section with stats
- Skills showcase
- Portfolio grid with filtering
- Timeline component
- Contact form
- Footer
- Responsive design
- RTL/LTR support

