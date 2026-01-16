import { createClient } from '@supabase/supabase-js'
import Link from 'next/link';

// 1. Get the keys from the environment
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 2. ONLY create the client if the keys actually exist.
const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

export default async function Home() {
  // 3. Create an empty list as a backup
  let projects: any[] = [];
  
  // 4. Only try to fetch if supabase successfully initialized
  if (supabase) {
    const { data } = await supabase.from('projects').select('*');
    if (data) projects = data;
  }

  return (
    <div className="bg-gray-950 min-h-screen font-sans">
      {/* --- NAVBAR START --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            MY PORTFOLIO
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <Link href="/about" className="hover:text-white transition">About</Link>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-gray-200 transition">
            Hire Me
          </button>
        </div>
      </nav>
      {/* --- NAVBAR END --- */}

      <main className="pt-20 p-6 md:p-20 text-white">
        
        {/* HERO SECTION */}
        <section className="text-center py-24 border-b border-white/10 mb-16">
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent pb-2">
            Creative Developer
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            I build high-performance, data-driven applications. 
            Welcome to my dynamic workshop.
          </p>
        </section>

        {/* PROJECTS SECTION */}
        <div id="projects">
          <h1 className="text-center text-3xl font-bold mb-10 text-gray-200">Featured Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project) => (
              <div key={project.id} className="group relative bg-gray-900 border border-white/10 rounded-2xl p-1 hover:scale-[1.02] transition-all duration-300 shadow-2xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300"></div>
                <div className="relative bg-gray-900 rounded-xl overflow-hidden">
                  <div className="h-56 bg-gray-800 flex items-center justify-center">
                    {project.image_url ? (
                        <img src={project.image_url} alt={project.title} className="object-cover w-full h-full group-hover:scale-110 transition duration-500" />
                    ) : (
                        <span className="text-gray-500 italic">No image yet</span>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">{project.title}</h2>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                    <a href={project.link} target="_blank" className="inline-flex items-center text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg transition">
                        Live Demo →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT/CONTACT PLACEHOLDERS */}
        <section id="about" className="py-20 text-center text-gray-500 italic">About Section coming soon...</section>
        <section id="contact" className="py-24 border-t border-white/10">
          <div className="max-w-2x1 mx-auto text-center">
            <h2 className="text-4x1 font-bold mb-4">Get In Touch</h2>
            <p>Have a project in mind? Let's build something together.</p>

            <form className="grid grid-cols-1 gap-6 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="button" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}