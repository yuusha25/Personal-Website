import ImageEXP from "./imageExp";

// Data untuk pengalaman dan gambar
const experiences = [
    {
        title: "Operational Staff of Schematics 2024",
        images: [
            "https://ik.imagekit.io/razky/1sch24.jpg",
            "https://ik.imagekit.io/razky/2sch24.jpg",
            "https://ik.imagekit.io/razky/3sch24.jpg",
            "https://ik.imagekit.io/razky/4sch24.jpg",
            "https://ik.imagekit.io/razky/5sch24.jpg",
            "https://ik.imagekit.io/razky/6sch24.jpg",
            "https://ik.imagekit.io/razky/7sch24.jpg",
            "https://ik.imagekit.io/razky/8sch24.jpg",
            "https://ik.imagekit.io/razky/9sch24.jpg",
            "https://ik.imagekit.io/razky/10sch24.jpg",
            "https://ik.imagekit.io/razky/11sch24.jpg",
            "https://ik.imagekit.io/razky/12sch24.jpg",
            "https://ik.imagekit.io/razky/13sch24.jpg",
            "https://ik.imagekit.io/razky/14sch24.jpg",
            "https://ik.imagekit.io/razky/15sch24.jpg",
        ],
    },
    {
        title: "Public Relation Staff of SOLITS 2024",
        images: [
            "https://ik.imagekit.io/razky/1solits.jpg",
            "https://ik.imagekit.io/razky/2solits.jpg",
            "https://ik.imagekit.io/razky/3solits.jpg",
            "https://ik.imagekit.io/razky/4solits.jpg",
            "https://ik.imagekit.io/razky/5solits.jpg",
            "https://ik.imagekit.io/razky/6solits.jpg",
            "https://ik.imagekit.io/razky/7solits.jpg",
            "https://ik.imagekit.io/razky/8solits.jpg",
            "https://ik.imagekit.io/razky/9solits.jpg",
            "https://ik.imagekit.io/razky/10solits.jpg",
            "https://ik.imagekit.io/razky/11solits.jpg",
            "https://ik.imagekit.io/razky/12solits.jpg",
            "https://ik.imagekit.io/razky/13solits.jpg",
            "https://ik.imagekit.io/razky/14solits.jpg",
            "https://ik.imagekit.io/razky/15solits.jpg",
            "https://ik.imagekit.io/razky/16solits.jpg",
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
