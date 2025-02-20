import React from 'react'

function Navbar() {
  return (
    <div><nav className="flex justify-between bg-gray-900 text-white w-full pb-2">
    <div className="px-5 xl:px-12 py-4 flex w-full items-center">
      <a className="text-3xl font-bold font-heading" href="#">Logo Here.</a>
      <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
        <li><a className="hover:text-gray-200" href="#">Home</a></li>
        <li><a className="hover:text-gray-200" href="#">Category</a></li>
        <li><a className="hover:text-gray-200" href="#">Collections</a></li>
        <li><a className="hover:text-gray-200" href="#">Contact Us</a></li>
      </ul>
    </div>
  </nav></div>
  )
}

export default Navbar