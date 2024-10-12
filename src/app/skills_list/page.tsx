'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Users, Menu } from 'lucide-react'

// This would typically come from a database
const mockSkills = [
  { id: '1', name: 'Graphic Design', category: 'Design', userCount: 50 },
  { id: '2', name: 'Web Development', category: 'Programming', userCount: 75 },
  { id: '3', name: 'Digital Marketing', category: 'Marketing', userCount: 60 },
  { id: '4', name: 'Machine Learning', category: 'Data Science', userCount: 40 },
  { id: '5', name: 'Photography', category: 'Art', userCount: 55 },
  { id: '6', name: 'Content Writing', category: 'Writing', userCount: 65 },
  { id: '7', name: 'UI/UX Design', category: 'Design', userCount: 45 },
  { id: '8', name: 'Data Analysis', category: 'Data Science', userCount: 70 },
  { id: '9', name: 'Mobile App Development', category: 'Programming', userCount: 80 },
  { id: '10', name: 'Video Editing', category: 'Multimedia', userCount: 35 },
  { id: '11', name: 'SEO Optimization', category: 'Marketing', userCount: 55 },
  { id: '12', name: '3D Modeling', category: 'Design', userCount: 30 },
]

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/explore', label: 'Explore' },
  { href: '/skills', label: 'Skills' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/messages', label: 'Messages' },
]

export default function SkillListingPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const filteredSkills = mockSkills.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    skill.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black">
      <header className="bg-black/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/logo.svg" alt="Barter Logo" width={40} height={40} />
              <span className="ml-2 text-2xl font-bold text-white">Barter</span>
            </div>
            <nav className="hidden md:flex font-semibold space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" className="text-white font-semibold hover:text-black hover:bg-white">
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild className="bg-white text-black font-semibold hover:bg-gray-200">
                <Link href="/signup">Sign up</Link>
              </Button>
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6 text-white" />
              </button>
            </div>
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

      <main className="pt-24 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="w-full bg-gray-900 border-purple-500">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Available Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search skills or categories..."
                    className="pl-10 bg-gray-800 text-white border-purple-500 focus:border-pink-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-4">
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800 border-purple-500 hover:border-pink-500 transition-colors duration-300">
                      <CardContent className="flex justify-between items-center p-4">
                        <div>
                          <h3 className="font-semibold text-white">{skill.name}</h3>
                          <Badge variant="secondary" className="bg-purple-700 text-white">{skill.category}</Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400 flex items-center justify-end">
                            <Users className="w-4 h-4 mr-1" />
                            {skill.userCount} users
                          </p>
                          <Button size="sm" className="mt-2 bg-purple-600 text-white hover:bg-purple-700">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}