import ImageEXP from "./imageExp";

// Data untuk pengalaman dan gambar
const experiences = [
    {
        title: "Operational Staff of Schematics 2024",
        images: [
            "/1sch24.jpg",
            "/2sch24.jpg",
            "/3sch24.jpg",
            "/4sch24.jpg",
            "/5sch24.jpg",
            "/6sch24.jpg",
            "/7sch24.jpg",
            "/8sch24.jpg",
            "/9sch24.jpg",
            "/10sch24.jpg",
            "/11sch24.jpg",
            "/12sch24.jpg",
            "/13sch24.jpg",
            "/14sch24.jpg",
            "/15sch24.jpg",
        ],
    },
    {
        title: "Public Relation Staff of SOLITS 2024",
        images: [
            "/1solits.jpg",
            "/2solits.jpg",
            "/3solits.jpg",
            "/4solits.jpg",
            "/5solits.jpg",
            "/6solits.jpg",
            "/7solits.jpg",
            "/8solits.jpg",
            "/9solits.jpg",
            "/10solits.jpg",
            "/11solits.jpg",
            "/12solits.jpg",
            "/13solits.jpg",
            "/14solits.jpg",
            "/15solits.jpg",
            "/16solits.jpg",
        ],
    },
];

const Experience = () => {
    return (
        <div>
            <p className="text-2xl font-semibold flex justify-center mt-4 border-t-4 pt-4 border-b-4">Experience</p>
            {experiences.map((experience, index) => (
                <div key={index} className="mt-8 border-b-2">
                    <p className="text-xl font-semibold">{experience.title}</p>
                    <ImageEXP images={experience.images} keyIndex={index}/>
                </div>
            ))}
        </div>
    );
};

export default Experience;
