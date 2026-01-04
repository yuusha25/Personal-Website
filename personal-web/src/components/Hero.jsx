import { ArrowRight, Github, Linkedin, Mail, Code, Palette, Zap, Coffee } from 'lucide-react'

export default function Hero({ mousePos }) {
    const floatingIcons = [
        { Icon: Code, pos: 'top-10 left-10', delay: '0s' },
        { Icon: Palette, pos: 'top-10 right-10', delay: '0.5s' },
        { Icon: Zap, pos: 'bottom-10 left-10', delay: '1s' },
        { Icon: Coffee, pos: 'bottom-10 right-10', delay: '1.5s' }
    ]

    const socialLinks = [
        { Icon: Github, href: 'https://github.com/yuusha25' },
        { Icon: Linkedin, href: 'https://www.linkedin.com/in/razky-ageng-syahputra/' },
        { Icon: Mail, href: 'mailto:razkyagengsyahputra95@gmail.com' }
    ]

    const handleNavigate = (url) => {
        window.open(url, '_blank');
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
            <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 relative z-10">
                    {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm">Available for work</span>
                    </div> */}

                    <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                        <span className="block">Hello, I&apos;m</span>
                        <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-300">
                            Razky Ageng Syahputra
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 leading-relaxed">
                        Experienced in React, Node.js, and Android development, delivering end-to-end solutions from system design to production-ready implementation.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button onClick={() => window.location.href = "#work"} className="group px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-all flex items-center gap-2">
                            View Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button onClick={() => handleNavigate("https://drive.google.com/file/d/1hFZ5TP4nMAA048e0s_NMC-rE5GDB3YJv/view?usp=drive_link")} className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-all">
                            Download CV
                        </button>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        {socialLinks.map(({ Icon, href }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-violet-500 hover:bg-violet-500/10 transition-all hover:scale-110"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="relative w-full aspect-square">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-3xl backdrop-blur-xl border border-white/10"
                            style={{
                                transform: `perspective(1000px) rotateY(${(mousePos.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) / 50}deg) rotateX(${-(mousePos.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) / 50}deg)`,
                                transition: 'transform 0.1s ease-out'
                            }}
                        >
                            <div className="absolute inset-8 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 rounded-2xl opacity-50 blur-2xl animate-pulse" />

                            {floatingIcons.map(({ Icon, pos, delay }, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute ${pos} w-16 h-16 bg-black/50 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center animate-float`}
                                    style={{ animationDelay: delay }}
                                >
                                    <Icon className="w-8 h-8 text-violet-400" />
                                </div>
                            ))}

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl font-bold mb-2">1+</div>
                                    <div className="text-sm text-gray-400">Years Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}