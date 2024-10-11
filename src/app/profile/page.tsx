'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {  Edit, Github, Twitter, Linkedin, MapPin, Mail, Calendar } from 'lucide-react'
import { ChevronRight, Book, Users, Award, Clock,  Home, User, Menu, Bell, Search, Settings, LogOut, EarthIcon, GroupIcon, MessagesSquareIcon } from 'lucide-react'

const skillsData = [
  { name: 'JavaScript', level: 'Advanced', progress: 85, color: '#F7DF1E' },
  { name: 'React', level: 'Intermediate', progress: 70, color: '#61DAFB' },
  { name: 'Node.js', level: 'Beginner', progress: 40, color: '#339933' },
  { name: 'Python', level: 'Advanced', progress: 90, color: '#3776AB' },
]

const recentActivity = [
  { id: 1, type: 'exchange', description: 'Completed a JavaScript session with Alice', date: '2024-03-10' },
  { id: 2, type: 'achievement', description: 'Earned "React Guru" badge', date: '2024-03-08' },
  { id: 3, type: 'skill', description: 'Started learning Node.js', date: '2024-03-05' },
]

export default function EnhancedUserProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-900 to-black text-white">
      {/* Sidebar */}
      <AnimatePresence>
        {(sidebarOpen || typeof window !== 'undefined' && window.innerWidth >= 768) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-gray-900 text-white w-64 min-h-screen p-4 fixed md:static z-50"
          >
            <nav className="mt-8 space-y-2">
              <NavLink href="/" icon={<Home className="h-5 w-5" />} label="Home" />
              <NavLink href="/dashboard" icon={<ChevronRight className="h-5 w-5" />} label="Dashboard" />
              <NavLink href="/profile" icon={<User className="h-5 w-5" />} label="Profile" active />
              <NavLink href="/settings" icon={<Settings className="h-5 w-5" />} label="Settings" />
              <NavLink href="/explore" icon={<EarthIcon className="h-5 w-5" />} label="Explore" />
              <NavLink href="/community" icon={<GroupIcon className="h-5 w-5" />} label="Community" />
              <NavLink href="/messages" icon={<MessagesSquareIcon className="h-5 w-5" />} label="Messages" />
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navigation Header */}
        <header className="bg-gray-800 shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="md:hidden mr-2 text-white" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
              <h1 className="text-xl font-bold text-white">User Profile</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <Search className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main Profile Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="mb-8 overflow-hidden bg-gray-800 border-purple-500">
                <div className="h-32 bg-gradient-to-r from-purple-600 to-blue-500"></div>
                <CardContent className="relative pt-16 pb-6 px-6">
                  <Avatar className="absolute -top-16 left-6 w-32 h-32 border-4 border-gray-800">
                    <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-white">John Doe</h2>
                      <p className="text-gray-300">Full Stack Developer</p>
                      <div className="mt-2 flex items-center text-sm text-gray-400">
                        <MapPin className="mr-1 h-4 w-4" /> San Francisco, CA
                      </div>
                      <div className="mt-1 flex items-center text-sm text-gray-400">
                        <Mail className="mr-1 h-4 w-4" /> john.doe@example.com
                      </div>
                      <div className="mt-1 flex items-center text-sm text-gray-400">
                        <Calendar className="mr-1 h-4 w-4" /> Joined March 2020
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Button>
                      <Button variant="outline" size="sm" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">
                        <Twitter className="mr-2 h-4 w-4" /> Twitter
                      </Button>
                      <Button variant="outline" size="sm" className="text-blue-300 border-blue-300 hover:bg-blue-300 hover:text-white">
                        <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                      </Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-white">About</h3>
                    <p className="mt-2 text-gray-300">
                      Passionate full-stack developer with 5+ years of experience in building scalable web applications.
                      Enthusiastic about clean code, user experience, and continuous learning.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge className="bg-yellow-600 text-white">JavaScript</Badge>
                    <Badge className="bg-blue-600 text-white">React</Badge>
                    <Badge className="bg-green-600 text-white">Node.js</Badge>
                    <Badge className="bg-blue-800 text-white">Python</Badge>
                    <Badge className="bg-pink-600 text-white">GraphQL</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <Tabs defaultValue="skills" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-700">
                <TabsTrigger value="skills" className="text-white data-[state=active]:bg-purple-600">Skills</TabsTrigger>
                <TabsTrigger value="activity" className="text-white data-[state=active]:bg-purple-600">Recent Activity</TabsTrigger>
              </TabsList>
              <TabsContent value="skills">
                <Card className="bg-gray-800 border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-white">Skills Overview</CardTitle>
                    <CardDescription className="text-gray-300">Your current skill levels and progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {skillsData.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="mb-6"
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                          <span className="text-sm font-medium text-gray-300">{skill.level}</span>
                        </div>
                        <Progress value={skill.progress} className="h-2 bg-white-500" />
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="activity">
                <Card className="bg-gray-800 border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Activity</CardTitle>
                    <CardDescription className="text-gray-300">Your latest actions and achievements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <motion.li
                          key={activity.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-600"
                        >
                          <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-200">{activity.description}</p>
                            <span className="text-xs text-gray-400">{activity.date}</span>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 shadow-md mt-auto">
          <div className="container mx-auto px-4 py-3 text-center text-gray-400">
            © 2024 Barter. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}

function NavLink({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link 
      href={href} 
      className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200 ${
        active ? 'bg-purple-700' : 'hover:bg-purple-700'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}