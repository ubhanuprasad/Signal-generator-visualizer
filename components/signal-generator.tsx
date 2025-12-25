"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { generateSignal, SignalType, SignalParameters, SignalData } from '@/lib/signal-generator';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';
import { Zap, Settings, Moon, Sun } from 'lucide-react';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SignalGeneratorProps {
  className?: string;
}

export function SignalGenerator({ className }: SignalGeneratorProps) {
  // State for signal parameters
  const [signalType, setSignalType] = useState<SignalType>(SignalType.SINE);
  const [frequency, setFrequency] = useState<number>(2);
  const [amplitude, setAmplitude] = useState<number>(1);
  const [signalData, setSignalData] = useState<SignalData | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Generate signal data when parameters change
  const generateCurrentSignal = useCallback(() => {
    const params: SignalParameters = {
      frequency,
      amplitude,
      sampleRate: 1000,
      duration: 2
    };

    try {
      const data = generateSignal(signalType, params);
      setSignalData(data);
    } catch (error) {
      console.error('Error generating signal:', error);
    }
  }, [signalType, frequency, amplitude]);

  // Generate initial signal and update when parameters change
  useEffect(() => {
    generateCurrentSignal();
  }, [generateCurrentSignal]);

  // Chart configuration
  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: isDarkMode ? '#e5e7eb' : '#374151',
          font: {
            size: 12,
            family: 'Inter, sans-serif'
          }
        }
      },
      title: {
        display: true,
        text: `${signalType.charAt(0).toUpperCase() + signalType.slice(1)} Wave - Time Domain`,
        color: isDarkMode ? '#f9fafb' : '#111827',
        font: {
          size: 16,
          weight: 'bold',
          family: 'Inter, sans-serif'
        }
      },
      tooltip: {
        backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
        titleColor: isDarkMode ? '#f9fafb' : '#111827',
        bodyColor: isDarkMode ? '#e5e7eb' : '#374151',
        borderColor: isDarkMode ? '#374151' : '#d1d5db',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time (seconds)',
          color: isDarkMode ? '#e5e7eb' : '#374151',
          font: {
            size: 12,
            weight: 'bold',
            family: 'Inter, sans-serif'
          }
        },
        ticks: {
          color: isDarkMode ? '#9ca3af' : '#6b7280',
          font: {
            size: 10,
            family: 'Inter, sans-serif'
          }
        },
        grid: {
          color: isDarkMode ? '#374151' : '#e5e7eb',
          lineWidth: 0.5
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Amplitude',
          color: isDarkMode ? '#e5e7eb' : '#374151',
          font: {
            size: 12,
            weight: 'bold',
            family: 'Inter, sans-serif'
          }
        },
        ticks: {
          color: isDarkMode ? '#9ca3af' : '#6b7280',
          font: {
            size: 10,
            family: 'Inter, sans-serif'
          }
        },
        grid: {
          color: isDarkMode ? '#374151' : '#e5e7eb',
          lineWidth: 0.5
        }
      }
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 4
      },
      line: {
        borderWidth: 2,
        tension: 0
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  };

  // Chart data configuration
  const chartData = {
    labels: signalData?.time.map(t => t.toFixed(3)) || [],
    datasets: [
      {
        label: `${signalType.charAt(0).toUpperCase() + signalType.slice(1)} Wave`,
        data: signalData?.amplitude || [],
        borderColor: signalType === SignalType.SINE ? '#3b82f6' : 
                    signalType === SignalType.COSINE ? '#10b981' : '#f59e0b',
        backgroundColor: signalType === SignalType.SINE ? '#3b82f620' : 
                        signalType === SignalType.COSINE ? '#10b98120' : '#f59e0b20',
        fill: false,
      },
    ],
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-300",
      isDarkMode ? "bg-gray-900" : "bg-gray-50",
      className
    )}>
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Signal Generator & Visualizer</h1>
                <p className="text-sm text-muted-foreground">ECE Academic Project - Signals & Systems</p>
              </div>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg border border-border bg-background hover:bg-accent transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Control Panel */}
          <div className="lg:col-span-1">
            <div className="relative">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="relative bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-2 mb-6">
                  <Settings className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold text-card-foreground">Signal Parameters</h2>
                </div>

                <div className="space-y-6">
                  {/* Signal Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-3">
                      Signal Type
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.values(SignalType).map((type) => (
                        <button
                          key={type}
                          onClick={() => setSignalType(type)}
                          className={cn(
                            "p-3 rounded-lg border text-left transition-all duration-200",
                            signalType === type
                              ? "border-primary bg-primary/10 text-primary font-medium"
                              : "border-border bg-background hover:bg-accent text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {type.charAt(0).toUpperCase() + type.slice(1)} Wave
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Frequency Control */}
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Frequency: {frequency} Hz
                    </label>
                    <input
                      type="range"
                      min="0.1"
                      max="10"
                      step="0.1"
                      value={frequency}
                      onChange={(e) => setFrequency(parseFloat(e.target.value))}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0.1 Hz</span>
                      <span>10 Hz</span>
                    </div>
                  </div>

                  {/* Amplitude Control */}
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Amplitude: {amplitude}
                    </label>
                    <input
                      type="range"
                      min="0.1"
                      max="5"
                      step="0.1"
                      value={amplitude}
                      onChange={(e) => setAmplitude(parseFloat(e.target.value))}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0.1</span>
                      <span>5.0</span>
                    </div>
                  </div>

                  {/* Signal Equation Display */}
                  {signalData && (
                    <div className="p-4 bg-muted rounded-lg">
                      <h3 className="text-sm font-medium text-card-foreground mb-2">Mathematical Equation:</h3>
                      <code className="text-sm text-primary font-mono break-all">
                        {signalData.equation}
                      </code>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Visualization Panel */}
          <div className="lg:col-span-2">
            <div className="relative">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="relative bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="h-96 w-full">
                  {signalData && (
                    <Line data={chartData} options={chartOptions} />
                  )}
                </div>
              </div>
            </div>

            {/* Signal Properties */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-sm font-medium text-muted-foreground">Frequency</h3>
                <p className="text-2xl font-bold text-card-foreground">{frequency} Hz</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-sm font-medium text-muted-foreground">Period</h3>
                <p className="text-2xl font-bold text-card-foreground">{(1/frequency).toFixed(3)} s</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-sm font-medium text-muted-foreground">Amplitude</h3>
                <p className="text-2xl font-bold text-card-foreground">{amplitude}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}