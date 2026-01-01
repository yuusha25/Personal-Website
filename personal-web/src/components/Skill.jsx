import { useState } from 'react'

export default function Skill() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skills = [
    // Programming Languages
    { 
      name: "C", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      category: "Language",
      color: "from-blue-600 to-blue-400"
    },
    { 
      name: "C++", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      category: "Language",
      color: "from-blue-700 to-blue-500"
    },
    { 
      name: "Python", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "Language",
      color: "from-yellow-500 to-blue-500"
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Language",
      color: "from-yellow-400 to-yellow-600"
    },
    { 
      name: "TypeScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "Language",
      color: "from-blue-500 to-blue-700"
    },
    { 
      name: "Kotlin", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      category: "Language",
      color: "from-purple-500 to-purple-700"
    },
    
    // Frontend
    { 
      name: "HTML5", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "Frontend",
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "CSS3", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "Frontend",
      color: "from-blue-400 to-blue-600"
    },
    { 
      name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
      color: "from-cyan-400 to-blue-500"
    },
    { 
      name: "Next.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "Frontend",
      color: "from-gray-800 to-gray-600"
    },
    { 
      name: "Vite", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      category: "Frontend",
      color: "from-purple-500 to-yellow-400"
    },
    
    // Backend
    { 
      name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "Backend",
      color: "from-green-500 to-green-700"
    },
    { 
      name: "Express.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      category: "Backend",
      color: "from-gray-600 to-gray-800"
    },
    
    // Database
    { 
      name: "MongoDB", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "Database",
      color: "from-green-500 to-green-700"
    },
    { 
      name: "MySQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "Database",
      color: "from-blue-600 to-orange-400"
    },
    
    // Mobile
    { 
      name: "Android Studio", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
      category: "Mobile",
      color: "from-green-400 to-green-600"
    },
  ]

  return (
    <section id="skills" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Tech <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(idx)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.05}s forwards`,
                opacity: 0
              }}
            >
              {/* Glow Effect */}
              <div 
                className={`absolute -inset-2 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 -z-10`}
              />
              
              {/* Card */}
              <div className="relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                {/* Icon Container */}
                <div className="relative w-16 h-16 mx-auto mb-3">
                  {/* Background Circle Animation */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:rotate-180 group-hover:scale-125`} />
                  
                  {/* Icon */}
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="relative z-10 w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    style={{
                      filter: hoveredSkill === idx ? 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))' : 'none'
                    }}
                  />
                </div>

                {/* Skill Name */}
                <h3 className="text-center text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>

                {/* Category Badge */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className={`px-2 py-1 bg-gradient-to-r ${skill.color} rounded-full text-xs font-medium text-white shadow-lg`}>
                    {skill.category}
                  </span>
                </div>

                {/* Particles Effect on Hover */}
                {hoveredSkill === idx && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-particle"
                        style={{
                          top: '50%',
                          left: '50%',
                          animationDelay: `${i * 0.1}s`,
                          '--tx': `${Math.cos(i * 60 * Math.PI / 180) * 40}px`,
                          '--ty': `${Math.sin(i * 60 * Math.PI / 180) * 40}px`,
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Languages", count: "6+" },
            { label: "Frameworks", count: "8+" },
            { label: "Databases", count: "2+" },
            { label: "Tools", count: "10+" }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-violet-500/50 transition-all duration-500"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.count}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes particle {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0);
          }
        }

        .animate-particle {
          animation: particle 1s ease-out forwards;
        }
      `}</style>
    </section>
  )
}