// "use client";

// import { useState, useEffect } from "react"; // useEffect add kiya
// import Image from "next/image";

// export default function SummaryPlatforms() {
//     const [isOpen, setIsOpen] = useState(false);

//     // --- BACKGROUND SCROLL LOCK LOGIC ---
//     useEffect(() => {
//         if (isOpen) {
//             // Jab popup khulega, body scroll lock ho jayega
//             document.body.style.overflow = "hidden";
//         } else {
//             // Jab popup band hoga, scroll wapas normal ho jayega
//             document.body.style.overflow = "unset";
//         }

//         // Cleanup function: Agar component unmount ho jaye toh scroll wapas aa jaye
//         return () => {
//             document.body.style.overflow = "unset";
//         };
//     }, [isOpen]);

//     const toggleModal = () => setIsOpen(!isOpen);

//     return (
//         <section className="relative w-full flex flex-col items-center justify-center px-4 md:px-10 py-[60px] md:min-h-screen bg-[#f9f7f2]">

//             <h2 className="text-[30px] md:text-[48px] font-cardo font-regular text-center mb-10 md:mb-16 leading-tight text-black">
//                 Summary of Sapiens by <br className="md:hidden" /> these platforms
//             </h2>

//             {/* Cards */}
//             <div className="flex flex-row gap-4 md:gap-16">
//                 {/* Card 1 (ChatGPT) */}
//                 <div className="w-[160px] md:w-[320px]">
//                     <div className="relative h-[115px] md:h-[230px] overflow-hidden">
//                         <Image src="/chatgpt.jpg" alt="ChatGPT" fill className="object-cover" />
//                     </div>
//                     <div className="bg-[#fff] flex items-center justify-between px-3 md:px-6 h-[40px] md:h-[63px] border-l border-r border-[#F4EADB]">
//                         <span className="text-[12px] md:text-[19px] font-nunito font-semibold text-black">More on this</span>
//                         <div className="w-6 h-6 md:w-10 md:h-10 bg-[#6f7b63] rounded-full flex items-center justify-center text-white cursor-pointer">
//                             <Image src={'/openArrow.svg'} alt="open" width={14} height={14} className="md:w-[26px] md:h-[26px]" />
//                         </div>
//                     </div>
//                     <div className="h-[6px] md:h-[10px] bg-[#F4EADB] mx-2 md:mx-4"></div>
//                 </div>

//                 {/* Card 2 (Claude) */}
//                 <div className="w-[160px] md:w-[320px] cursor-pointer group" onClick={toggleModal}>
//                     <div className="relative h-[115px] md:h-[230px] overflow-hidden">
//                         <Image src="/claude.png" alt="Claude" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
//                     </div>
//                     <div className="bg-[#fff] flex items-center justify-between px-3 md:px-6 h-[40px] md:h-[63px] border-l border-r border-[#F4EADB]">
//                         <span className="text-[12px] md:text-[19px] font-nunito font-semibold text-black">More on this</span>
//                         <div className="w-6 h-6 md:w-10 md:h-10 bg-[#6f7b63] rounded-full flex items-center justify-center text-white">
//                             <Image src={'/openArrow.svg'} alt="open" width={14} height={14} className="md:w-[26px] md:h-[26px]" />
//                         </div>
//                     </div>
//                     <div className="h-[6px] md:h-[10px] bg-[#F4EADB] mx-2 md:mx-4"></div>
//                 </div>
//             </div>

//             {/* --- MODAL --- */}
//             {isOpen && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">

//                     <div
//                         className="relative w-full max-w-[750px] max-h-[85vh] bg-white rounded-[40px] shadow-2xl flex flex-col overflow-hidden"
//                         onClick={(e) => e.stopPropagation()}
//                     >

//                         {/* FIXED HEADER */}
//                         <div className="sticky top-0 bg-white z-20 px-8 md:px-14 pt-8 md:pt-14 pb-4 flex justify-between items-start">
//                             <div>
//                                 <h3 className="text-3xl md:text-4xl font-bold text-black mb-1">Claude</h3>
//                                 <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-tight">
//                                     Key Insights from "Sapiens" on Human Tribal Nature
//                                 </p>
//                             </div>

//                             <button
//                                 onClick={toggleModal}
//                                 className="text-gray-400 hover:text-black transition-colors shrink-0"
//                             >
//                                 <div className="bg-gray-100 rounded-full p-1.5">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                         <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                                     </svg>
//                                 </div>
//                             </button>
//                         </div>

//                         {/* 2. SCROLLABLE CONTENT BODY */}
//                         <div className="overflow-y-auto px-8 md:px-14 pb-14 space-y-8 font-sans custom-scrollbar">

//                             {/* Introduction */}
//                             <p className="text-gray-500 text-sm md:text-base leading-relaxed pt-2">
//                                 <span className="font-bold text-gray-700">Yuval Noah Harari</span> explores the deeply tribal nature of humans throughout "Sapiens." Here are some key concepts and paraphrased insights from the book:
//                             </p>

//                             {/* Section 1 */}
//                             <div className="space-y-3">
//                                 <h4 className="text-lg md:text-xl font-bold text-gray-900">The Cognitive Revolution and Group Cooperation</h4>
//                                 <p className="text-gray-500 text-sm md:text-base leading-relaxed">
//                                     Harari argues that humans' ability to cooperate in large numbers stems from our capacity to believe in shared myths and stories. He discusses how:
//                                 </p>
//                                 <ul className="list-disc ml-6 space-y-2 text-gray-500 text-sm md:text-base">
//                                     <li>Humans can only maintain stable social relationships with about 150 people (Dunbar's number)</li>
//                                     <li>Larger cooperation requires shared beliefs in abstract concepts like nations, religions, or corporations</li>
//                                     <li>These "imagined orders" allow strangers to work together effectively</li>
//                                 </ul>
//                             </div>

//                             {/* Section 2 */}
//                             <div className="space-y-3">
//                                 <h4 className="text-lg md:text-xl font-bold text-gray-900">In-Group vs. Out-Group Dynamics</h4>
//                                 <p className="text-gray-500 text-sm md:text-base leading-relaxed">
//                                     The book explores how humans naturally form tribal identities:
//                                 </p>
//                                 <ul className="list-disc ml-6 space-y-2 text-gray-500 text-sm md:text-base">
//                                     <li>We tend to trust and cooperate more readily with those we perceive as part of our group</li>
//                                     <li>Historical conflicts often stem from competing tribal identities scaled up to larger societies</li>
//                                     <li>Modern nationalism, religious movements, and political parties reflect ancient tribal instincts</li>
//                                 </ul>
//                             </div>

//                             {/* Section 3 */}
//                             <div className="space-y-3">
//                                 <h4 className="text-lg md:text-xl font-bold text-gray-900">The Role of Gossip and Social Bonds</h4>
//                                 <p className="text-gray-500 text-sm md:text-base leading-relaxed">
//                                     Harari emphasizes that:
//                                 </p>
//                                 <ul className="list-disc ml-6 space-y-2 text-gray-500 text-sm md:text-base">
//                                     <li>Language evolved partly to enable social bonding through gossip</li>
//                                     <li>Sharing information about group members helped maintain social cohesion</li>
//                                     <li>This created the foundation for larger social cooperation</li>
//                                 </ul>
//                             </div>

//                             {/* Section 4 */}
//                             <div className="space-y-3">
//                                 <h4 className="text-lg md:text-xl font-bold text-gray-900">Modern Implications</h4>
//                                 <p className="text-gray-500 text-sm md:text-base leading-relaxed">
//                                     The book suggests that despite our technological advancement:
//                                 </p>
//                                 <ul className="list-disc ml-6 space-y-2 text-gray-500 text-sm md:text-base">
//                                     <li>We still operate with tribal psychology designed for small hunter-gatherer groups</li>
//                                     <li>Many contemporary problems stem from this mismatch between ancient instincts and modern realities</li>
//                                     <li>Understanding our tribal nature is crucial for addressing global challenges</li>
//                                 </ul>
//                             </div>

//                             {/* Footer Text */}
//                             <p className="text-gray-400 text-xs md:text-sm pt-4 leading-relaxed italic border-t border-gray-100 mt-4">
//                                 These themes run throughout the book as Harari examines how human cooperation evolved from small bands to global civilizations, while our underlying psychology remained fundamentally tribal.
//                             </p>

//                         </div>
//                     </div>

//                     <div className="absolute inset-0 -z-10" onClick={toggleModal}></div>
//                 </div>
//             )}

//             <style jsx global>{`
//         .custom-scrollbar::-webkit-scrollbar { width: 6px; }
//         .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
//       `}</style>
//         </section>
//     );
// }
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import ChatGPTContent from "./ChatGPTContent";
import ClaudeContent from "./ClaudeContent";

type ModalType = "chatgpt" | "claude" | null;

export default function SummaryPlatforms() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <section className="relative w-full flex flex-col items-center justify-center px-4 md:px-10 py-[80px] pb-[40px]">
            
      <h2 className=" text-[32px] md:text-[48px] leading-[120%] tracking-tight text-center text-black mb-12 md:mb-16  font-mencken-regular">
        Summary of Sapiens by <br className="md:hidden" /> these platforms
      </h2>

      <div className="flex flex-row gap-4 md:gap-16">
        {/* ChatGPT Card */}
        <PlatformCard 
          image="/images/ChatGPT.png" 
          onClick={() => setActiveModal("chatgpt")} 
        />

        {/* Claude Card */}
        <PlatformCard 
          image="/images/Claudee.png" 
          onClick={() => setActiveModal("claude")} 
        />
      </div>

      {/* MODALS */}
      <Modal 
        isOpen={activeModal === "chatgpt"} 
        onClose={closeModal} 
        title="Chat GPT"
      >
        <ChatGPTContent />
      </Modal>

      <Modal 
        isOpen={activeModal === "claude"} 
        onClose={closeModal} 
        title="Claude"
      >
        <ClaudeContent />
      </Modal>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: #e5e7eb; 
          border-radius: 10px; 
        }
      `}</style>
    </section>
  );
}

// ✅ Typed Props
type PlatformCardProps = {
  image: string;
  onClick: () => void;
};

// Helper Component
const PlatformCard: React.FC<PlatformCardProps> = ({ image, onClick }) => (
  <div
    className="w-[160px] md:w-[320px] cursor-pointer group"
    onClick={onClick}
  >
    <div className="relative h-[115px] md:h-[230px] overflow-hidden">
      <Image
        src={image}
        alt="Platform"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div className="bg-[#fff] flex items-center justify-between px-3 md:px-6 h-[40px] md:h-[63px] border-l border-r border-[#F4EADB]">
      <span className="text-[12px] md:text-[19px] font-nunito font-semibold text-black">
        Tap here
      </span>

      <div className="w-6 h-6 md:w-10 md:h-10 bg-[#FFEBED] rounded-full flex items-center justify-center text-white">
        <Image
          src="/asset/icons/arrow.svg"
          alt="open"
          width={14}
          height={14}
          className="md:w-[26px] md:h-[26px]"
        />
      </div>
    </div>

    <div className="h-[6px] md:h-[10px] bg-[#FFEBED] mx-2 md:mx-4"></div>
  </div>
);