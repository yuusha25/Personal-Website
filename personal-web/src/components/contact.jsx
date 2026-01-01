import { Mail, Star } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-12 md:p-16 bg-gradient-to-br from-violet-600/10 to-purple-600/10 backdrop-blur-xl border border-white/10 rounded-3xl text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5" />
          
          <div className="relative z-10">
            <Star className="w-16 h-16 mx-auto mb-6 text-violet-400 animate-spin-slow" />
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Create Something <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Amazing</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? 
              I&apos;m always excited to work on new and challenging projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => window.open("mailto:razkyagengsyahputra95@gmail.com", "_blank")} className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-all flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Send Message
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-all">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}