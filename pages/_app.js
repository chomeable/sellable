import '../styles/globals.css'
import Link from 'next/link'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  const openMenu = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  }

  useEffect(async () => {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })

    const connection = await web3Modal.connect()
    console.log(connection.selectedAddress)
  }, [])

  return (
    <div>
      <nav className="bg-bglight shadow-xl text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <Link href="/">
                  <a className="flex items-center py-5 px-2 text-gray-300 hover:text-white">
                    <img src="logo.png" className="h-10 m-2" />
                    <span className="font-bold text-xl">sellable</span>
                  </a>
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <Link href="/explore">
                  <a className="py-5 px-3 text-gray-500 hover:text-white">explore</a>
                </Link>
                <Link href="/create-item">
                  <a className="py-5 px-3 text-gray-500 hover:text-white">create</a>
                </Link>
                <Link href="/my-assets">
                  <a className="py-5 px-3 text-gray-500 hover:text-white">my assets</a>
                </Link>
                <Link href="/creator-dashboard" className="p-2">
                  <a className="py-5 px-3 text-gray-500 hover:text-white">creator dashboard</a>
                </Link>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={openMenu}>
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mobile-menu hidden md:hidden">
          <div className="ml-3 pb-6">
            <Link href="/explore">
              <a className="py-5 px-3 text-gray-500 hover:text-white">explore</a>
            </Link>
            <Link href="/create-item">
              <a className="py-5 px-3 text-gray-500 hover:text-white">create</a>
            </Link>
            <Link href="/my-assets">
              <a className="py-5 px-3 text-gray-500 hover:text-white">my assets</a>
            </Link>
            <Link href="/creator-dashboard">
              <a className="py-5 px-3 text-gray-500 hover:text-white">creator dashboard</a>
            </Link>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
