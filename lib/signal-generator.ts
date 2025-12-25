/**
 * Signal Generator Utility Functions
 * For Electronics and Communication Engineering (ECE) Academic Project
 * 
 * This module contains mathematical functions for generating fundamental signals
 * used in Signals & Systems and Digital Signal Processing (DSP)
 */

export interface SignalParameters {
  frequency: number;    // Frequency in Hz
  amplitude: number;    // Signal amplitude
  phase?: number;       // Phase shift in radians (optional)
  sampleRate?: number;  // Sampling rate in Hz (default: 1000)
  duration?: number;    // Signal duration in seconds (default: 2)
}

export interface SignalData {
  time: number[];       // Time axis data
  amplitude: number[];  // Amplitude values
  equation: string;     // Mathematical equation
}

/**
 * Generates a sine wave signal
 * Mathematical equation: A * sin(2π * f * t + φ)
 * 
 * @param params - Signal parameters
 * @returns Signal data with time and amplitude arrays
 */
export function generateSineWave(params: SignalParameters): SignalData {
  const {
    frequency,
    amplitude,
    phase = 0,
    sampleRate = 1000,
    duration = 2
  } = params;

  const samples = Math.floor(sampleRate * duration);
  const time: number[] = [];
  const amplitudeData: number[] = [];

  // Generate time axis and calculate sine wave values
  for (let i = 0; i < samples; i++) {
    const t = i / sampleRate;
    time.push(t);
    
    // Sine wave equation: A * sin(2π * f * t + φ)
    const value = amplitude * Math.sin(2 * Math.PI * frequency * t + phase);
    amplitudeData.push(value);
  }

  const equation = `${amplitude} × sin(2π × ${frequency} × t${phase !== 0 ? ` + ${phase.toFixed(2)}` : ''})`;

  return {
    time,
    amplitude: amplitudeData,
    equation
  };
}

/**
 * Generates a cosine wave signal
 * Mathematical equation: A * cos(2π * f * t + φ)
 * 
 * @param params - Signal parameters
 * @returns Signal data with time and amplitude arrays
 */
export function generateCosineWave(params: SignalParameters): SignalData {
  const {
    frequency,
    amplitude,
    phase = 0,
    sampleRate = 1000,
    duration = 2
  } = params;

  const samples = Math.floor(sampleRate * duration);
  const time: number[] = [];
  const amplitudeData: number[] = [];

  // Generate time axis and calculate cosine wave values
  for (let i = 0; i < samples; i++) {
    const t = i / sampleRate;
    time.push(t);
    
    // Cosine wave equation: A * cos(2π * f * t + φ)
    const value = amplitude * Math.cos(2 * Math.PI * frequency * t + phase);
    amplitudeData.push(value);
  }

  const equation = `${amplitude} × cos(2π × ${frequency} × t${phase !== 0 ? ` + ${phase.toFixed(2)}` : ''})`;

  return {
    time,
    amplitude: amplitudeData,
    equation
  };
}

/**
 * Generates a square wave signal
 * Mathematical equation: A * sign(sin(2π * f * t + φ))
 * 
 * @param params - Signal parameters
 * @returns Signal data with time and amplitude arrays
 */
export function generateSquareWave(params: SignalParameters): SignalData {
  const {
    frequency,
    amplitude,
    phase = 0,
    sampleRate = 1000,
    duration = 2
  } = params;

  const samples = Math.floor(sampleRate * duration);
  const time: number[] = [];
  const amplitudeData: number[] = [];

  // Generate time axis and calculate square wave values
  for (let i = 0; i < samples; i++) {
    const t = i / sampleRate;
    time.push(t);
    
    // Square wave equation: A * sign(sin(2π * f * t + φ))
    const sineValue = Math.sin(2 * Math.PI * frequency * t + phase);
    const value = amplitude * Math.sign(sineValue);
    amplitudeData.push(value);
  }

  const equation = `${amplitude} × sign(sin(2π × ${frequency} × t${phase !== 0 ? ` + ${phase.toFixed(2)}` : ''}))`;

  return {
    time,
    amplitude: amplitudeData,
    equation
  };
}

/**
 * Signal type enumeration for easy reference
 */
export enum SignalType {
  SINE = 'sine',
  COSINE = 'cosine',
  SQUARE = 'square'
}

/**
 * Main signal generator function that routes to appropriate generator
 * 
 * @param type - Type of signal to generate
 * @param params - Signal parameters
 * @returns Signal data
 */
export function generateSignal(type: SignalType, params: SignalParameters): SignalData {
  switch (type) {
    case SignalType.SINE:
      return generateSineWave(params);
    case SignalType.COSINE:
      return generateCosineWave(params);
    case SignalType.SQUARE:
      return generateSquareWave(params);
    default:
      throw new Error(`Unsupported signal type: ${type}`);
  }
}