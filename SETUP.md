# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```
   
   This will install all required packages:
   - i18next, react-i18next, i18next-browser-languagedetector (for bilingual support)
   - next-themes (for dark/light mode)
   - framer-motion (for animations)
   - react-icons, lucide-react (for icons)

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Important Notes

### TypeScript Errors
If you see TypeScript errors about missing modules, this is normal until you run `npm install`. After installing dependencies, the errors should resolve.

### First Run
On first run, the site will:
- Default to Farsi (Persian) language
- Use dark mode as default
- Load with RTL (right-to-left) layout

### Language Switching
- Click the language button in the navigation to switch between Farsi and English
- The layout will automatically switch between RTL and LTR

### Theme Switching
- Click the theme toggle button to switch between dark and light modes
- Your preference will be saved in localStorage

## Customization

### Adding Your Content

1. **Portfolio Items**: Edit `data/portfolio.ts`
2. **Timeline Events**: Edit `components/Timeline.tsx` (timelineData array)
3. **Translations**: Edit `locales/en.json` and `locales/fa.json`
4. **Skills**: Already configured in `components/Skills.tsx`

### Changing Colors

Edit `app/globals.css` to modify the color palette:
- Light purple: `--purple-light`
- Medium purple: `--purple-medium`
- Light blue: `--blue-light`
- Medium blue: `--blue-medium`

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click Deploy!

Your site will be live in minutes!

## Troubleshooting

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`

### i18n Not Working
- Ensure `lib/i18n.ts` is imported in `components/I18nProvider.tsx`
- Check that translation files exist in `locales/` directory

### Theme Not Switching
- Verify `ThemeProvider` wraps the app in `app/layout.tsx`
- Check browser console for errors

## Next Steps

- Add your actual portfolio images to `public/` directory
- Update portfolio data with real projects
- Customize timeline with your actual career milestones
- Add your contact information
- Customize colors and styling to match your brand

