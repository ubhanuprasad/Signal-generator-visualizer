# Signal Generator & Visualizer

An interactive web application for generating and visualizing fundamental signals used in Electronics and Communication Engineering (ECE) coursework, specifically for Signals & Systems and Digital Signal Processing (DSP) studies.

## 🎯 Features

### Signal Generation
- **Sine Wave**: `A × sin(2π × f × t + φ)`
- **Cosine Wave**: `A × cos(2π × f × t + φ)`
- **Square Wave**: `A × sign(sin(2π × f × t + φ))`

### Interactive Controls
- Real-time frequency adjustment (0.1 - 10 Hz)
- Amplitude control (0.1 - 5.0)
- Instant waveform updates
- Mathematical equation display

### Visualization
- Time domain plotting using Chart.js
- Smooth, responsive graphs
- Clear axis labeling (Time vs Amplitude)
- Signal properties display (frequency, period, amplitude)

### UI/UX Features
- Modern, professional design
- Dark/Light mode toggle
- Responsive layout for desktop and mobile
- Interactive glowing effects
- Clean separation of controls and visualization

## 🛠️ Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Chart.js** - Dynamic chart rendering
- **Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ubhanuprasad/Signal-generator-visualizer.git
   cd Signal-generator-visualizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
signal-generator-visualizer/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Main page component
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   │   └── glowing-effect.tsx   # Interactive glowing border effect
│   ├── signal-generator.tsx     # Main signal generator component
│   └── glowing-effect-demo.tsx  # Demo showcase component
├── lib/                         # Utility functions
│   ├── utils.ts                 # Class name utilities
│   └── signal-generator.ts      # Signal generation mathematics
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## 🔧 Component Integration

### GlowingEffect Component

The project includes a sophisticated `GlowingEffect` component that provides interactive border animations:

**Location**: `components/ui/glowing-effect.tsx`

**Features**:
- Mouse-following gradient borders
- Configurable proximity detection
- Smooth animations using Motion
- Multiple visual variants
- Performance optimized with RAF

**Usage**:
```tsx
<GlowingEffect
  spread={40}
  glow={true}
  disabled={false}
  proximity={64}
  inactiveZone={0.01}
  borderWidth={3}
/>
```

### Signal Generator Mathematics

**Location**: `lib/signal-generator.ts`

The signal generation functions implement standard mathematical equations:

- **Sine Wave**: `A × sin(2π × f × t + φ)`
- **Cosine Wave**: `A × cos(2π × f × t + φ)`  
- **Square Wave**: `A × sign(sin(2π × f × t + φ))`

Where:
- `A` = Amplitude
- `f` = Frequency (Hz)
- `t` = Time (seconds)
- `φ` = Phase shift (radians)

## 📚 Academic Context

This project is designed for ECE students studying:

### Signals & Systems Concepts
- **Periodicity**: Understanding signal repetition patterns
- **Frequency Domain**: Relationship between time and frequency
- **Amplitude**: Signal strength and scaling
- **Phase Relationships**: Sine vs Cosine wave differences

### DSP Fundamentals
- **Sampling**: Digital representation of analog signals
- **Waveform Analysis**: Visual interpretation of signal characteristics
- **Signal Parameters**: Frequency, amplitude, and period relationships

## 🎨 Customization

### Adding New Signal Types

1. **Extend SignalType enum** in `lib/signal-generator.ts`:
   ```typescript
   export enum SignalType {
     SINE = 'sine',
     COSINE = 'cosine',
     SQUARE = 'square',
     TRIANGLE = 'triangle', // New signal type
   }
   ```

2. **Implement generation function**:
   ```typescript
   export function generateTriangleWave(params: SignalParameters): SignalData {
     // Implementation here
   }
   ```

3. **Update main generator function** to handle new type

### Styling Customization

The project uses Tailwind CSS with CSS variables for theming. Modify `app/globals.css` to customize colors:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96%;
  /* Add custom colors */
}
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: Single column layout
- **Tablet**: Adjusted grid spacing
- **Desktop**: Full two-column layout with sidebar controls

## 🌙 Dark Mode

Automatic dark mode support with:
- CSS variable-based theming
- Smooth transitions
- Chart.js theme adaptation
- Manual toggle control

## 🔍 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is created for educational purposes as part of ECE coursework.

## 🤝 Contributing

This is an academic project. For educational use and learning purposes.

---

**Built for Electronics and Communication Engineering Students**  
*Signals & Systems | Digital Signal Processing | Academic Excellence*

## 👨‍💻 Project Developer

**Developed by:** U Bhanu Prasad  
**Contact:** 9652442961  
**Project Type:** ECE Academic Project - Signal Generator & Visualizer
