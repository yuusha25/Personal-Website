import { useEffect, useRef } from "react";

function ImageEXP(props) {
    const containerRef = useRef(null);
    const scrollSpeed = 1; // Kecepatan scroll (px/frame)

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let scrollAmount = 0;
        let isScrolling = true; // Flag untuk mengontrol scroll
        const isOdd = props.keyIndex % 2 !== 0; // Cek ganjil atau genap

        const autoScroll = () => {
            if (!isScrolling) return;

            // Scroll ke kiri jika ganjil, ke kanan jika genap
            scrollAmount += isOdd ? -scrollSpeed : scrollSpeed; 
            container.scrollLeft = scrollAmount;

            // Reset jika mencapai awal atau akhir
            if (isOdd && scrollAmount <= 0) {
                scrollAmount = container.scrollWidth - container.clientWidth;
            } else if (!isOdd && scrollAmount >= container.scrollWidth - container.clientWidth) {
                scrollAmount = 0;
            }

            requestAnimationFrame(autoScroll); // Panggil ulang untuk frame berikutnya
        };

        // Mulai scroll otomatis
        autoScroll();

        // Bersihkan animasi jika komponen di-unmount
        return () => {
            isScrolling = false;
        };
    }, [props.keyIndex]);

    return (
        <div
            ref={containerRef}
            className="overflow-x-auto flex gap-4 py-4 no-scrollbar"
            style={{ whiteSpace: "nowrap" }}
        >
            {props.images.map((image, index) => (
                <div key={index}>
                    <img
                        src={image}
                        alt=""
                        className="h-[100px] md:h-[200px] w-auto max-w-[500px] object-contain"
                    />
                </div>
            ))}
        </div>
    );
}

export default ImageEXP;
