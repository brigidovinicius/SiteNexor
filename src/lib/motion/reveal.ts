import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './prefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

/**
 * Sistema de revelação de elementos ao fazer scroll
 * Suporta: fade-up, fade-in, stagger
 */
export function initReveal() {
  if (prefersReducedMotion()) {
    // Se reduced motion, apenas mostrar elementos
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('revealed');
    });
    return;
  }

  const reveals = document.querySelectorAll('[data-reveal]');

  reveals.forEach((element) => {
    const revealType = element.getAttribute('data-reveal') || 'fade-up';
    const delay = Number(element.getAttribute('data-reveal-delay')) || 0;

    let fromProps: gsap.TweenVars = { opacity: 0 };
    
    switch (revealType) {
      case 'fade-up':
        fromProps.y = 24;
        break;
      case 'fade-in':
        // Apenas fade, sem movimento Y
        break;
      default:
        fromProps.y = 20;
    }

    gsap.fromTo(
      element,
      fromProps,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: delay / 1000,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // Suporte para stagger em containers
  const staggerContainers = document.querySelectorAll('[data-reveal-stagger]');
  staggerContainers.forEach((container) => {
    const children = container.querySelectorAll('[data-reveal]');
    if (children.length > 0) {
      gsap.fromTo(
        children,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  });
}

