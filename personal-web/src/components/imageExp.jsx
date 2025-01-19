import { useEffect, useRef, useState } from "react";

function ImageEXP(props) {
    const containerRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false); // Untuk mendeteksi apakah user sedang berinteraksi

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let scrollAmount = 0;
        const isOdd = props.keyIndex % 2 !== 0; // Cek ganjil atau genap
        let scrollInterval;

        // Fungsi untuk memulai scrolling otomatis
        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                if (isScrolling) return; // Jangan scroll jika user sedang berinteraksi

                scrollAmount += isOdd ? -2 : 2; // Kecepatan scroll (2px setiap interval)
                container.scrollLeft = scrollAmount;

                // Reset ke awal jika sudah mencapai akhir atau awal
                if (isOdd && scrollAmount <= 0) {
                    scrollAmount = container.scrollWidth - container.clientWidth;
                } else if (!isOdd && scrollAmount >= container.scrollWidth - container.clientWidth) {
                    scrollAmount = 0;
                }
            }, 30); // Interval waktu (30ms)
        };

        // Mulai scrolling otomatis
        startAutoScroll();

        // Membersihkan interval saat komponen di-unmount
        return () => clearInterval(scrollInterval);
    }, [props.keyIndex, isScrolling]); // Tambahkan dependency isScrolling untuk menghentikan saat interaksi

    // Event handlers untuk interaksi pengguna
    const handleTouchStart = () => setIsScrolling(true); // Mulai interaksi
    const handleTouchEnd = () => setIsScrolling(false); // Akhiri interaksi

    return (
        <>
            <div
                ref={containerRef}
                className="overflow-x-auto flex gap-4 py-4 no-scrollbar"
                style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
                onTouchStart={handleTouchStart} // Menangkap interaksi pengguna
                onTouchEnd={handleTouchEnd}
                onMouseEnter={handleTouchStart} // Untuk desktop, hentikan scroll otomatis saat mouse masuk
                onMouseLeave={handleTouchEnd}  // Lanjutkan scroll otomatis saat mouse keluar
            >
                {props.images.map((image, index) => (
                    <div key={index}> 
                        <img
                            src={image}
                            alt=""
                            className="h-[200px] md:h-[300px] w-auto max-w-[500px] object-contain"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ImageEXP;
