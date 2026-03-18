'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const title = 'WELCOME ITZFIZZ';
const cards = [
  {
    value: '58%',
    label: 'Increase in pick up point use',
    className: 'left-[52%] top-[8%] bg-[#e4f85b] text-black sm:left-[52%] sm:top-[6%]'
  },
  {
    value: '27%',
    label: 'Increase in pick up point use',
    className: 'left-[63%] top-[26%] bg-[#373737] text-white sm:left-[73%] sm:top-[8%]'
  },
  {
    value: '23%',
    label: 'Decreased in customer phone calls',
    className: 'left-[13%] top-[72%] bg-[#88baf0] text-black sm:left-[40%]'
  },
  {
    value: '40%',
    label: 'Decreased in customer phone calls',
    className: 'left-[59%] top-[72%] bg-[#e48d58] text-[#2f2f2f] sm:left-[65%]'
  }
];

export default function Hero() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scene = rootRef.current;
      const car = scene.querySelector('[data-car]');
      const strip = scene.querySelector('[data-strip]');
      const titleReveal = scene.querySelector('[data-title-reveal]');
      const titleMask = scene.querySelector('[data-title-mask]');
      const cardsList = gsap.utils.toArray('[data-card]');

      gsap.set(car, { x: 0 });
      gsap.set(strip, { scaleX: 0, transformOrigin: 'left center' });
      gsap.set(titleReveal, { xPercent: 0 });
      gsap.set(titleMask, { width: '0%' });
      gsap.set(cardsList, {
        opacity: 0,
        y: 36,
        scale: 0.88
      });

      const cardWindows = [
        [0.12, 0.2],
        [0.24, 0.32],
        [0.36, 0.44],
        [0.48, 0.56]
      ];

      ScrollTrigger.create({
        trigger: scene,
        start: 'top top',
        end: '+=420%',
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const carTravel = window.innerWidth * 0.66;
          const stripScale = progress * 0.97;
          const revealPercent = `${stripScale * 100}%`;
          const titleShift = progress * -1.5;

          gsap.set(car, { x: carTravel * progress });
          gsap.set(strip, { scaleX: stripScale });
          gsap.set(titleMask, { width: revealPercent });
          gsap.set(titleReveal, { xPercent: titleShift });

          cardsList.forEach((card, index) => {
            const [start, end] = cardWindows[index];
            const local = gsap.utils.clamp(0, 1, (progress - start) / (end - start));
            const opacity = local <= 0 ? 0 : local < 0.55 ? 0.22 : 0.22 + ((local - 0.55) / 0.45) * 0.78;
            const y = 36 - local * 36;
            const scale = 0.88 + local * 0.12;

            gsap.set(card, {
              opacity,
              y,
              scale
            });
          });
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative min-h-screen overflow-hidden bg-[#d3d3d3]">
      <div className="relative h-screen w-full">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          <div className="relative h-[22vh] min-h-[170px] w-full overflow-hidden bg-[#1f1f1f]">
            <div
              className="absolute inset-y-0 left-0 w-full origin-left bg-[#81D787]"
              data-strip
              style={{ transform: 'scaleX(0)', willChange: 'transform' }}
            />

            <div
              className="absolute inset-y-0 left-0 z-10 overflow-hidden"
              data-title-mask
              style={{ width: '0%', willChange: 'width' }}
            >
              <div className="absolute inset-y-0 left-[6vw] flex items-center">
                <h1
                  data-title-reveal
                  className="whitespace-nowrap font-sans text-[18vw] font-bold uppercase leading-none tracking-[-0.06em] text-[#0a0a0a] sm:text-[14vw] lg:text-[11.3vw]"
                  style={{ willChange: 'transform' }}
                >
                  {title}
                </h1>
              </div>
            </div>

            <div className="absolute inset-y-0 left-[6vw] z-[9] flex items-center">
              <h1 className="whitespace-nowrap font-sans text-[18vw] font-bold uppercase leading-none tracking-[-0.06em] text-[#1f1f1f] sm:text-[14vw] lg:text-[11.3vw]">
                {title}
              </h1>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute left-[max(0.25rem,0.8vw)] top-1/2 z-20 h-[30vh] min-h-[220px] w-[46vw] min-w-[340px]"
          style={{ transform: 'translateY(-50%)' }}
        >
          <div data-car className="relative h-full w-full" style={{ willChange: 'transform' }}>
            <Image
              src="/Screenshot_2026-03-18_072300-removebg-preview.png"
              alt="Orange sports car"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        <div className="absolute inset-0 z-30">
          {cards.map((card) => (
            <article
              key={card.value}
              data-card
              className={`absolute w-[8.75rem] rounded-[14px] p-4 opacity-0 shadow-[0_10px_24px_rgba(0,0,0,0.08)] sm:w-[17.5rem] sm:rounded-[20px] sm:p-6 ${card.className}`}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="font-sans text-[2.5rem] font-bold leading-none tracking-[-0.06em] sm:text-[4.35rem]">
                {card.value}
              </div>
              <p className="mt-2 max-w-[14ch] font-sans text-[0.68rem] font-normal leading-4 sm:mt-4 sm:max-w-[15ch] sm:text-[0.9rem] sm:leading-6">
                {card.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
