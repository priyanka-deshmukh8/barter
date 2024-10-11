'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-800"><></></span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink href="/" current={pathname === '/'}>Home</NavLink>
              <NavLink href="/skills" current={pathname === '/skills'}>Skills</NavLink>
              <NavLink href="/profile" current={pathname.startsWith('/profile')}>Profile</NavLink>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button asChild variant="ghost" className="text-indigo-800 hover:bg-indigo-100">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="ml-3 bg-indigo-800 text-white hover:bg-indigo-700">
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, current, children }: { href: string; current: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
        current
          ? 'border-indigo-500 text-gray-900'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
      }`}
    >
      {children}
    </Link>
  )
}