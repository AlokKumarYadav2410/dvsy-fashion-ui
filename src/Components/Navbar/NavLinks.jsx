import React from 'react'

const NavLinks = ({ href, children, className=`bg-(--tri-bg)` }) => {
  return (
    <a href={`${href}`} className={`px-2 py-2 rounded text-xs font-semibold hover:scale-110 hover:opacity-80 transition-all duration-300 ${className}`}>{children}</a>
  )
}

export default NavLinks
