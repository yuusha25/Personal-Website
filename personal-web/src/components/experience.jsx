import ImageEXP from "./imageExp";

// Data untuk pengalaman dan gambar
const experiences = [
    {
        title: "Operational Staff of Schematics 2024",
        images: [
            "/src/assets/1sch24.jpg",
            "/src/assets/2sch24.jpg",
            "/src/assets/3sch24.jpg",
            "/src/assets/4sch24.jpg",
            "/src/assets/5sch24.jpg",
            "/src/assets/6sch24.jpg",
            "/src/assets/7sch24.jpg",
            "/src/assets/8sch24.jpg",
            "/src/assets/9sch24.jpg",
            "/src/assets/10sch24.jpg",
            "/src/assets/11sch24.jpg",
            "/src/assets/12sch24.jpg",
            "/src/assets/13sch24.jpg",
            "/src/assets/14sch24.jpg",
            "/src/assets/15sch24.jpg",
        ],
    },
    {
        title: "Public Relation Staff of SOLITS 2024",
        images: [
            "/src/assets/1solits.jpg",
            "/src/assets/2solits.jpg",
            "/src/assets/3solits.jpg",
            "/src/assets/4solits.jpg",
            "/src/assets/5solits.jpg",
            "/src/assets/6solits.jpg",
            "/src/assets/7solits.jpg",
            "/src/assets/8solits.jpg",
            "/src/assets/9solits.jpg",
            "/src/assets/10solits.jpg",
            "/src/assets/11solits.jpg",
            "/src/assets/12solits.jpg",
            "/src/assets/13solits.jpg",
            "/src/assets/14solits.jpg",
            "/src/assets/15solits.jpg",
            "/src/assets/16solits.jpg",
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
