import Image from "next/image";

export default function AboutWindow() {
    return (
         <div className="p-4 h-full overflow-auto">
                  <h2 className="text-2xl text-[#87CEFA] mb-4 font-bold">A propos de moi</h2>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 flex justify-center items-center flex-shrink-0">
                        <Image
                            src="/img/moi.png"
                            alt="Profile"
                            width={160}
                            height={160}
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-[#87CEFA]">
                          Melinda Esteves Mendes
                      </h3>
        
                      <p className="text-[#D8BFD8] text-lg">
                          Développeuse Front-End • React •
                      </p>
                  </div>
                  </div>
                  <div className="space-y-6 text-[#D8BFD8] leading-8">
        
                    <section>
                    <h4 className="text-[#87CEFA] font-bold text-xl mb-2">
                    👋 Qui suis-je ?
                    </h4>
        
                    <p>
<<<<<<< HEAD
                    Développeuse Web diplômée de la Web@cadémie by Epitech, je poursuis aujourd&apos;hui mon parcours en tant qu&apos;Accompagnatrice Pédagogique afin de transmettre mes connaissances et accompagner les futurs développeurs.
=======
                    Développeuse Web diplômée de la Web@cadémie by Epitech, je poursuis aujourd'hui mon parcours en tant qu'Accompagnatrice Pédagogique afin de transmettre mes connaissances et accompagner les futurs développeurs.
>>>>>>> 8a76f25c3bdba9c139dcc7032e0d50a35aa48fa4
                    </p>
                    </section>
        
                    <section>
                    <h4 className="text-[#87CEFA] font-bold text-xl mb-2">
                    🚀 Mon parcours
                    </h4>
        
                    <p>
<<<<<<< HEAD
                    Après plusieurs années dans l&apos;hôtellerie, j&apos;ai choisi une reconversion vers le développement web. Cette décision est née de ma curiosité pour les nouvelles technologies, de mon goût pour la résolution de problèmes et de mon envie de créer des applications utiles.
=======
                    Après plusieurs années dans l'hôtellerie, j'ai choisi une reconversion vers le développement web. Cette décision est née de ma curiosité pour les nouvelles technologies, de mon goût pour la résolution de problèmes et de mon envie de créer des applications utiles.
>>>>>>> 8a76f25c3bdba9c139dcc7032e0d50a35aa48fa4
                    </p>
                    </section>
        
                    <section>
                    <h4 className="text-[#87CEFA] font-bold text-xl mb-2">
<<<<<<< HEAD
                    💜 Ce qui m&apos;anime
                    </h4>
        
                    <p>
                    J&apos;aime transformer une idée en une interface moderne, intuitive et agréable à utiliser. Chaque projet est pour moi une opportunité d&apos;apprendre, de relever de nouveaux défis et de progresser techniquement.
=======
                    💜 Ce qui m'anime
                    </h4>
        
                    <p>
                    J'aime transformer une idée en une interface moderne, intuitive et agréable à utiliser. Chaque projet est pour moi une opportunité d'apprendre, de relever de nouveaux défis et de progresser techniquement.
>>>>>>> 8a76f25c3bdba9c139dcc7032e0d50a35aa48fa4
                    </p>
                    </section>
        
                    <section>
                    <h4 className="text-[#87CEFA] font-bold text-xl mb-2">
                    🎮 En dehors du code
                    </h4>
        
                    <p>
                    Passionnée par les jeux vidéo (Final Fantasy, Call of Duty, Dead or Alive, Les Sims...), je cultive également un esprit créatif qui nourrit ma façon de concevoir les interfaces et les expériences utilisateur.
                    </p>
                    </section>
        
                    <div className="border-l-4 border-[#8A2BE2] pl-4 italic text-[#87CEFA]">
                    « Je ne suis pas là pour chasser des papillons. »
                    </div>
        
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        
                    <div className="border-2 border-[#8A2BE2] p-4 text-center">
                    <p className="text-3xl font-bold text-[#87CEFA]">BAC+2</p>
                    <p>Diplôme</p>
                    </div>
        
                    <div className="border-2 border-[#8A2BE2] p-4 text-center">
                    <p className="text-3xl font-bold text-[#87CEFA]">10+</p>
                    <p>Technologies</p>
                    </div>
        
                    <div className="border-2 border-[#8A2BE2] p-4 text-center">
                    <p className="text-3xl font-bold text-[#87CEFA]">∞</p>
                    <p>Curiosité</p>
                    </div>
        
                    <div className="border-2 border-[#8A2BE2] p-4 text-center">
                    <p className="text-3xl font-bold text-[#87CEFA]">100%</p>
                    <p>Motivation</p>
                    </div>
        
                    </div>
                    </div>
    );
}