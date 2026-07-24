import Image from "next/image";
import { career } from "../../data/career";

export default function CareerWindow() {
  return (
    <div className="p-6 h-full overflow-y-auto">
      <h2 className="text-2xl text-[#87CEFA] font-bold mb-8">
        Mon Parcours
      </h2>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#8A2BE2]" />

        {career.map((step, index) => (
          <div
            key={index}
            className="relative flex items-start gap-8 mb-10"
          >

            <div className="relative z-10 flex-shrink-0 min-w-[90px]">
                <div className="bg-[#000080] border-2 border-[#8A2BE2] text-white text-center px-3 py-2 font-bold text-sm">
                    {step.period}
                </div>
            </div>


            <div className="flex-1 border-2 border-[#8A2BE2] bg-[#1a0033] shadow-lg hover:-translate-y-1 hover:shadow-[0_0_20px_#8A2BE2] transition-all duration-300">

              <div className="bg-[#000080] text-white flex justify-between items-center px-2 py-1 border-b-2 border-[#8A2BE2]">
                <span className="font-bold text-sm">
                  📁 {step.title.replace(/_/g, " ")}
                </span>

                <div className="flex gap-1">
                  <div className="w-4 h-4 border border-white flex items-center justify-center text-[10px]">
                    _
                  </div>
                  <div className="w-4 h-4 border border-white flex items-center justify-center text-[10px]">
                    □
                  </div>
                  <div className="w-4 h-4 border border-white flex items-center justify-center text-[10px]">
                    ✕
                  </div>
                </div>
              </div>


              <div className="p-4">
                <Image
                  src={step.image}
                  alt={step.title}
                  className="w-full h-60 object-cover border border-[#8A2BE2]"
                />

                <h3 className="mt-4 text-xl font-bold text-[#87CEFA]">
                  {step.title.replace(/_/g, " ")}
                </h3>

                <p className="mt-2 text-[#D8BFD8]">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}