import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { NAV_LINKS } from '@/constants'
import Button from './Button'
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <nav className=' flexBetween max-container padding-container relative z-30 py-5' >
      <Link href="/">
        <h2 className='font-extrabold px-1/2 py-1/2 text-2xl'>Wonder<span className='text-green-400'>lust.</span></h2>
        {/* <Image src="/icon.png" alt="logo" width={74} height={35} className='px-1/2 py-1/2 bold-55' /> */}
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flexCenter">
        <Button type='button'
          title="Login"
          icons={faUser}
          variant="btn_dark_green" />
      </div>
      <FontAwesomeIcon icon={faBars}
        width={32}
        height={32}
        className='inline-block cursor-pointer lg:hidden'
      />
    </nav>
  )
}

export default Navbar
