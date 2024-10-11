'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Loader2, Send, X } from 'lucide-react'

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

export default function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I assist you today?", sender: 'bot' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { id: messages.length + 1, text: input, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = { id: messages.length + 2, text: "I'm an AI assistant. I'm here to help you with any questions about Barter!", sender: 'bot' }
      setMessages(prev => [...prev, botMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-80 md:w-96 bg-gray-800 border-purple-500 shadow-lg">
              <CardHeader className="bg-purple-600 text-white rounded-t-lg flex justify-between items-center">
                <CardTitle className="text-lg font-semibold">Barter AI Assistant</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setIsChatOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-end space-x-2 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                        <Avatar className={message.sender === 'user' ? 'bg-blue-500' : 'bg-purple-500'}>
                          <AvatarFallback>{message.sender === 'user' ? 'U' : 'AI'}</AvatarFallback>
                        </Avatar>
                        <div className={`max-w-xs px-4 py-2 rounded-lg ${
                          message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'
                        }`}>
                          {message.text}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex items-center space-x-2">
                        <Avatar className="bg-purple-500">
                          <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                        <div className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                          <Loader2 className="h-4 w-4 animate-spin" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
                  <div className="flex space-x-2">
                    <Input
                      type="text"
                      placeholder="Type your message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="flex-grow bg-gray-700 text-white border-gray-600 focus:border-purple-500"
                    />
                    <Button type="submit" disabled={isLoading} className="bg-purple-600 hover:bg-purple-700">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={false}
        animate={{ y: isChatOpen ? 10 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`${
            isChatOpen ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700'
          } text-white rounded-full shadow-lg px-4 py-2`}
        >
          {isChatOpen ? 'Close' : 'Ask me anything'}
        </Button>
      </motion.div>
    </div>
  )
}