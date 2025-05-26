# Option Randomizer

A modern, responsive web application built with Next.js that helps you make decisions by randomly selecting from a list of options. Perfect for choosing what to eat, which movie to watch, or any other decision-making scenario.

## ✨ Features

- **Random Selection**: Enter multiple options and get a random selection with animated results
- **History Tracking**: Keep track of all your previous selections with timestamps
- **Dark/Light Theme**: Toggle between dark mode, light mode, and system preference
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Beautiful transitions and animations powered by Framer Motion
- **Accessible**: Built with accessibility in mind using Radix UI components
- **Modern UI**: Clean, modern interface using Shadcn UI components

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Package Manager**: Bun/npm/pnpm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd randomizer
   ```

2. **Install dependencies**
   ```bash
   # Using bun (recommended)
   bun install
   
   # Or using npm
   npm install
   
   # Or using pnpm
   pnpm install
   ```

3. **Run the development server**
   ```bash
   # Using bun
   bun dev
   
   # Or using npm
   npm run dev
   
   # Or using pnpm
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 Usage

### Basic Usage

1. **Enter Options**: In the "Input Options" tab, enter your choices one per line
2. **Randomize**: Click the "Randomize" button to get a random selection
3. **View Result**: The selected option will appear in the "Result" tab with animation
4. **Check History**: View all your previous selections in the "History" tab

### Theme Toggle

- Click the theme toggle button (sun/moon icon) in the top-right corner
- Choose from:
  - **Light**: Light theme
  - **Dark**: Dark theme

### Features in Detail

- **Minimum Requirements**: At least 2 options required for randomization
- **Real-time Feedback**: See the count of entered options
- **Animation Effect**: Randomization includes a visual animation effect
- **History Management**: Clear history or view timestamped selections
- **Responsive Tabs**: Easy navigation between input, result, and history
- **Reset Functionality**: Clear all data and start fresh

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   └── ...
│   ├── randomizer.tsx       # Main randomizer component
│   └── theme-provider.tsx   # Theme context provider
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── components.json          # Shadcn UI configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Theme Colors

The application uses CSS variables for theming. You can customize colors in `app/globals.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... more variables */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... dark mode variables */
}
```

### Adding New Components

To add new Shadcn UI components:

```bash
npx shadcn@latest add [component-name]
```

## 🔧 Scripts

- `dev`: Start development server
- `build`: Build for production
- `start`: Start production server
- `lint`: Run ESLint

## 🌟 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Shadcn](https://twitter.com/shadcn) for the amazing UI components
- [Vercel](https://vercel.com) for Next.js
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

Made with ❤️ using Next.js and Shadcn UI 