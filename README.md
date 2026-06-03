# jobwiese.com
Ich benötige eine neue Webseite. Es könnte eine Kopie der Webseite https://www.jobwiese.de/ sein, die dann jedoch noch bezüglich der Optik, texten und Sprache ein wenig angepasst werden müsste.

---

# Jobwiese Clone - Bilingual Student Services Platform

A modern, responsive, and bilingual (German/English) web application for student labor placement services, specializing in moving assistance, handwork, and garden services.

## Features

- **Bilingual Support**: Full German and English translations with easy language switching
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: Built with Next.js 14+, TypeScript, and React
- **Service Booking**: Easy-to-use booking system for various services
- **Pricing Packages**: Clear pricing tiers for different service levels
- **FAQ Section**: Interactive accordion-style frequently asked questions
- **Contact Form**: Validated contact form with React Hook Form
- **SEO Optimized**: Built with Next.js for optimal search engine performance

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Forms**: React Hook Form
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jobwiese-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
jobwiese-clone/
├── app/
│   ├── [locale]/          # Internationalized routes
│   │   ├── layout.tsx     # Root layout with language support
│   │   └── page.tsx       # Homepage
├── components/            # React components
│   ├── Header.tsx        # Navigation with language switcher
│   ├── Hero.tsx          # Hero section
│   ├── ProcessFlow.tsx   # 3-step process section
│   ├── Services.tsx      # Services overview
│   ├── Pricing.tsx       # Pricing packages
│   ├── FAQ.tsx           # FAQ accordion
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer component
├── messages/             # Translation files
│   ├── de.json          # German translations
│   └── en.json          # English translations
├── public/              # Static assets
├── i18n.ts             # i18n configuration
└── middleware.ts       # Locale detection middleware
```

## Internationalization

The application supports two languages:
- **German (de)** - Default language
- **English (en)**

Language can be switched using the language selector in the header. The selected language persists across navigation.

### Adding New Translations

1. Edit `messages/de.json` for German
2. Edit `messages/en.json` for English
3. Use the translation keys in components with `useTranslations()` hook

## Customization

### Colors and Styling

Edit `tailwind.config.ts` to customize:
- Color scheme
- Fonts
- Spacing
- Breakpoints

### Content

Update translation files in `messages/` directory to change:
- Text content
- Service descriptions
- Pricing information
- FAQ items

### Components

All components are located in the `components/` directory and can be customized independently.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Features Roadmap

- [ ] Online booking system integration
- [ ] Payment processing
- [ ] Customer dashboard
- [ ] Admin panel
- [ ] Email notifications
- [ ] SMS reminders
- [ ] Review system
- [ ] Calendar integration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is for educational and demonstration purposes.

## Support

For questions or support, please open an issue in the repository.

---

**Built with** Next.js, TypeScript, Tailwind CSS, and next-intl
