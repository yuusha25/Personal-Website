import ImageEXP from "./imageExp";

// Data untuk pengalaman dan gambar
const experiences = [
    {
        title: "Operational Staff of Schematics 2024",
        images: [
            "/src/assets/imageExperience/1sch24.jpg",
            "/src/assets/imageExperience/2sch24.jpg",
            "/src/assets/imageExperience/3sch24.jpg",
            "/src/assets/imageExperience/4sch24.jpg",
            "/src/assets/imageExperience/5sch24.jpg",
            "/src/assets/imageExperience/6sch24.jpg",
            "/src/assets/imageExperience/7sch24.jpg",
            "/src/assets/imageExperience/8sch24.jpg",
            "/src/assets/imageExperience/9sch24.jpg",
            "/src/assets/imageExperience/10sch24.jpg",
            "/src/assets/imageExperience/11sch24.jpg",
            "/src/assets/imageExperience/12sch24.jpg",
            "/src/assets/imageExperience/13sch24.jpg",
            "/src/assets/imageExperience/14sch24.jpg",
            "/src/assets/imageExperience/15sch24.jpg",
        ],
    },
    {
        title: "Public Relation Staff of SOLITS 2024",
        images: [
            "/src/assets/imageExperience/1solits.jpg",
            "/src/assets/imageExperience/2solits.jpg",
            "/src/assets/imageExperience/3solits.jpg",
            "/src/assets/imageExperience/4solits.jpg",
            "/src/assets/imageExperience/5solits.jpg",
            "/src/assets/imageExperience/6solits.jpg",
            "/src/assets/imageExperience/7solits.jpg",
            "/src/assets/imageExperience/8solits.jpg",
            "/src/assets/imageExperience/9solits.jpg",
            "/src/assets/imageExperience/10solits.jpg",
            "/src/assets/imageExperience/11solits.jpg",
            "/src/assets/imageExperience/12solits.jpg",
            "/src/assets/imageExperience/13solits.jpg",
            "/src/assets/imageExperience/14solits.jpg",
            "/src/assets/imageExperience/15solits.jpg",
            "/src/assets/imageExperience/16solits.jpg",
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
