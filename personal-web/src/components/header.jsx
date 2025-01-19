import backgroundHead from "../assets/backgroundHead.jpg";
import profil from "../assets/profilkotak.jpg";

function Header() {
    return (
        <>
            <div className=" md:flex lg:flex ">
                <img
                    src={backgroundHead}
                    alt="imagenya"
                    className="h-[220px] w-full mx-auto"
                />

                {/* Gambar profil berbentuk lingkaran */}

                <img
                    src={profil}
                    alt=""
                    className="border-4 md:ml-20 lg:ml-28 md:mt-24 lg:mt-24 relative md:absolute lg:absolute w-[200px] md:w-[260px] lg:w-[270px] rounded-full mx-auto"
                    />  
                {/* Gambar latar belakang */}
            </div>
        </>
    );
}

export default Header;
