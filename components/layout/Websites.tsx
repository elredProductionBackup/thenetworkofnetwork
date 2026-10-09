'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface TitlePart {
  text: string;
  color: string;
}

interface CardData {
  id: string;
  bgImage: string;
  title: TitlePart[];
  titleMultiline?: boolean;
  titleSize?: string;
  description: string;
  descriptionColor?: string;
  overlayGradient: string;
  alignment: 'justify-start' | 'justify-end';
  border?: string;
  innerImage?: string;
  hasArrow?: boolean;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
}

const CARDS_DATA: CardData[] = [
  {
    id: 'prive',
    bgImage: '/asset/card1bg.png',
    logo: '/asset/logo/prive.svg',
    title: [{ text: 'Privé', color: 'text-[#C01823]' }],
    titleSize: 'text-[52px]',
    description: 'a private ecosystem for UHNI owners and individuals with disproportionate future impact',
    overlayGradient: 'linear-gradient(218.56deg, rgba(0, 0, 0, 0.5) 2.02%, rgba(63, 63, 63, 0.5) 29.07%, rgba(222, 222, 222, 0.5) 97.2%)',
    alignment: 'justify-end',
    hasArrow: true,
    logoWidth: 126,
    logoHeight: 40,
  },
  {
    id: 'smart-network',
    bgImage: '/asset/card3bg.png',
    logo: '/asset/logo/smart-networks.svg',
    title: [
      { text: 'Smart', color: 'text-[#C01823]' },
      { text: 'Networks', color: 'text-[#656A6B]' }
    ],
    titleMultiline: true,
    titleSize: 'text-[35px]',
    description: 'a smart tool built for network leadership and management, it simplifies everything a network  requires',
    overlayGradient: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
    alignment: 'justify-start',
    border: '0.5px solid rgba(182, 182, 182, 1)',
    innerImage: '/images/smart-networks.png',
    logoWidth: 160,
    logoHeight: 63,
  },
  {
    id: 'thenetwork',
    bgImage: '/asset/thenetworkscard.png',
    logo: '/asset/theNetwork.svg',
    logoWidth: 220,
    logoHeight: 31,
    description: 'an app for network members',
    overlayGradient: 'linear-gradient(111.12deg, rgba(0, 0, 0, 0.7) 41.4%, rgba(66, 64, 64, 0.7) 98.48%)',
    alignment: 'justify-start',
    title: []
  }
];

const WebsiteCard = ({
  card,
  onClick
}: {
  card: CardData;
  onClick: (id: string) => void;
}) => {

  return (
    <div className={`relative overflow-hidden h-[360px] md:h-full p-[20px] md:p-[40px] rounded-[32px] flex flex-col ${card.alignment} cursor-pointer max-h-[550px]`}
      style={{
        backgroundImage: `${card.overlayGradient ? `${card.overlayGradient},` : ''
          } url('${card.bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: card.border
      }} onClick={() => onClick(card.id)}
    >
      {/* <div
        className="absolute inset-0"
        style={{ background: card.overlayGradient }}
      /> */}

      {card.hasArrow && (
        <div className="absolute top-[30px] right-[30px] z-20 w-[36px] h-[36px] rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
          <Image
            src="/asset/arrow.svg"
            alt="Link Arrow"
            width={14}
            height={14}
            className="object-contain"
          />
        </div>
      )}

      <div className={`relative z-10 flex flex-col gap-[20px] h-full ${card.alignment}`}>
        <div className="flex flex-col gap-[16px]">
          {card.logo ? (
            <div className="relative  w-fit">
              <Image
                src={card.logo}
                alt="Card Logo"
                width={card.logoWidth || 180}
                height={card.logoHeight || 30}
                className="object-contain object-left"
              />
            </div>
          ) : (
            <h2 className={`font-extrabold leading-[110%] tracking-[-0.46px] font-['Mencken_Std'] ${card.titleSize || 'text-[35px]'}`}>
              {card.title.map((part, index) => (
                <React.Fragment key={index}>
                  <span className={part.color}>{part.text}</span>
                  {card.titleMultiline && index < card.title.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
          )}

          <p className={`font-inter font-[600] text-[16px] md:text-[24px] leading-[1.4] md:leading-[1.2] tracking-[-0.5px] md:tracking-[-1.46px] whitespace-pre-line ${card.descriptionColor || 'text-white'}`}>
            {card.description}
          </p>
        </div>

        {card.innerImage && (
          <div className="mt-[20px] flex-1 relative min-h-[392px] h-[551px]">
            <div className="absolute inset-0 rounded-[11px] overflow-hidden">

              <Image
                src={card.innerImage}
                alt="Card Internal Content"
                fill
                className="object-contain object-top -translate-y-[5px]"
              />

              {/* ✅ Linear gradient overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1))]" />

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Websites = () => {
  const upperCards = CARDS_DATA.slice(0, 1);
  const lowerCards = CARDS_DATA.slice(1, 3);
  const [showPopup, setShowPopup] = useState(false);
  const [showSmartPopup, setShowSmartPopup] = useState(false);

  const handleCardClick = (id: string) => {
    if (id === "prive") {
      window.open("https://theprive.network", "_blank");
    } else if (id === "thenetwork") {
      setShowPopup(true);
    }
  };
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
        {/* 🔥 TOP ROW (2/5 / 3/5) */}
        {/* <div className="grid grid-cols-[4fr_5fr] gap-[30px] h-[460px]">
          {upperCards.map(card => (
            <WebsiteCard
              key={card.id}
              card={card}
              onClick={handleCardClick}
            />
          ))}
        </div> */}
        <div className="grid grid-cols-1 gap-[30px] min-h-[360px] md:min-h-[460px]">
          {upperCards.map(card => (
            <WebsiteCard
              key={card.id}
              card={card}
              onClick={handleCardClick}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[5fr_4fr] gap-[24px] min-h-[360px] md:min-h-[550px] ">
          {lowerCards.map(card => (
            <WebsiteCard
              key={card.id}
              card={card}
              onClick={handleCardClick}
            />
          ))}
        </div>

        <div
          className="w-full h-[310px] mx-auto rounded-[30px] relative overflow-hidden flex flex-col items-center justify-center text-center group cursor-pointer"
          style={{
            backgroundImage: "url('/asset/card5bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
            onClick={() => setShowSmartPopup(true)}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 w-full max-w-[1080px] flex flex-col items-center justify-center">
            <div className="text-left flex flex-col gap-4 items-center">
              <h2 className="text-[32px] leading-[1.1] w-fit font-['Mencken_Std'] font-extrabold">
                <span className="text-[#656A6B] block">Smart</span>
                <span className="text-[#C01823] block">Services</span>
              </h2>
              <p className="text-white font-inter text-[16px] md:text-[24px] font-semibold leading-[140%] md:leading-[120%] tracking-[-0.5px] md:tracking-[-1.46px]">
                backend team to support networks
              </p>
            </div>
          </div>
        </div>

      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm text-center shadow-xl">
            <h2 className="text-lg font-semibold mb-2 text-black">
              Website Redesign is Underway
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              We’re currently improving the experience. Please check back soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-black text-white rounded-md cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showSmartPopup && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-8 max-w-sm text-center shadow-xl">
      <h2 className="text-lg font-semibold mb-2 text-black">
        Smart Services – Coming Soon
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        We're building something powerful to support networks behind the scenes. Stay tuned.
      </p>
      <button
        onClick={() => setShowSmartPopup(false)}
        className="px-4 py-2 bg-black text-white rounded-md cursor-pointer"
      >
        Close
      </button>
    </div>
  </div>
)}
    </section>
  );
};

export default Websites;