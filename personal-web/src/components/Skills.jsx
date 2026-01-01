import { Code, Database, Palette, Zap } from 'lucide-react'

export default function Skills() {
  const skills = [
    { name: "Frontend", icon: Code, level: 86 },
    { name: "Backend", icon: Database, level: 75 },
    { name: "Design", icon: Palette, level: 50 },
    { name: "DevOps", icon: Zap, level: 70 }
  ]

  return (
    <section id="skills" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with daily</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => {
            const IconComponent = skill.icon
            return (
              <div
                key={idx}
                className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <IconComponent className="w-10 h-10" />
                  </div>

                  <h3 className="text-xl font-bold mb-4">{skill.name}</h3>

                  <div className="relative w-32 h-32">
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${2 * Math.PI * 56 * (1 - skill.level / 100)}`}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}