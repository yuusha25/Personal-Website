import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";
import youtube from "../assets/youtube.svg";

const Contact = () => {
    return (
        <div className="flex h-[35px] mt-4 justify-center">
            <a href="https://www.facebook.com/profile.php?id=100008817514341" className="pl-2 h-full">
                <img src={facebook} alt="Facebook" className="h-full w-auto" />
            </a>
            <a href="https://github.com/yuusha25" className="pl-2 h-full">
                <img src={github} alt="GitHub" className="h-full w-auto" />
            </a>
            <a href="https://www.instagram.com/razkyageng95_/" className="pl-2 h-full">
                <img src={instagram} alt="Instagram" className="h-full w-auto" />
            </a>
            <a href="https://www.linkedin.com/in/razky-ageng-syahputra/" className="pl-2 h-full">
                <img src={linkedin} alt="LinkedIn" className=" h-full w-auto" />
            </a>
            <a href="wa.me/6281578979853" className="pl-2 h-full">
                <img src={whatsapp} alt="WhatsApp" className=" h-full w-auto" />
            </a>
            <a href="https://www.youtube.com/@razkyageng2173" className="pl-2 h-full">
                <img src={youtube} alt="YouTube" className="h-full w-auto" />
            </a>
        </div>
    );
};

export default Contact;
