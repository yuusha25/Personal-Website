import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400">© 2026 Razky Ageng Syahputra. Crafted with love & coffee</p>
        <div className="flex items-center gap-2 text-gray-400">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          <span>in Indonesia</span>
        </div>
      </div>
    </footer>
  )
}