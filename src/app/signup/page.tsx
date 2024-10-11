'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/ui/icons"
import { User, AtSign, Lock, Facebook, Twitter } from 'lucide-react'

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 rounded-2xl shadow-2xl flex flex-col md:flex-row-reverse w-full max-w-4xl"
      >
        <div className="w-full md:w-3/5 p-5">
          <div className="text-left font-bold text-2xl text-purple-500 flex items-center">
            <Icons.logo className="h-8 w-8 mr-2" />
            <span>Barter</span>
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
            <div className="border-2 w-10 border-purple-500 inline-block mb-2"></div>
            <p className="text-gray-400 mb-8">Join our community of learners and teachers</p>
            <form onSubmit={onSubmit}>
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 w-full p-2 flex items-center mb-3 rounded-xl">
                  <User className="text-gray-400 m-2" />
                  <Input
                    id="name"
                    placeholder="Full Name"
                    type="text"
                    autoCapitalize="words"
                    autoComplete="name"
                    autoCorrect="off"
                    disabled={isLoading}
                    className="bg-gray-800 outline-none text-sm flex-1 border-none text-white placeholder-gray-500"
                  />
                </div>
                <div className="bg-gray-800 w-full p-2 flex items-center mb-3 rounded-xl">
                  <AtSign className="text-gray-400 m-2" />
                  <Input
                    id="email"
                    placeholder="Email"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    className="bg-gray-800 outline-none text-sm flex-1 border-none text-white placeholder-gray-500"
                  />
                </div>
                <div className="bg-gray-800 w-full p-2 flex items-center mb-3 rounded-xl">
                  <Lock className="text-gray-400 m-2" />
                  <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="new-password"
                    autoCorrect="off"
                    disabled={isLoading}
                    className="bg-gray-800 outline-none text-sm flex-1 border-none text-white placeholder-gray-500"
                  />
                </div>
                <div className="bg-gray-800 w-full p-2 flex items-center mb-3 rounded-xl">
                  <Lock className="text-gray-400 m-2" />
                  <Input
                    id="confirm-password"
                    placeholder="Confirm Password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="new-password"
                    autoCorrect="off"
                    disabled={isLoading}
                    className="bg-gray-800 outline-none text-sm flex-1 border-none text-white placeholder-gray-500"
                  />
                </div>
                <div className="flex w-full justify-between mb-5">
                  <Label className="flex items-center text-xs text-gray-400">
                    <input type="checkbox" name="terms" className="mr-1" />
                    I agree to the Terms and Conditions
                  </Label>
                </div>
                <Button 
                  disabled={isLoading}
                  className="w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition-colors"
                >
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-2/5 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-tl-2xl rounded-bl-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">If you already have an account, simply log in.</p>
          <Link href="/login">
            <Button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Log In
            </Button>
          </Link>
          <div className="mt-10">
            <p className="text-sm mb-4">Or sign up with</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon" className="rounded-full bg-white text-purple-600 hover:bg-purple-100">
                <Icons.google className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-white text-purple-600 hover:bg-purple-100">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-white text-purple-600 hover:bg-purple-100">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}