import React from 'react';     

const Navbar = () => {
  return (
    <div className="sticky flex flex-row p-6 top-0 z-20 w-full -mt-6">
      <div className="bg-dark rounded-lg  border-t border-gray-800">
        <p className="text-xs px-2 py-1 text-gray-500 text-left">Portfolio</p>
      </div>
      <div className="flex flex-grow"></div>
      <div className="flex flex-row gap-4 right-0">
        <div className="bg-dark rounded-xl  border-t border-gray-800">
          <p className="text-sm px-3 py-1 text-white text-left">home.</p>
        </div>
        <div className="bg-dark rounded-xl  border-t border-gray-800">
          <p className="text-sm px-3 py-1 text-white text-left">about me.</p>
        </div>
        <div className="bg-dark rounded-xl  border-t border-gray-800">
          <p className="text-sm px-3 py-1 text-white text-left">works.</p>
        </div>
        <div className="bg-dark rounded-xl  border-t border-gray-800">
          <p className="text-sm px-3 py-1 text-white text-left">contact.</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar;