import { Sparkles } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-xl bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center rotate-45">
              <Sparkles className="w-5 h-5 -rotate-45" />
            </div>
            <span className="text-xl font-bold">Razky Ageng Syahputra</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Work', 'Skills', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <button onClick={() => window.open("mailto:razkyagengsyahputra95@gmail.com", "_blank")} className="px-6 py-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-violet-500/50 transition-all hover:scale-105">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  )
}