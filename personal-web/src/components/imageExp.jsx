import { useEffect, useRef } from "react";

function ImageEXP(props) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let scrollAmount = 0;
        const isOdd = props.keyIndex % 2 !== 0; // Cek ganjil atau genap

        const scrollInterval = setInterval(() => {
            // Jika ganjil, geser ke kiri; jika genap, geser ke kanan
            scrollAmount += isOdd ? -2 : 2; // Kecepatan scroll (2px setiap interval)
            container.scrollLeft = scrollAmount;

            // Reset ke awal jika sudah mencapai akhir atau awal
            if (isOdd && scrollAmount <= 0) {
                scrollAmount = container.scrollWidth - container.clientWidth;
            } else if (!isOdd && scrollAmount >= container.scrollWidth - container.clientWidth) {
                scrollAmount = 0;
            }
        }, 30); // Interval waktu (30ms)

        // Membersihkan interval saat komponen di-unmount
        return () => clearInterval(scrollInterval);
    }, [props.keyIndex]); // Tambahkan dependency untuk mengacu ke keyIndex

    return (
        <>
            <div
                ref={containerRef}
                className="overflow-x-auto flex gap-4 py-4 no-scrollbar"
                style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
            >
                {props.images.map((image, index) => (
                    <div> 
                        <p>halo halo</p>
                    <img
                        key={index}
                        src={image}
                        alt=""
                        className="h-[300px] w-auto max-w-[500px] object-contain"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ImageEXP;
