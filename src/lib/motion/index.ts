import { initReveal } from './reveal';
import { initCounters } from './counters';
import { initParallax } from './parallax';

/**
 * Inicializa todos os sistemas de motion
 * Deve ser chamado apenas no client-side
 */
export function initMotion() {
  if (typeof window === 'undefined') return;

  // Aguardar DOM estar pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initReveal();
      initCounters();
      initParallax();
    });
  } else {
    initReveal();
    initCounters();
    initParallax();
  }
}

