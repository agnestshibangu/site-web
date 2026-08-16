import Loader from '../components/Loader'
import '../style/LandingPage.css'
import video1 from "../assets/siteweb_video.mp4";
import logoZelv from "../assets/zelv_logo.png";
import { useState, useEffect } from "react";


function OverLayPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <Loader />
      )}

      <main className="landing-page">
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
                    <header className="header">
              
                        <nav className="header-nav">
        
                          <a href="#accueil" className="logoZelv">
                            <img src={logoZelv} alt="VotreNom" />
                          </a>
        
                          <ul className="nav-links">
                            <li>
                              <a href="#accueil">Accueil</a>
                            </li>
        
                            <li>
                              <a href="#services">Services</a>
                            </li>
        
                            <li>
                              <a href="#realisations">Réalisations</a>
                            </li>
        
                            <li>
                              <a href="#apropos">À propos</a>
                            </li>
                          </ul>
        
                          <a href="#contact" className="contact-button">
                            Contact
                          </a>
        
                          <button className="menu-button">
                            ☰
                          </button>
        
                        </nav>

                        <div className="nav-background">
                        </div>

                        
                    </header>
        
        
                    {/* Texte au-dessus */}
                    <div className="relative z-10 flex h-screen items-center justify-center text-white">
        
                      <div className="text-center">
        
                          <div className="hero-title-wrapper">
                          <h1 className="hero-title">
                            <span>Votre image.</span>
                            <span>Votre site.</span>
                            <span>Prenez de la hauteur.</span>
                          </h1>
                        </div>
                      </div>
        
                    </div>
        
            </section>
      </main>
    </>
  );
}

export default OverLayPage;



