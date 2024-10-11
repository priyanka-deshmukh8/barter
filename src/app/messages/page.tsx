'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Send, MoreVertical, Phone, GroupIcon, Video, ImageIcon, Smile, Home, MessageCircle, User, Settings, ChartBarIcon, Users2Icon } from 'lucide-react'

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null)
  const [message, setMessage] = useState('')
  const pathname = usePathname()

  const chats = [
    { id: 1, name: 'Alice Smith', avatar: 'AS', lastMessage: 'Sure, that sounds great!', time: '10:30 AM', unread: 2, online: true },
    { id: 2, name: 'Bob Johnson', avatar: 'BJ', lastMessage: 'Thanks for the help earlier', time: 'Yesterday', unread: 0, online: false },
    { id: 3, name: 'Carol Williams', avatar: 'CW', lastMessage: 'See you tomorrow!', time: '2 days ago', unread: 1, online: true },
  ]

  const messages = [
    { id: 1, sender: 'Alice Smith', content: "Hey there! How's your day going?', time: '10:15 AM", read: true },
    { id: 2, sender: 'You', content: "Hi Alice! It's going well, thanks. How about yours?', time: '10:20 AM", read: true },
    { id: 3, sender: 'Alice Smith', content: "Pretty good! I was wondering if you'd like to collaborate on a new project?", time: '10:25 AM', read: true },
    { id: 4, sender: 'You', content: "That sounds interesting! What kind of project did you have in mind?", time: '10:28 AM', read: true },
    { id: 5, sender: 'Alice Smith', content: "I was thinking we could create a series of tutorial videos on web development. Your coding skills combined with my video editing could make for some great content!", time: '10:30 AM', read: false },
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, you'd send this message to your backend
      console.log('Sending message:', message)
      setMessage('')
    }
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <nav className="w-20 bg-gray-800 flex flex-col items-center py-4">
        <Link href="/" className="mb-8">
          <Image src="/src/components/logo.png" alt="Barter Logo" width={40} height={40} />
        </Link>
        <div className="flex flex-col items-center space-y-4">
          <NavItem href="/" icon={<Home className="h-6 w-6" />} active={pathname === '/'} />
          <NavItem href="/community" icon={<GroupIcon className="h-6 w-6" />} active={pathname === '/community'} />
          <NavItem href="/profile" icon={<User className="h-6 w-6" />} active={pathname === '/profile'} />
          <NavItem href="/settings" icon={<Settings className="h-6 w-6" />} active={pathname === '/settings'} />
        </div>
      </nav>
      <div className="w-1/3 border-r border-gray-800">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Chats</h1>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search messages..."
              className="pl-10 bg-gray-800 text-white border-gray-700 focus:border-purple-500"
            />
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <ScrollArea className="h-[calc(100vh-140px)]">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`p-4 border-b border-gray-800 cursor-pointer hover:bg-gray-800 ${
                selectedChat === chat.id ? 'bg-gray-800' : ''
              }`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <div className="flex items-center">
                <div className="relative">
                  <Avatar className="h-12 w-12 mr-3">
                    <AvatarImage src={`/avatars/${chat.avatar}.png`} alt={chat.name} />
                    <AvatarFallback>{chat.avatar}</AvatarFallback>
                  </Avatar>
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-gray-900"></div>
                  )}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold">{chat.name}</span>
                    <span className="text-xs text-gray-400">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="ml-2 bg-purple-600 rounded-full w-5 h-5 flex items-center justify-center">
                    <span className="text-xs">{chat.unread}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
      <div className="flex-grow flex flex-col">
        {selectedChat ? (
          <>
            <div className="p-4 bg-gray-800 flex justify-between items-center">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={`/avatars/${chats[selectedChat - 1].avatar}.png`} alt={chats[selectedChat - 1].name} />
                  <AvatarFallback>{chats[selectedChat - 1].avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <span className="font-semibold">{chats[selectedChat - 1].name}</span>
                  <p className="text-xs text-gray-400">{chats[selectedChat - 1].online ? 'Online' : 'Offline'}</p>
                </div>
              </div>
              <div>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <ScrollArea className="flex-grow p-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`mb-4 ${msg.sender === 'You' ? 'text-right' : ''}`}>
                  <div className={`inline-block p-3 rounded-lg ${
                    msg.sender === 'You' ? 'bg-purple-600' : 'bg-gray-800'
                  }`}>
                    <p>{msg.content}</p>
                    <div className="flex items-center justify-end mt-1 text-xs text-gray-400">
                      <span>{msg.time}</span>
                      {msg.sender === 'You' && (
                        <span className="ml-1">{msg.read ? '✓✓' : '✓'}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
            <div className="p-4 bg-gray-800">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <ImageIcon className="h-5 w-5" />
                </Button>
                <Input
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-grow bg-gray-700 text-white border-gray-600 focus:border-purple-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Smile className="h-5 w-5" />
                </Button>
                <Button onClick={handleSendMessage} className="bg-purple-600 hover:bg-purple-700">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-grow flex items-center justify-center text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  )
}

function NavItem({ href, icon, active }: { href: string; icon: React.ReactNode; active: boolean }) {
  return (
    <Link href={href} className={`p-3 rounded-lg ${active ? 'bg-purple-600' : 'hover:bg-gray-700'}`}>
      {icon}
    </Link>
  )
}

