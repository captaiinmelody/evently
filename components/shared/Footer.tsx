import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='wrapper flex-center flex-between flexCol gap-4 p-5 sm:flex-row'>
        <Link href='/'>
          <Image 
            src='/assets/images/logo.svg' 
            alt='logo' 
            width={120} 
            height={38}
          />
        </Link>
          <p>@2023 Evenly, All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer