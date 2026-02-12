# Fonts & Animations Guide

## 📝 Fonts

### Farsi Fonts

**Vazir** - Primary Farsi font
- **Weights**: 400 (Regular), 500 (Medium), 700 (Bold)
- **Source**: [Vazir Font GitHub](https://github.com/rastikerdar/vazir-font)
- **Loading**: Local fonts with CDN fallback
- **Usage**: Automatically applied when language is set to Farsi

**Yekan** - Secondary Farsi font (optional)
- **Weights**: 400 (Regular), 700 (Bold)
- **Source**: [Yekan Font GitHub](https://github.com/rastikerdar/yekan-font)
- **Status**: Configured but optional

### English Fonts

**Inter** - Primary English font
- **Weights**: 300, 400, 500, 600, 700, 800
- **Source**: Google Fonts
- **Usage**: Automatically applied when language is set to English

**Playfair Display** - Display font for headings
- **Weights**: 400, 500, 600, 700, 800, 900
- **Source**: Google Fonts
- **Usage**: For special headings and decorative text

### Font Installation

1. **For Local Farsi Fonts** (Optional but recommended):
   ```bash
   # Download Vazir fonts
   # Place in public/fonts/ directory:
   - Vazir-Regular.woff2
   - Vazir-Medium.woff2
   - Vazir-Bold.woff2
   ```

2. **CDN Fallback**: If local fonts aren't available, Vazir will load from CDN automatically.

3. **Font Classes**:
   - `.font-english` - Apply English font
   - `.font-farsi` - Apply Farsi font
   - `.font-display` - Apply Playfair Display

## 🎬 Animation Components

### AnimatedText

Multi-purpose text animation component with various animation types.

**Props:**
- `text` (string): Text to animate
- `type` ('letter' | 'word' | 'line' | 'fade' | 'slide' | 'glitch' | 'gradient'): Animation type
- `className` (string): Additional CSS classes
- `delay` (number): Initial delay in seconds
- `duration` (number): Animation duration
- `stagger` (number): Delay between elements

**Example:**
```tsx
<AnimatedText
  text="Hello World"
  type="letter"
  delay={0.2}
  stagger={0.03}
/>
```

**Animation Types:**
- **letter**: Letter-by-letter reveal with 3D rotation
- **word**: Word-by-word reveal with scale and fade
- **line**: Line-by-line reveal
- **fade**: Simple fade-in
- **slide**: Slide in from left
- **glitch**: Glitch effect with color shifts
- **gradient**: Gradient text animation

### GradientText

Animated gradient text component.

**Props:**
- `text` (string): Text to display
- `className` (string): Additional CSS classes
- `gradient` (string): Tailwind gradient classes
- `animate` (boolean): Enable/disable animation
- `speed` (number): Animation speed in seconds

**Example:**
```tsx
<GradientText
  text="Creative Designer"
  gradient="from-purple-600 via-blue-600 to-purple-600"
  animate={true}
  speed={3}
/>
```

### TypewriterText

Typewriter effect component.

**Props:**
- `text` (string): Text to type
- `speed` (number): Typing speed in milliseconds
- `delay` (number): Initial delay
- `className` (string): Additional CSS classes
- `showCursor` (boolean): Show blinking cursor
- `onComplete` (function): Callback when typing completes

**Example:**
```tsx
<TypewriterText
  text="Welcome to my portfolio"
  speed={50}
  delay={1000}
  showCursor={true}
/>
```

### MorphingText

Text that morphs between multiple words.

**Props:**
- `words` (string[]): Array of words to cycle through
- `className` (string): Additional CSS classes
- `duration` (number): Time per word in seconds
- `delay` (number): Initial delay

**Example:**
```tsx
<MorphingText
  words={['Designer', 'Animator', 'Creator']}
  duration={2}
/>
```

## 🎨 Component Animations

### Enhanced Hover Effects

Components now feature enhanced hover animations:
- **Scale animations**: Smooth scale on hover
- **Rotation effects**: Subtle rotation for icons
- **Glow effects**: Animated background gradients
- **3D transforms**: Perspective-based animations

### Scroll Animations

All sections use scroll-triggered animations:
- **Fade in**: Elements fade in as they enter viewport
- **Slide up**: Elements slide up from bottom
- **Stagger**: Children animate with staggered delays

### Stagger Animations

Grid and list items animate with stagger:
- **Skills grid**: Each skill card animates sequentially
- **Portfolio items**: Cards appear one by one
- **Timeline items**: Events animate in order

## 🎯 Usage Examples

### Hero Section
```tsx
<AnimatedText
  text={t('hero.title')}
  type="letter"
  className="text-5xl font-bold"
  delay={0.2}
  stagger={0.03}
/>
```

### Section Headings
```tsx
<GradientText
  text={t('about.title')}
  gradient="from-purple-600 via-blue-600 to-purple-600"
  animate={true}
  speed={3}
/>
```

### Descriptions
```tsx
<AnimatedText
  text={t('about.description')}
  type="word"
  delay={0.2}
  stagger={0.03}
/>
```

## 🔧 Customization

### Custom Animation Timing

Adjust animation speeds in component props:
```tsx
<AnimatedText
  text="Custom Speed"
  type="letter"
  duration={0.8}  // Slower
  stagger={0.05}  // More delay between letters
/>
```

### Custom Gradients

Create custom gradient animations:
```tsx
<GradientText
  text="Custom Gradient"
  gradient="from-pink-500 via-red-500 to-orange-500"
  speed={2}
/>
```

### Combining Animations

Combine multiple animation components:
```tsx
<div>
  <AnimatedText text="First" type="fade" />
  <MorphingText words={['Second', 'Third']} />
  <GradientText text="Fourth" />
</div>
```

## 📊 Performance

- **Font Loading**: Optimized with `display: swap` for better performance
- **Animation Performance**: Uses GPU-accelerated transforms
- **Lazy Loading**: Animations trigger only when in viewport
- **Reduced Motion**: Respects `prefers-reduced-motion` media query

## 🎨 Best Practices

1. **Use appropriate animation types**:
   - Headings: `letter` or `gradient`
   - Body text: `word` or `fade`
   - Special effects: `glitch` or `morphing`

2. **Stagger timing**:
   - Fast: 0.01-0.02
   - Medium: 0.03-0.05
   - Slow: 0.06-0.1

3. **Delay timing**:
   - Immediate: 0
   - Quick: 0.1-0.3
   - Medium: 0.4-0.6
   - Slow: 0.7+

4. **Performance**:
   - Use `once: true` for viewport animations
   - Avoid too many simultaneous animations
   - Test on lower-end devices

## 🐛 Troubleshooting

### Fonts Not Loading
- Check if font files exist in `public/fonts/`
- Verify font file names match exactly
- Check browser console for 404 errors
- CDN fallback should work automatically

### Animations Not Working
- Ensure Framer Motion is installed
- Check if component is in viewport
- Verify `once: true` isn't preventing re-animation
- Check browser console for errors

### Performance Issues
- Reduce number of animated elements
- Increase stagger delays
- Use simpler animation types
- Enable `prefers-reduced-motion` support

