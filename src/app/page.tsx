'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Users, Zap, Globe, Lock } from 'lucide-react'

export default function ModernLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <BlockchainSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="bg-black/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Barter Logo" width={40} height={40} />
          <span className="ml-2 text-2xl font-bold text-white">Barter</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link>
          <Link href="/explore" className="text-gray-300 hover:text-white transition-colors">Explore</Link>

        </nav>
        <div className="flex items-center space-x-4">
          <Button asChild variant="ghost" className="text-white hover:text-black hover:bg-white">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild className="bg-white text-black hover:bg-gray-200">
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Skill Exchange Reimagined
            </h1>
            <p className="text-xl mb-8 text-gray-300">Join our community of learners and teachers. Share your expertise and acquire new skills through our innovative platform.</p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
              <Link href="/signup">
                Get Started <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <Image src="/modern-hero-image.svg" alt="Barter Hero" width={600} height={400} className="rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Why Choose Barter?</h2>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
            hidden: { opacity: 0, y: 20 }
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          <FeatureCard
            icon={<Users className="h-12 w-12 text-purple-500" />}
            title="Community-Driven"
            description="Connect with a diverse community of learners and experts from around the world."
          />
          <FeatureCard
            icon={<Zap className="h-12 w-12 text-purple-500" />}
            title="Skill Matching"
            description="Our advanced algorithm pairs you with the perfect learning partners based on your skills and interests."
          />
          <FeatureCard
            icon={<Globe className="h-12 w-12 text-purple-500" />}
            title="Global Learning"
            description="Access a wide range of skills and knowledge from different cultures and backgrounds."
          />
        </motion.div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <StepCard number={1} title="Create Your Profile" description="Sign up and list your skills and interests." />
          <StepCard number={2} title="Find Matches" description="Our algorithm suggests perfect skill swap partners." />
          <StepCard number={3} title="Schedule Sessions" description="Arrange learning sessions that fit your schedule." />
          <StepCard number={4} title="Learn and Teach" description="Exchange knowledge and grow your skillset." />
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">What Our Users Say</h2>
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="tab1">Sarah J.</TabsTrigger>
            <TabsTrigger value="tab2">Michael L.</TabsTrigger>
            <TabsTrigger value="tab3">Emily R.</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <TestimonialCard
              quote="Barter has completely transformed the way I learn. I've acquired so many new skills!"
              author="Sarah J."
              role="Graphic Designer"
            />
          </TabsContent>
          <TabsContent value="tab2">
            <TestimonialCard
              quote="The community here is amazing. I've met incredible people and learned things I never thought I could."
              author="Michael L."
              role="Software Engineer"
            />
          </TabsContent>
          <TabsContent value="tab3">
            <TestimonialCard
              quote="As a teacher, I love how Barter allows me to share my knowledge while learning new things too."
              author="Emily R."
              role="Language Tutor"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function BlockchainSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Secure Skill Exchange with Blockchain</h2>
        <Card className="w-full max-w-2xl mx-auto bg-black border-purple-500">
          <CardContent className="pt-6">
            <div className="flex items-center mb-4">
              <Lock className="h-8 w-8 text-purple-500 mr-4" />
              <h3 className="text-xl font-semibold text-white">How We Use Blockchain</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Barter leverages blockchain technology to create secure and transparent skill exchange contracts. 
              This ensures that all parties involved in a skill swap are protected and accountable.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Smart contracts for each skill exchange</li>
              <li>Immutable record of completed exchanges</li>
              <li>Decentralized reputation system</li>
              <li>Secure and transparent transactions</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function CallToActionSection() {
  return (
    <section className="py-20 bg-gradient-to-t from-purple-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Ready to Start Your Skill Exchange Journey?</h2>
        <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
          <Link href="/signup">
            Join Barter Today <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Barter</h3>
            <p className="text-sm text-gray-400">Exchange skills, grow together, and unlock your potential.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218  2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">&copy; 2024 Barter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="bg-gray-900 p-6 rounded-lg border border-purple-500 hover:border-pink-500 transition-colors duration-300"
    >
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center text-white">{title}</h3>
      <p className="text-gray-400 text-center">{description}</p>
    </motion.div>
  )
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-black p-6 rounded-lg border border-purple-500 text-center"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-900 text-white text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 p-6 rounded-lg border border-purple-500 text-white"
    >
      <p className="text-lg mb-4">"{quote}"</p>
      <div className="flex items-center">
        <div className="rounded-full bg-purple-900 w-12 h-12 flex items-center justify-center mr-4">
          <span className="text-xl font-bold text-white">{author[0]}</span>
        </div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}