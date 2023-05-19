import Link from 'next/link';
import React from 'react'

const MenuItem = ({title,path,Icon}) => {
  return (
    <>
      <Link href={path} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mx-2" />
        <span className="hidden sm:inline my-2 text-sm">{title}</span>
      </Link>
    </>
  )
}

export default MenuItem;