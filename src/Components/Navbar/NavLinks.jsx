import React from 'react'

const NavLinks = ({ href, children, className=`bg-(--tri-bg)` }) => {
  return (
    <a href={`${href}`} className={`px-2 py-2 rounded text-xs font-semibold ${className}`}>{children}</a>
  )
}

export default NavLinks
