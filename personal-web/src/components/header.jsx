import backgroundHead from "../assets/backgroundHead.jpg";
import profil from "../assets/profilkotak.jpg";

function Header() {
    return (
        <>
            <div className="flex ">
                <img
                    src={backgroundHead}
                    alt="imagenya"
                    className="h-[220px] w-full mx-auto"
                />

                {/* Gambar profil berbentuk lingkaran */}
                <img
                    src={profil}
                    alt=""
                    className="border-4 ml-28 mt-24 absolute w-[270px] rounded-full mx-auto"
                />  
                {/* Gambar latar belakang */}
            </div>
        </>
    );
}

export default Header;
