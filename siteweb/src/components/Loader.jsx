
// import '../style/Loader.css'
import "../style/Loader.css";
import video2 from "../assets/overlay.mp4";

function Loader() {

    return (

        <div className="loader">
            <video className="loader-video" autoPlay muted playsInline>
                <source src={video2} type="video/mp4" />
            </video>

            <svg className="loader-mask" viewBox="0 0 1920 1080">
                <defs>
                <mask id="logo-mask">
                    <rect width="100%" height="100%" fill="white" />

                    <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="black"
                    >
                    VOTRELOGO
                    </text>
                </mask>
                </defs>

                <rect
                width="100%"
                height="100%"
                fill="#ffffff"
                mask="url(#logo-mask)"
                />
            </svg>
        </div>
    )
}


export default Loader;