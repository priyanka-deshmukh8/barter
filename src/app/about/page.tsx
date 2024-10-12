import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-black/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Barter Logo" className="h-8 w-8 mr-2" />
            <span className="text-2xl font-bold">Barter</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="text-white font-semibold">About</Link>
            <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link>
            
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">About Barter</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              At Barter, we believe in the power of knowledge sharing and skill exchange. Our mission is to create a global community where individuals can learn, teach, and grow together, breaking down barriers to education and personal development.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2024, Barter was born from a simple idea: what if we could create a platform where people could exchange skills as easily as they exchange messages? Our founders, a group of lifelong learners and educators, set out to make this vision a reality.
            </p>
            <p className="text-gray-300 mb-4">
              Today, Barter connects thousands of users worldwide, facilitating skill exchanges in areas ranging from programming and design to language learning and music.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Values</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Continuous Learning: We believe in lifelong education and personal growth.</li>
              <li>Community: We foster a supportive, inclusive environment for all users.</li>
              <li>Innovation: We constantly strive to improve our platform and user experience.</li>
              <li>Trust: We prioritize user safety and data protection in all our operations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Join Our Community</h2>
            <p className="text-gray-300 mb-6">
              Ready to start your skill exchange journey? Join Barter today and become part of our global learning community.
            </p>
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/signup">
                Get Started <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="/logo.svg" alt="Barter Logo" className="h-8 w-8 inline-block mr-2" />
              <span className="text-xl font-semibold">Barter</span>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</Link>
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Barter. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}