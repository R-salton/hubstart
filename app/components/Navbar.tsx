import Link from 'next/link'
import React from 'react';
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='px-5 py-3 shadow-sm, bg-white'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
            <Image src="/logo.png" alt="logo" height={30} width={144} />
            </Link> 

        </nav>
    </header>
  )
}

export default Navbar