'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/ui/icons"
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/skills', label: 'Skills' },
  { href: '/exchanges', label: 'Exchanges' },
  { href: '/community', label: 'Community' },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Icons.logo className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-indigo-800">Barter</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} active={pathname === item.href}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button asChild variant="ghost" className="text-indigo-800 hover:bg-indigo-100">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="ml-3 bg-indigo-800 text-white hover:bg-indigo-700">
              <Link href="/signup">Sign up</Link>
            </Button>
            <UserDropdown />
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-800 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                active={pathname === item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-indigo-800">Tom Cook</div>
                <div className="text-sm font-medium text-indigo-600">tom@example.com</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <MobileNavLink href="/profile" onClick={() => setMobileMenuOpen(false)}>
                Your Profile
              </MobileNavLink>
              <MobileNavLink href="/settings" onClick={() => setMobileMenuOpen(false)}>
                Settings
              </MobileNavLink>
              <MobileNavLink href="/logout" onClick={() => setMobileMenuOpen(false)}>
                Sign out
              </MobileNavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
        active
          ? 'border-indigo-500 text-indigo-900'
          : 'border-transparent text-indigo-700 hover:border-indigo-300 hover:text-indigo-900'
      }`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, active, onClick, children }: { href: string; active?: boolean; onClick?: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
        active
          ? 'bg-indigo-50 border-indigo-500 text-indigo-900'
          : 'border-transparent text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-900'
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href="/profile">Your Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/logout">Sign out</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}