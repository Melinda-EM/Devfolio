export default function ContactWindow() {
    return (
        <div className="p-4 h-full overflow-auto">
          <h2 className="text-2xl font-orange text-[#87CEFA] mb-4 font-bold">
            [SYSTEM] Initialisation du formulaire de contact...
          </h2>

          <p className="text-[#D8BFD8] mb-6">
            Veuillez entrer vos informations pour établir une connexion.  
            Toute proposition de contrat, mission ou renseignement sera traitée en priorité 🚀
          </p>

          <form className="space-y-4 font-mono text-sm">
            <div>
              <label className="block text-[#D8BFD8] mb-1">Nom complet:</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-white focus:border-[#87CEFA] outline-none"
              />
              <p className="text-xs text-[#87CEFA] mt-1">* Exemple : Poulpi.exe</p>
            </div>
            <div>
              <label className="block text-[#D8BFD8] mb-1">Email:</label>
              <input
                type="email"
                placeholder="john.doe@mail.fr"
                className="w-full p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-white focus:border-[#87CEFA] outline-none"
              />
              <p className="text-xs text-[#87CEFA] mt-1">Astuce : utilisez un vrai email, pas hotmail_1999@hotmail.com 😅</p>
            </div>
            <div>
              <label className="block text-[#D8BFD8] mb-1">Numéro:</label>
              <input
                type="tel"
                placeholder="0606060606"
                pattern="[0-9]{10}"
                className="w-full p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-white focus:border-[#87CEFA] outline-none"
              />
              <p className="text-xs text-[#87CEFA] mt-1">Optionnel mais recommandé 📟</p>
            </div>
            <div>
              <label className="block text-[#D8BFD8] mb-1">Message:</label>
              <textarea
                rows={4}
                placeholder="Bonjour, je vous contacte au sujet de ..."
                className="w-full p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-white focus:border-[#87CEFA] outline-none"
              ></textarea>
              <p className="text-xs text-[#87CEFA] mt-1">Tapez votre requête comme si vous étiez sous MS-DOS...</p>
            </div>
            <button
              type="button"
              className="px-4 py-2 bg-[#8A2BE2] text-white hover:bg-[#6A1CB2] border-2 border-[#D8BFD8] font-bold"
            >
              ► ENVOYER
            </button>
          </form>

          <div className="mt-6 text-[#D8BFD8] border-t border-[#8A2BE2] pt-4">
            <p>[INFO] Canaux alternatifs de connexion :</p>
            <ul className="mt-2 space-y-1">
              {/* <li>📧 Email : <a href="mailto:tonmail@mail.com" className="underline hover:text-[#87CEFA]">tonmail@mail.com</a></li> */}
              <li>💼 LinkedIn : <a href="https://www.linkedin.com/in/melinda-e-m/" target="_blank" className="underline hover:text-[#87CEFA]">linkedin.com/in/melinda-e-m</a></li>
              <li>👩‍💻 GitHub : <a href="https://github.com/Melinda-EM" target="_blank" className="underline hover:text-[#87CEFA]">github.com/Melinda-EM</a></li>
            </ul>
          </div>

          <p className="text-sm text-[#D8BFD8] mt-6">
            [INFO] Vos données resteront confidentielles.  
            Stockage local : <span className="text-[#87CEFA]">C:\Users\Poulpi\Formulaires\2026</span>
          </p>

          <p className="mt-6 text-[#87CEFA] font-bold text-center font-mono">
            --- FIN DE TRANSMISSION --- <br/> Poulpi.exe 🐙
          </p>
       </div>
    );
}