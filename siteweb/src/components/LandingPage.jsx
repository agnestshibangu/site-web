import '../style/LandingPage.css'
import video1 from "../assets/video1.mp4";


function LandingPage() {
  return (
      <section className="relative h-screen w-screen overflow-hidden">

            {/* Vidéo en arrière-plan */}
            <video
              className="fixed top-0 left-0 w-full h-full object-cover -z-10"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video1} type="video/mp4" />
            </video>

            {/* Filtre sombre */}
            <div className="absolute inset-0 bg-black/30 z-0"></div>


            {/* Header navigation */}
            <header className="absolute top-0 left-0 w-full z-20 px-10 py-8">

              <nav className="flex items-center justify-between">

                {/* Logo / Nom */}
                <div className="text-white text-2xl font-semibold tracking-wide">
                  VotreNom
                </div>


                {/* Navigation centrale */}
                <ul className="absolute left-1/2 -translate-x-1/2 flex gap-10 text-white text-sm uppercase tracking-widest">
                  <li>
                    <a href="#" className="hover:opacity-70 transition">
                      Accueil
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:opacity-70 transition">
                      Services
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:opacity-70 transition">
                      Réalisations
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:opacity-70 transition">
                      À propos
                    </a>
                  </li>
                </ul>


                {/* Bouton contact */}
                <a
                  href="#contact"
                  className="px-7 py-3 rounded-full text-white font-medium transition hover:scale-105"
                  style={{ backgroundColor: "#d36c97" }}
                >
                  Contact
                </a>

              </nav>

            </header>


            {/* Texte au-dessus */}
            <div className="relative z-10 flex h-screen items-center justify-center text-white">

              <div className="text-center">

                <h1 className="hero-title">
                  Des images <span>aériennes</span> qui élèvent votre histoire
                </h1>

              </div>

            </div>

    </section>









    //      <section className="relative h-screen w-screen overflow-hidden">

    //   {/* Vidéo en arrière-plan */}
    //   <video
    //     className="fixed top-0 left-0 w-full h-full object-cover -z-10"
    //     autoPlay
    //     muted
    //     loop
    //     playsInline
    //   >
    //     <source src={video1} type="video/mp4" />
    //   </video>

    //   {/* Filtre sombre */}
    //   <div className="absolute inset-0 bg-black/40 z-0"></div>

    //   {/* Texte au-dessus */}
    //   <div className="relative z-10 flex h-screen items-center justify-center text-white">
    //     <div className="text-center">
    //       <h1 className="hero-title">
    //         Des images <span>aériennes</span> qui élèvent votre histoire
    //       </h1>
    //     </div>
    //   </div>

    // </section>
  );
}

export default LandingPage;