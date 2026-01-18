import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './prefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

/**
 * Sistema de efeito parallax
 * Atributo: data-parallax="velocidade" (ex: 0.5 = mais lento, 1.5 = mais rápido)
 */
export function initParallax() {
  if (prefersReducedMotion()) {
    return; // Desabilitar parallax em reduced motion
  }

  const parallaxElements = document.querySelectorAll('[data-parallax]');

  parallaxElements.forEach((element) => {
    const speed = Number(element.getAttribute('data-parallax')) || 0.5;

    gsap.to(element, {
      yPercent: speed * -50,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}

