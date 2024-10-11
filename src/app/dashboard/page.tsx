'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ChevronRight, Book, Users, Award, Clock, Calendar, Home, User, Menu, Bell, Search, Settings, LogOut, EarthIcon, GroupIcon, MessagesSquareIcon } from 'lucide-react'
import Link from 'next/link'
import { FaAddressBook, FaIcons, FaInternetExplorer } from 'react-icons/fa'

const skillProgressData = [
  { name: 'JavaScript', progress: 75, color: '#F7DF1E' },
  { name: 'React', progress: 60, color: '#61DAFB' },
  { name: 'Node.js', progress: 45, color: '#339933' },
  { name: 'Python', progress: 80, color: '#3776AB' },
]

const activityData = [
  { day: 'Mon', hours: 2 },
  { day: 'Tue', hours: 3 },
  { day: 'Wed', hours: 4 },
  { day: 'Thu', hours: 3 },
  { day: 'Fri', hours: 5 },
  { day: 'Sat', hours: 4 },
  { day: 'Sun', hours: 3 },
]

const upcomingExchanges = [
  { id: 1, skill: 'JavaScript Basics', with: 'Priyanka Deshmukh', date: '2024-03-15', time: '14:00' },
  { id: 2, skill: 'React Hooks', with: 'Utkarsh', date: '2024-03-17', time: '10:00' },
  { id: 3, skill: 'Node.js API Development', with: 'Mayank Rajani', date: '2024-03-20', time: '16:00' },
]

export default function Dashboard() {
  const [selectedMetric, setSelectedMetric] = useState('week')
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
              <h1 className="text-xl font-bold text-white">Barter</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <Search className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-white"
            >
              Dashboard Overview
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            >
              <MetricCard
                title="Total Skills"
                value="12"
                description="Skills you're learning"
                icon={<Book className="h-6 w-6 text-purple-400" />}
              />
              <MetricCard
                title="Exchanges"
                value="28"
                description="Completed exchanges"
                icon={<Users className="h-6 w-6 text-pink-400" />}
              />
              <MetricCard
                title="Achievements"
                value="5"
                description="Badges earned"
                icon={<Award className="h-6 w-6 text-yellow-400" />}
              />
              <MetricCard
                title="Study Time"
                value="47h"
                description="This month"
                icon={<Clock className="h-6 w-6 text-blue-400" />}
              />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="bg-gray-800 border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-white">Skill Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {skillProgressData.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="mb-4"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                          <span className="text-sm font-medium text-gray-300">{skill.progress}%</span>
                        </div>
                        <Progress value={skill.progress} className="h-2 bg-white-500" />
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="bg-gray-800 border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-white">Activity Overview</CardTitle>
                    <CardDescription>
                      <div className="flex space-x-4">
                        <Button
                          variant={selectedMetric === 'week' ? 'default' : 'outline'}
                          onClick={() => setSelectedMetric('week')}
                        >
                          Week
                        </Button>
                        <Button
                          variant={selectedMetric === 'month' ? 'default' : 'outline'}
                          onClick={() => setSelectedMetric('month')}
                        >
                          Month
                        </Button>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={activityData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="day" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                        <Bar dataKey="hours" fill="#8B5CF6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="bg-gray-800 border-purple-500">
                <CardHeader>
                  <CardTitle className="text-white">Upcoming Skill Exchanges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingExchanges.map((exchange, index) => (
                      <motion.div
                        key={exchange.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={`https://i.pravatar.cc/150?u=${exchange.with}`} />
                            <AvatarFallback>{exchange.with[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-white">{exchange.skill}</h3>
                            <p className="text-sm text-gray-300">with {exchange.with}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-sm font-medium text-white">{new Date(exchange.date).toLocaleDateString()}</p>
                            <p className="text-sm text-gray-300">{exchange.time}</p>
                          </div>
                          <Button variant="outline" size="icon" className="text-purple-400 hover:text-purple-300 hover:border-purple-300">
                            <Calendar className="h-4 w-4" />
                            <span className="sr-only">Add to calendar</span>
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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

function MetricCard({ title, value, description, icon }: { title: string, value: string, description: string, icon: React.ReactNode }) {
  return (
    <Card className="bg-gray-800 border-purple-500 hover:border-pink-500 transition-colors duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-300">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white">{value}</div>
        <p className="text-xs text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

function NavLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <Link href={href} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
      {icon}
      <span>{label}</span>
    </Link>
  )
}