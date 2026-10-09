'use client'
import React from 'react';
import Image from 'next/image';

const CARDS = [
  { id: 'prive', background: "url('/images/privebg.png') center / cover", dotted: false, overlay: '#00000080', logo: '/images/privelogo.svg', logoWidth: 112, logoHeight: 36, text: 'Privé is an enterprise network designed to elevate good teams into great ones.', tagline: undefined, textMaxWidth: 'max-w-[960px]', link: 'https://www.theprive.network/home/' },
  { id: 'tpn', background: 'radial-gradient(ellipse 55% 75% at 100% 100%, rgba(192, 24, 35, 0.7) 0%, rgba(192, 24, 35, 0) 100%), #18161A', dotted: true, overlay: undefined, logo: '/images/tpnlogo.svg', logoWidth: 293, logoHeight: 60, text: 'a network for ambitious professionals who are keen to learn from the best academic minds of the world', tagline: { text: 'Learn. Stay ahead.', highlight: 'Actionable intelligence' }, textMaxWidth: 'max-w-[720px]', link: 'https://www.theprofessionals.network/' },
];

const Websites = () => {
  return (
    <section className="relative w-full pt-0 pb-[100px] px-[20px] overflow-hidden">

      {/* Background */}
      {/* <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ 
          background: 'radial-gradient(225.8% 51.27% at 50% 50%, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0) 70%)' 
        }}
      /> */}

      <div className="max-w-[1536px] mx-auto w-full flex flex-col gap-[24px] relative z-10">
        <div className="content-block w-full md:w-[1080px]  md:px-0 mx-auto flex flex-col justify-center gap-6 text-[#333333] font-inter mb-16 text-center">

          <p className="text-[14px] md:text-[22px] font-medium leading-[1.4]">
            There are thousands of networks today; social, professional, charitable, and more. Yet most underutilise their greatest asset:
            <span className="font-extrabold italic"> the intelligence and lived experience of their own members.</span>
          </p>

          <p className="text-[14px] md:text-[22px] font-medium leading-[1.4]">
            While many networks focus heavily on events and programming, few systematically unlock the
            <span className="font-extrabold italic"> compounding value that exists within the membership itself.</span>
          </p>

          <p className="text-[14px] md:text-[22px] font-medium leading-[1.4]">
            Our belief is simple:
            <span className="font-extrabold italic"> The future of high value networks lies not in more activity, but in deeper, more intelligent member-to-member value creation.</span>
          </p>

          <p className="text-[14px] md:text-[22px] font-medium leading-[1.4]">
            We are building the world’s most intelligent learning and collaboration ecosystem, one where insight, experience, and access are intentionally activated so that
            <span className="font-extrabold italic"> member intelligence compounds over time.</span>
          </p>

          <p className="text-[14px] md:text-[22px] font-medium leading-[1.4]">
            Our approach focuses on carefully curated networks, each designed to deliver unique value to its members and, critically, to each other through structured initiatives, high trust interactions, and thoughtfully deployed AI tools.
          </p>

        </div>

        <div className="flex flex-col items-center gap-[30px]">
          {CARDS.map(card => (
            <div
              key={card.id}
              className="w-full max-w-[1280px] h-[380px] md:h-[400px] rounded-[24px] md:rounded-[30px] overflow-hidden opacity-100 relative"
              style={{ background: card.background }}
            >
              {card.overlay && (
                <div className="absolute inset-0" style={{ background: card.overlay }} />
              )}
              {card.dotted && (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
                    backgroundSize: '22px 22px',
                  }}
                />
              )}
              <Image
                src={card.logo}
                alt={`${card.id} logo`}
                width={card.logoWidth}
                height={card.logoHeight}
                className="absolute top-[20px] left-[20px] md:top-[30px] md:left-[30px] z-10 object-contain w-auto h-[22px] md:h-auto max-w-[60%] md:max-w-none"
              />
              {card.tagline ? (
                <div className={`absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 z-10 ${card.textMaxWidth} px-[20px] flex flex-col items-center gap-[20px] md:gap-[40px]`}>
                  <p className="text-white text-center font-['Mencken_Std'] font-normal not-italic text-[22px] md:text-[40px] leading-[120%] tracking-[0px]">
                    {card.text}
                  </p>
                  <p className="text-white text-center font-inter text-[13px] md:text-[24px] leading-[140%] md:leading-[120%] md:whitespace-nowrap">
                    {card.tagline.text}{' '}
                    <span className="inline-block ml-[4px] md:ml-[8px] bg-[#C01823] font-semibold px-[6px] py-[2px] md:px-[12px] md:py-[4px]">{card.tagline.highlight}</span>
                  </p>
                </div>
              ) : (
                <p className={`absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-[180px] z-10 ${card.textMaxWidth} px-[20px] text-white text-center font-['Mencken_Std'] font-normal not-italic text-[22px] md:text-[40px] leading-[120%] tracking-[0px]`}>
                  {card.text}
                </p>
              )}
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${card.id} website`}
                className={`absolute top-[14px] right-[14px] md:top-[30px] md:right-[30px] z-20 w-[28px] h-[28px] md:w-[36px] md:h-[36px] rounded-full flex items-center justify-center ${card.dotted ? 'bg-[#2A272C] border border-white/20' : 'bg-white/30 backdrop-blur-sm'}`}>
                <Image
                  src="/asset/arrow.svg"
                  alt="Link Arrow"
                  width={14}
                  height={14}
                  className="object-contain w-[11px] h-[11px] md:w-[14px] md:h-[14px]"
                />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Websites;
