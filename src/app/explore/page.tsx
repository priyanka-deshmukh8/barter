'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import { Search, Filter, Star, Users, Clock, Menu, Heart, ArrowRight } from 'lucide-react'

const skills = [
  { id: 1, name: 'JavaScript Programming', category: 'Technology', rating: 4.8, students: 1200, duration: '8 weeks', image: '/placeholder.svg?height=100&width=100', favorited: false },
  { id: 2, name: 'Digital Marketing', category: 'Business', rating: 4.6, students: 980, duration: '6 weeks', image: '/placeholder.svg?height=100&width=100', favorited: false },
  { id: 3, name: 'Graphic Design', category: 'Design', rating: 4.9, students: 1500, duration: '10 weeks', image: '/placeholder.svg?height=100&width=100', favorited: false },
  { id: 4, name: 'Data Science', category: 'Technology', rating: 4.7, students: 800, duration: '12 weeks', image: '/placeholder.svg?height=100&width=100', favorited: false },
  { id: 5, name: 'Public Speaking', category: 'Personal Development', rating: 4.5, students: 600, duration: '4 weeks', image: '/placeholder.svg?height=100&width=100', favorited: false },
  { id: 6, name: 'Creative Writing', category: 'Arts', rating: 4.4, students: 750, duration: '8 weeks', image: '/placeholder.svg?height=100&width=100', favorited: false },
]

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/explore', label: 'Explore' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/messages', label: 'Messages' },
]

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [sortedBy, setSortedBy] = useState('popularity')
  const [favoritedSkills, setFavoritedSkills] = useState<number[]>([])
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleFavorite = (id: number) => {
    setFavoritedSkills((prev) => 
      prev.includes(id) ? prev.filter(skillId => skillId !== id) : [...prev, id]
    )
  }

  const filteredSkills = skills
    .filter(skill => 
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || skill.category === selectedCategory)
    )
    .sort((a, b) => 
      sortedBy === 'rating' ? b.rating - a.rating : b.students - a.students
    )

  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))]

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="bg-black/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Barter Logo" width={40} height={40} />
            <span className="ml-2 text-2xl font-bold text-white">Barter</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-300 hover:text-white transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" className="text-white hover:text-black hover:bg-white">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="bg-white text-black hover:bg-gray-200">
              <Link href="/signup">Sign up</Link>
            </Button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 bg-gray-900"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 px-4 text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-8 pt-5 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-700"
          >
            Explore Skills
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <Card className="bg-gray-900 border-purple-500">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="w-full md:w-1/2">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Search skills..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white border-gray-700 focus:border-purple-500 focus:ring-purple-500"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div className="w-full md:w-auto flex items-center space-x-4">
                    <div>
                      <Label htmlFor="category" className="text-sm font-medium text-gray-400">Category:</Label>
                      <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="block w-full mt-1 pl-3 pr-10 py-2 text-base bg-gray-800 border-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md text-white"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="sort" className="text-sm font-medium text-gray-400">Sort By:</Label>
                      <select
                        id="sort"
                        value={sortedBy}
                        onChange={(e) => setSortedBy(e.target.value)}
                        className="block w-full mt-1 pl-3 pr-10 py-2 text-base bg-gray-800 border-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md text-white"
                      >
                        <option value="popularity">Popularity</option>
                        <option value="rating">Rating</option>
                      </select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {filteredSkills.length > 0 ? (
            <motion.div 
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="bg-gray-900 rounded-lg overflow-hidden border border-purple-500 hover:border-pink-500 transition-colors duration-300"
                >
                  <Image src={skill.image} alt={skill.name} width={400} height={200} className="w-full h-48 object-cover" />
                  <div className="p-4 relative">
                    <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">{skill.category}</p>
                    <div className="flex items-center mb-2">
                      <Star className="text-yellow-500 h-5 w-5" />
                      <span className="ml-2 text-white">{skill.rating.toFixed(1)}</span>
                      <Users className="ml-4 text-gray-400 h-5 w-5" />
                      <span className="ml-2 text-gray-400">{skill.students} students</span>
                      <Clock className="ml-4 text-gray-400 h-5 w-5" />
                      <span className="ml-2 text-gray-400">{skill.duration}</span>
                    </div>
                    <button
                      onClick={() => handleFavorite(skill.id)}
                      className={`absolute top-4 right-4 p-2 rounded-full ${favoritedSkills.includes(skill.id) ? 'bg-pink-500 text-white' : 'bg-gray-700 text-gray-300'} transition-colors duration-200`}
                      aria-label={favoritedSkills.includes(skill.id) ? "Unfavorite" : "Favorite"}
                    >
                      <Heart className="h-5 w-5" />
                    </button>
                    <Button className="w-full mt-4 bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center text-gray-400 text-xl mt-8">No skills found.</div>
          )}
        </div>
      </main>

      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/logo.svg" alt="Barter Logo" width={32} height={32} />
              <span className="ml-2 text-xl font-bold">Barter</span>
            </div>
            <p className="text-sm text-gray-400">&copy; 2024 Barter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}