import React from 'react'

const Navbar = () => {
  return (
    // Navigation Bar 
    <nav className="bg-blue-700 py-5 text-slate-100">
        <div className="flex">
                 {/* Logo  */}
        <div className="font-bold">
            Sajid
        </div>
        {/* Menu  */}
        <div className="">
            <ul className="flex">
                <li><a href="#">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">FAQ</a></li>
            </ul>
        </div>
         
         {/* Button  */}
         <div className="">
            <button className="bg-blue-500 rounded mx-5">Login</button>
            <button className="bg-blue-500 rounded">Create Account</button>
         </div>
        </div>

    </nav>
  )
}

export default Navbar