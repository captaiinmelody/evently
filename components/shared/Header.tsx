import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => (
    <header className='w-full border-b'>
        <div className='wrapper flex-between'>
            <Link href='/' className='w-36'>
                <Image src='/assets/images/logo.svg' alt='logo' width={120} height={38}/>
            </Link>

            <SignedIn>
                <nav className='md:flex hidden max-w-xs'>
                  <NavItems />
                </nav>
            </SignedIn>

            <div className='flex'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/' />
                    <MobileNav />
                </SignedIn>
                <SignedOut>
                    <Button asChild className='rounded-full' size='lg'>
                        <Link href='/sign-in'>
                            Login
                        </Link>
                    </Button>
                </SignedOut>
            </div>
        </div>
    </header>
)

export default Header