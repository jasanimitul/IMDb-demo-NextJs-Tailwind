import React from 'react'
import Link from 'next/link';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <div className="flex justify-center bg-amber-100 dark:bg-gray-600 lg:text-lg p-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}

export default Navbar;