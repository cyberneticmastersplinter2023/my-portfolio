import Link from 'next/link'; // This is a special tool for moving between pages

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10 md:p-24">
      {/* A simple back button */}
      <Link href="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
        ← Back to Home
      </Link>

      <section className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">About Me</h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          Hello! I'm a developer learning the ropes of the modern web. 
          I specialize in building clean, data-driven applications using 
          the "Modern Stack": Next.js, Tailwind CSS, and Supabase.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          When I'm not coding, you can find me exploring new design trends 
          or expanding my database skills.
        </p>
      </section>
    </main>
  )
}