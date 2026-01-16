import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10 md:p-24">
      <Link href="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
        ← Back to Home
      </Link>

      <section className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          Hello! I'm a developer learning the ropes of the modern web. 
          I specialize in building clean, data-driven applications using 
          Next.js, Tailwind CSS, and Supabase.
        </p>
      </section>
    </main>
  );
}