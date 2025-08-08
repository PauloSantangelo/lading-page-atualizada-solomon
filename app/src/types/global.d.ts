// src/types/global.d.ts

// Declara que a função 'fbq' existe no objeto 'window'
interface Window {
  fbq?: (...args: any[]) => void;
}