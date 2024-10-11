'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, ChevronRight, User, Settings, Menu, Bell, Search, MessageCircle, Users, Award, Calendar, Zap } from 'lucide-react'

const communityEvents = [
  { id: 1, title: 'JavaScript Meetup', date: '2024-03-20', time: '18:00', attendees: 45 },
  { id: 2, title: 'React Workshop', date: '2024-03-25', time: '14:00', attendees: 30 },
  { id: 3, title: 'Python Coding Challenge', date: '2024-04-01', time: '10:00', attendees: 60 },
]

const discussionTopics = [
  { id: 1, title: 'Best practices for React Hooks', author: 'Alice Johnson', replies: 23, likes: 45 },
  { id: 2, title: 'Optimizing Node.js performance', author: 'Bob Smith', replies: 17, likes: 32 },
  { id: 3, title: 'Getting started with GraphQL', author: 'Charlie Brown', replies: 9, likes: 28 },
]

const leaderboardUsers = [
  { id: 1, name: 'Emma Watson', points: 1250, badge: 'Top Contributor' },
  { id: 2, name: 'Liam Neeson', points: 1100, badge: 'Coding Guru' },
  { id: 3, name: 'Scarlett Johansson', points: 950, badge: 'Helpful Mentor' },
  { id: 4, name: 'Chris Hemsworth', points: 800, badge: 'Rising Star' },
  { id: 5, name: 'Natalie Portman', points: 750, badge: 'Active Learner' },
]

export default function CommunityFeatures() {
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
              <NavLink href="/profile" icon={<User className="h-5 w-5" />} label="Profile" />
              <NavLink href="/community" icon={<Users className="h-5 w-5" />} label="Community" active />
              <NavLink href="/settings" icon={<Settings className="h-5 w-5" />} label="Settings" />
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
              <h1 className="text-xl font-bold text-white">Community</h1>
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

        {/* Main Community Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6 text-white"
            >
              Community Features
            </motion.h2>

            <Tabs defaultValue="events" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-700 rounded-lg p-1">
                <TabsTrigger value="events" className="text-white data-[state=active]:bg-purple-600 rounded-md transition-all">Events</TabsTrigger>
                <TabsTrigger value="discussions" className="text-white data-[state=active]:bg-purple-600 rounded-md transition-all">Discussions</TabsTrigger>
                <TabsTrigger value="leaderboard" className="text-white data-[state=active]:bg-purple-600 rounded-md transition-all">Leaderboard</TabsTrigger>
              </TabsList>
              
              <TabsContent value="events">
                <Card className="bg-gray-800 border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-white">Upcoming Community Events</CardTitle>
                    <CardDescription className="text-gray-300">Join events and connect with other members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {communityEvents.map((event, index) => (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-600"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                              <p className="text-sm text-gray-300">{event.date} at {event.time}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-5 w-5 text-blue-400" />
                              <span className="text-sm text-gray-300">{event.attendees} attending</span>
                            </div>
                          </div>
                          <Button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">Join Event</Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="discussions">
                <Card className="bg-gray-800 border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-white">Discussion Forums</CardTitle>
                    <CardDescription className="text-gray-300">Engage in conversations and share knowledge</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {discussionTopics.map((topic, index) => (
                        <motion.div
                          key={topic.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-600"
                        >
                          <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
                          <p className="text-sm text-gray-300">Started by {topic.author}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-4 w-4 text-blue-400" />
                              <span className="text-sm text-gray-300">{topic.replies} replies</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Zap className="h-4 w-4 text-yellow-400" />
                              <span className="text-sm text-gray-300">{topic.likes} likes</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <Button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">Start New Discussion</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="leaderboard">
                <Card className="bg-gray-800 border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-white">Community Leaderboard</CardTitle>
                    <CardDescription className="text-gray-300">Top contributors and their achievements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {leaderboardUsers.map((user, index) => (
                        <motion.div
                          key={user.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-600 flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-4">
                            <span className="text-2xl font-bold text-purple-400">#{index + 1}</span>
                            <Avatar>
                              <AvatarImage src={`https://i.pravatar.cc/150?u=${user.id}`} alt={user.name} />
                              <AvatarFallback>{user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold text-white">{user.name}</h3>
                              <Badge variant="secondary" className="bg-blue-600 text-white">{user.badge}</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-yellow-400">{user.points}</span>
                            <p className="text-sm text-gray-300">points</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
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