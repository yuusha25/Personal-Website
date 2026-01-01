import { useState, useEffect } from "react"
import { ArrowRight, Cpu, Globe, Heart, Database, X } from "lucide-react"

export default function Projects() {
    const [activeCard, setActiveCard] = useState(null)
    const [previewImage, setPreviewImage] = useState(null)

    useEffect(() => {
        document.body.style.overflow = previewImage ? "hidden" : "auto"
    }, [previewImage])

    const projects = [
        {
            id: 1,
            title: "ChronoCam — Web-based CCTV Media Management",
            description:
                "Web untuk upload, manajemen, dan pencarian media CCTV berbasis waktu.",
            tags: ["React", "Express", "MongoDB"],
            color: "from-violet-500 to-purple-600",
            icon: Cpu,
            image: "/chronocam.png",
            link: "https://github.com/yuusha25/Web-ChronoCam.git",
        },
        {
            id: 2,
            title: "TAkCEKin — AI-Based Thesis Format Analyzer",
            description:
                "Web AI untuk mendeteksi kesalahan format TA Institut Teknologi Sepuluh Nopember.",
            tags: ["Laravel", "Python", "AI Integration", "LLM"],
            color: "from-blue-500 to-cyan-600",
            icon: Globe,
            image: "/takcekin.png",
            link: "https://senopati.its.ac.id/TAkCEKin/",
        },
        {
            id: 3,
            title: "DraftKuy — MLBB Draftpick Assistant (Android)",
            description:
                "Aplikasi Android untuk rekomendasi draft hero berbasis meta dan counter.",
            tags: ["Kotlin", "Android Studio", "Firebase", "AdMob"],
            color: "from-pink-500 to-rose-600",
            icon: Heart,
            image: "/draftkuy.png",
            link: "",
        },
        {
            id: 4,
            title: "Kasir Digital — Android POS Application",
            description:
                "Aplikasi kasir Android dengan manajemen produk dan transaksi otomatis.",
            tags: ["Kotlin", "Android Studio", "Local Database"],
            color: "from-emerald-500 to-teal-600",
            icon: Database,
            image: "/kasir-digital.png",
            link: "",
        },
    ]

    return (
        <>
            <section id="work" className="py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            Featured{" "}
                            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Crafted with passion and precision
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative"
                                onMouseEnter={() => setActiveCard(project.id)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                <div
                                    className={`relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl transition-all duration-500 ${activeCard === project.id
                                            ? "scale-105 border-white/30"
                                            : ""
                                        }`}
                                >
                                    {/* IMAGE HEADER (CLICKABLE) */}
                                    <div
                                        className="w-full aspect-[16/9] bg-no-repeat bg-center cursor-pointer"
                                        style={{
                                            backgroundImage: `url(${project.image})`,
                                            backgroundSize: "contain",
                                        }}
                                        onClick={() => setPreviewImage(project.image)}
                                    >
                                        <div className="w-full h-full bg-black/30 hover:bg-black/20 transition" />
                                    </div>

                                    {/* GLOW */}
                                    <div
                                        className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
                                    />

                                    {/* CONTENT */}
                                    <div className="relative z-10 p-8">
                                        <h3 className="text-2xl font-bold mb-3">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-400 mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 group-hover:gap-4 transition-all"
                                            >
                                                View Project
                                                <ArrowRight className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IMAGE MODAL */}
            {previewImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={() => setPreviewImage(null)}
                >
                    <div className="relative max-w-6xl  px-6">
                        <button
                            className="absolute -top-12 right-0 text-white/70 hover:text-white"
                            onClick={() => setPreviewImage(null)}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <img
                            src={previewImage}
                            alt="Project Preview"
                            className="w-full max-h-[85vh] object-contain rounded-xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </>
    )
}
