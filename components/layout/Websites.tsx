import React from 'react';

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
}

const CARDS_DATA: CardData[] = [
  {
    id: 'prive',
    bgImage: '/asset/card1bg.png',
    title: [{ text: 'Prive', color: 'text-[#C01823]' }],
    titleSize: 'text-[52px]',
    description: 'A very private network for UHNI owners & founders, operationally Involved, ambitious, restless & eager to learn. Learn. Solve. Lead',
    descriptionColor: 'text-[#E4BEBA]',
    overlayGradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(19, 19, 20, 0) 100%)',
    alignment: 'justify-start',
  },
  {
    id: 'csuite',
    bgImage: '/asset/card2bg.png',
    title: [
      { text: 'CSuite', color: 'text-[#C01823]' },
      { text: 'Network', color: 'text-[#656A6B]' }
    ],
    titleMultiline: true,
    titleSize: 'text-[35px]',
    description: 'A private network for ambitious professionals who are coming together to learn & solve problems',
    descriptionColor: 'text-[#E4BEBA]',
    overlayGradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(19, 19, 20, 0) 100%)',
    alignment: 'justify-start',
  },
  {
    id: 'smart-network',
    bgImage: '/asset/Frame 5.png',
    title: [
      { text: 'Smart', color: 'text-[#C01823]' },
      { text: 'Network', color: 'text-[#656A6B]' }
    ],
    titleMultiline: true,
    titleSize: 'text-[35px]',
    description: 'Built for chapter leadership and management, it simplifies everything a chapter management required.',
    descriptionColor: 'text-[#E4BEBA]',
    overlayGradient: 'linear-gradient(111.12deg, rgba(0, 0, 0, 0.7) 41.4%, rgba(66, 64, 64, 0.7) 98.48%)',
    alignment: 'justify-start',
  },
  {
    id: 'thenetwork',
    bgImage: '/asset/thenetworkscard.png',
    title: [
      { text: 'the', color: 'text-[#656A6B]' },
      { text: 'Network', color: 'text-[#C01823]' }
    ],
    titleMultiline: false,
    titleSize: 'text-[35px]',
    description: 'A Collaboration platform for Network members.',
    descriptionColor: 'text-[#E4BEBA]',
    overlayGradient: 'linear-gradient(111.12deg, rgba(0, 0, 0, 0.7) 41.4%, rgba(66, 64, 64, 0.7) 98.48%)',
    alignment: 'justify-end',
  }
];

const WebsiteCard = ({ card }: { card: CardData }) => {
  return (
    <div
      className={`relative overflow-hidden h-full p-[40px] rounded-[32px] flex flex-col ${card.alignment}`}
      style={{
        backgroundImage: `linear-gradient(180deg, #131314 0%, rgba(19, 19, 20, 0.4) 50%, rgba(19, 19, 20, 0) 100%), url('${card.bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: card.overlayGradient }}
      />

      <div className="relative z-10 flex flex-col gap-[16px]">
        <h2 className={`font-extrabold leading-[110%] tracking-[-0.46px] font-['Mencken_Std'] ${card.titleSize || 'text-[35px]'}`}>
          {card.title.map((part, index) => (
            <React.Fragment key={index}>
              <span className={part.color}>{part.text}</span>
              {card.titleMultiline && index < card.title.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>

        <p className={`font-inter text-[16px] leading-[1.6] ${card.descriptionColor || 'text-[#E4BEBA]'}`}>
          {card.description}
        </p>
      </div>
    </div>
  );
};

const Websites = () => {
  const upperCards = CARDS_DATA.slice(0, 2);
  const lowerCards = CARDS_DATA.slice(2, 4);

  return (
    <section className="relative w-full py-[128px] px-[32px] overflow-hidden">
      
      {/* Background */}
      {/* <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ 
          background: 'radial-gradient(225.8% 51.27% at 50% 50%, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0) 70%)' 
        }}
      /> */}

      <div className="max-w-[1536px] mx-auto w-full flex flex-col gap-[24px] relative z-10">

        {/* 🔥 TOP ROW (1.5 / 1) */}
        <div className="grid grid-cols-[1.5fr_1fr] gap-[24px] h-[624px]">
          {upperCards.map(card => (
            <WebsiteCard key={card.id} card={card} />
          ))}
        </div>

        {/* 🔥 BOTTOM ROW (1 / 1) */}
        <div className="grid grid-cols-2 gap-[24px] h-[624px]">
          {lowerCards.map(card => (
            <WebsiteCard key={card.id} card={card} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Websites;