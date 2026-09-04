"use client"

export default function CertificationsWindow() {
  return (
    <div className="p-6 font-mono text-[#D8BFD8]">
      <h1 className="text-2xl font-bold text-[#87CEFA] mb-6">
        Certifications
      </h1>

      <div className="space-y-4">
        <div
          className="
            border-2
            border-[#8A2BE2]
            bg-[#1a0033]
            p-4
          "
        >
          <h2 className="text-lg font-bold text-white">
            🏆 Certification
          </h2>

          <p className="text-sm mt-2">
            Nom de la certification
          </p>

          <p className="text-xs mt-1 text-[#aaa]">
            Organisme · Année
          </p>
        </div>

        <div
          className="
            border-2
            border-[#8A2BE2]
            bg-[#1a0033]
            p-4
          "
        >
          <h2 className="text-lg font-bold text-white">
            🏆 Formation
          </h2>

          <p className="text-sm mt-2">
            Nom de la formation
          </p>

          <p className="text-xs mt-1 text-[#aaa]">
            Organisme · Année
          </p>
        </div>
      </div>
    </div>
  )
}