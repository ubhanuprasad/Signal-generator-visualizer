# Setup Instructions

## Prerequisites Installation

Since npm is not available on your system, you'll need to install Node.js first.

### 1. Install Node.js

**Option A: Download from Official Website**
1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the LTS version for Windows
3. Run the installer and follow the setup wizard
4. This will install both Node.js and npm

**Option B: Using Chocolatey (if available)**
```powershell
choco install nodejs
```

**Option C: Using Winget (Windows 10/11)**
```powershell
winget install OpenJS.NodeJS
```

### 2. Verify Installation

After installing Node.js, restart your terminal and verify:

```bash
node --version
npm --version
```

### 3. Install Project Dependencies

Once npm is available, run:

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Alternative: Using Yarn

If you prefer Yarn package manager:

1. Install Yarn globally:
   ```bash
   npm install -g yarn
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start development server:
   ```bash
   yarn dev
   ```

## Project Structure Created

✅ **Complete Next.js 14 project with:**
- TypeScript configuration
- Tailwind CSS setup
- shadcn/ui component system
- Signal Generator with Chart.js
- GlowingEffect component integration
- Responsive design
- Dark/Light mode toggle

✅ **Key Files Created:**
- `package.json` - Dependencies and scripts
- `tailwind.config.ts` - Tailwind configuration
- `tsconfig.json` - TypeScript configuration
- `app/layout.tsx` - Root layout
- `app/page.tsx` - Main page
- `components/signal-generator.tsx` - Main component
- `components/ui/glowing-effect.tsx` - Interactive UI component
- `lib/signal-generator.ts` - Mathematical signal functions
- `lib/utils.ts` - Utility functions

## Features Implemented

🎯 **Signal Generation:**
- Sine, Cosine, and Square waves
- Real-time parameter control (frequency, amplitude)
- Mathematical equation display

📊 **Visualization:**
- Chart.js integration for smooth plotting
- Time domain visualization
- Responsive charts with proper labeling

🎨 **Modern UI:**
- shadcn/ui components
- GlowingEffect interactive borders
- Dark/Light mode toggle
- Professional ECE-focused design

📱 **Responsive Design:**
- Mobile-first approach
- Tablet and desktop optimized layouts
- Touch-friendly controls

## Next Steps

1. Install Node.js using one of the methods above
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open [http://localhost:3000](http://localhost:3000) in your browser

The project is ready for use as an ECE academic project demonstrating Signals & Systems and DSP concepts!