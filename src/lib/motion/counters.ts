import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './prefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

/**
 * Sistema de contadores animados
 * Atributo: data-counter="número final"
 */
export function initCounters() {
  if (prefersReducedMotion()) {
    // Se reduced motion, mostrar valores finais imediatamente
    document.querySelectorAll('[data-counter]').forEach((el) => {
      const finalValue = el.getAttribute('data-counter') || '0';
      el.textContent = finalValue;
    });
    return;
  }

  const counters = document.querySelectorAll('[data-counter]');

  counters.forEach((counter) => {
    const finalValue = Number(counter.getAttribute('data-counter')) || 0;
    const duration = Number(counter.getAttribute('data-counter-duration')) || 2;

    const obj = { value: 0 };

    ScrollTrigger.create({
      trigger: counter,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(obj, {
          value: finalValue,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            counter.textContent = Math.floor(obj.value).toString();
          },
        });
      },
      once: true,
    });
  });
}

