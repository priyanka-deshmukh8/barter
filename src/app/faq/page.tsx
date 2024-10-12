'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQPage() {
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
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="/faq" className="text-white font-semibold">FAQ</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link>
            
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Frequently Asked Questions</h1>
          
          <div className="space-y-6">
            <FAQItem 
              question="What is Barter?" 
              answer="Barter is a skill exchange platform that connects people who want to learn new skills with those who can teach them. Users can exchange their expertise in various areas, creating a community of lifelong learners."
            />
            <FAQItem 
              question="How does skill exchange work on Barter?" 
              answer="Users create profiles listing their skills and what they want to learn. Our algorithm then suggests potential matches. Once matched, users can schedule sessions to teach and learn from each other, either virtually or in-person."
            />
            <FAQItem 
              question="Is Barter free to use?" 
              answer="Barter offers a free basic membership that allows users to participate in skill exchanges. We also offer a premium membership with additional features such as advanced matching algorithms and priority support."
            />
            <FAQItem 
              question="How does Barter ensure the quality of exchanges?" 
              answer="We have a rating and review system in place where users can provide feedback after each exchange. This helps maintain the quality of interactions and allows the community to self-regulate."
            />
            <FAQItem 
              question="Can I use Barter for professional services?" 
              answer="Barter is designed for skill exchange and learning purposes. While you can certainly learn professional skills, we recommend using appropriate professional platforms for paid services or job seeking."
            />
            <FAQItem 
              question="How does Barter protect user data?" 
              answer="We take data protection very seriously. All user data is encrypted and stored securely. We never share personal information with third parties without explicit consent. For more details, please refer to our Privacy Policy."
            />
          </div>
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
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="text-white font-semibold">About</Link>
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-700 pb-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold text-purple-400">{question}</h2>
        <ChevronDown className={`w-5 h-5 text-purple-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mt-2 text-gray-300">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}