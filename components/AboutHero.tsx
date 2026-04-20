import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="bg-[#f2f2f2] px-2.5 py-[80px] md:py-[120px] lg:py-[140px]">
            {/* Grid: Mobile me 1 column, Desktop me 2 columns */}
            <div className="mx-0 md:mx-[70px] grid grid-cols-1 md:grid-cols-[470px_1fr] gap-10 md:gap-16 items-center">

                {/* Left Image Box */}
                {/* Mobile pe width full di hai aur aspect-square se box square rahega */}
                <div className="bg-[#E9E5E5] w-full aspect-square md:w-[470px] md:h-[470px] flex items-center justify-center p-0 md:p-10 rounded-[30px]">
                    <Image
                        src="/images/book.png"
                        alt="Sapiens Book"
                        width={256}
                        height={393}
                        className="shadow-lg rounded-lg object-contain w-[180px] md:w-[256px]"
                    />
                </div>

                {/* Right Content */}
                <div className="text-left pb-6 mx-2.5 md:mx-0">
                    <p className="italic text-black mb-4 md:mb-6 text-[16px] md:text-[19px]">
                        From the Book
                    </p>

                    {/* Text sizes mobile ke liye thodi choti ki hain taaki screen fit ho */}
                    <div className="space-y-[40px] md:space-y-8 font-cardo text-[18px] md:text-[28px] text-black leading-relaxed md:pr-14  font-mencken-regular">
                        <p className="leading-[100%] tracking-[1px]">
  “The secret of human success is flexible cooperation in large numbers.”
</p>
                        <p className="leading-[130%] md:leading-[120%]">
                            “Large numbers of strangers can cooperate by believing in common myths.”
                        </p>

                        <p className="leading-[130%] md:leading-[120%]">
                            “Sapiens rule the world because they can cooperate flexibly in large numbers.”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}