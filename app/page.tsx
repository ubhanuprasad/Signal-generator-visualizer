import { SignalGenerator } from '@/components/signal-generator'
import { GlowingEffectDemo } from '@/components/glowing-effect-demo'

export default function Home() {
  return (
    <main>
      {/* Main Signal Generator Application */}
      <SignalGenerator />
      
      {/* Demo Section for GlowingEffect Component */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Interactive Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the advanced UI components and interactive elements that make this 
              signal generator perfect for academic demonstrations and learning.
            </p>
          </div>
          <GlowingEffectDemo />
        </div>
      </section>
    </main>
  )
}