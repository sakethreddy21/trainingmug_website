import React from 'react'

const Footer = () => {
  return (
    <div className='text-white py-4 w-full flex justify-center items-center bg-gray-800'>
       <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <div className="flex items-center justify-center space-x-2">
            <img
              src="logo.png"
              alt="TrainingMug"
              className="h-20 w-auto"
            />
            
          </div>
          <p className="text-gray-400 mt-4 flex items-center justify-center ">
            &copy; copyright Chaicode 2023 - 2024. All rights reserved.
          </p>
         
        </div>

        {/* Pages Section */}
        <div className="mb-6 md:mb-0 md:w-1/6">
          <h3 className="text-lg font-semibold">Pages</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Tshirt
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Daily Quiz
              </a>
            </li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="mb-6 md:mb-0 md:w-1/6">
          <h3 className="text-lg font-semibold">Socials</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Discord
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                X | Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="mb-6 md:mb-0 md:w-1/6">
          <h3 className="text-lg font-semibold">Legal</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Pricing Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Register Section */}
        <div className="md:w-1/6">
          <h3 className="text-lg font-semibold">Register</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Forgot Password
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer