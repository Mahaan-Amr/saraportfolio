# Creative Portfolio Website

A modern, bilingual (Farsi/English) portfolio website for an animator and graphic designer, built with Next.js 16, TypeScript, and Tailwind CSS.

## ✨ Features

- 🌐 **Bilingual Support**: Full Farsi (default) and English language support with RTL/LTR layout switching
- 🌓 **Dark/Light Mode**: Seamless theme switching with persistent user preference
- 🎨 **Creative Design**: Beautiful animations and transitions using Framer Motion
- 📱 **Fully Responsive**: Optimized for all device sizes
- 🎯 **Modern Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS v4
- ⚡ **Performance**: Optimized for fast loading and smooth animations
- 🎨 **Color Palette**: Light purple and light blue theme throughout
- 🔤 **Premium Typography**: High-quality Farsi (Vazir) and English (Inter, Playfair Display) fonts
- ✨ **Advanced Animations**: Letter-by-letter, word-by-word, gradient, glitch, and morphing text animations

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Internationalization**: i18next, react-i18next
- **Theme Management**: next-themes
- **Icons**: Lucide React, React Icons
- **Fonts**: 
  - **Farsi**: Vazir (local + CDN fallback)
  - **English**: Inter, Playfair Display (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd saraportfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

The site will be live at `https://your-project.vercel.app`

## 📁 Project Structure

```
saraportfolio/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and theme
├── components/
│   ├── Navigation.tsx      # Navigation bar with language/theme toggles
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # About section with stats
│   ├── Skills.tsx          # Skills showcase
│   ├── Portfolio.tsx       # Portfolio grid with filtering
│   ├── Timeline.tsx        # Career timeline/roadmap
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer component
│   ├── ThemeProvider.tsx   # Theme context provider
│   ├── ThemeToggle.tsx     # Theme switcher button
│   ├── LanguageSwitcher.tsx # Language switcher
│   └── I18nProvider.tsx    # i18n initialization
├── data/
│   └── portfolio.ts        # Static portfolio data
├── lib/
│   └── i18n.ts            # i18next configuration
└── locales/
    ├── en.json             # English translations
    └── fa.json             # Farsi translations
```

## 🎨 Customization

### Fonts & Animations

See [FONTS_AND_ANIMATIONS.md](./FONTS_AND_ANIMATIONS.md) for detailed information about:
- Font installation and configuration
- Animation component usage
- Custom animation creation
- Performance optimization

### Adding Portfolio Items

Edit `data/portfolio.ts` to add new portfolio items:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  titleFa: 'عنوان پروژه',
  description: 'Project description',
  descriptionFa: 'توضیحات پروژه',
  category: 'animation' | 'graphicDesign' | 'videoEditing' | 'content',
  image: '/path/to/image.jpg',
  tags: ['Tag1', 'Tag2'],
}
```

### Updating Timeline

Edit the `timelineData` array in `components/Timeline.tsx` to update career milestones.

### Modifying Colors

Update the color variables in `app/globals.css`:

```css
--purple-light: #E6D5F7;
--purple-medium: #D8BFD8;
--blue-light: #ADD8E6;
--blue-medium: #87CEEB;
```

### Adding Translations

Add new translation keys to both `locales/en.json` and `locales/fa.json`, then use them with:

```typescript
const { t } = useTranslation();
t('your.key.path')
```

## 🌍 Language Support

- **Default Language**: Farsi (Persian)
- **Secondary Language**: English
- **RTL Support**: Automatic RTL layout for Farsi
- **Language Detection**: Automatically detects user's browser language preference

## 🎭 Animations

The portfolio uses Framer Motion for smooth animations:
- Hero section with floating particles
- Scroll-triggered animations
- Hover effects on interactive elements
- Smooth page transitions

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### i18next Configuration

Located in `lib/i18n.ts`. Configure language detection and fallback settings here.

### Theme Configuration

Located in `components/ThemeProvider.tsx`. Modify default theme and system preference handling.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please open an issue in the repository.

---

Made with ❤️ using Next.js and TypeScript
