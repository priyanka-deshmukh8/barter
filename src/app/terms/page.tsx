import Link from 'next/link'

export default function TermsPage() {
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
            <Link href="/terms" className="text-white font-semibold">Terms</Link>
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link>
            
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Terms of Service</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing or using the Barter platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">2. User Responsibilities</h2>
            <p className="text-gray-300 mb-4">
              You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">3. Content</h2>
            <p className="text-gray-300 mb-4">
              Users retain all ownership rights to the content they post on Barter. By posting content, you grant Barter a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute that content in connection with the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">4. Prohibited Activities</h2>
            <p className="text-gray-300 mb-4">
              Users agree not to engage in any illegal activities or violate any applicable laws while using Barter. This includes but is not limited to: harassment, impersonation, and distribution of malware.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">5. Termination</h2>
            <p className="text-gray-300 mb-4">
              Barter reserves the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">6. Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify or replace these Terms at any time. It is your responsibility to check the Terms periodically for changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">7. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@barter.com" className="text-purple-400 hover:underline">legal@barter.com</a>.
            </p>
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