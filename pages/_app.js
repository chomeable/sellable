import '../styles/globals.css'
import Link from 'next/link'
import logo from '../public/logo.png'

function MyApp({ Component, pageProps }) {

  const openMenu = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  }

  return (
    <div>
      {/* <nav className="p-6 shadow-lg sticky top-0 bg-bglight text-white">
        <p className="text-4xl text-white font-bold">sellable</p>
        <div className="flex mt-4">
          <Link href="/" className="">
            <a className="mr-4 text-white p-2 rounded-xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 flex justify-center items-center">
              HOME
            </a>
          </Link>
          <Link href="/explore">
            <a className="mr-4 text-white p-2 rounded-xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 flex justify-center items-center">
              EXPLORE
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-4 text-white p-2 rounded-xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 flex justify-center items-center">
              SELL
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-4 text-white p-2 rounded-xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 flex justify-center items-center">
              MY ASSETS
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-4 text-white p-2 rounded-xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 flex justify-center items-center">
              CREATOR DASHBOARD
            </a>
          </Link>
        </div>
      </nav> */}
      <nav class="bg-bglight shadow-xl text-white">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-4">
              <div>
                <Link href="/">
                  <a class="flex items-center py-5 px-2 text-gray-300 hover:text-white">
                    <img src="logo.png" className="h-10 m-2" />
                    <span class="font-bold text-xl">sellable</span>
                  </a>
                </Link>
              </div>

              <div class="hidden md:flex items-center space-x-1">
                <Link href="/explore">
                  <a class="py-5 px-3 text-gray-500 hover:text-white">explore</a>
                </Link>
                <Link href="/create-item">
                  <a class="py-5 px-3 text-gray-500 hover:text-white">create</a>
                </Link>
                <Link href="/my-assets">
                  <a class="py-5 px-3 text-gray-500 hover:text-white">my assets</a>
                </Link>
                <Link href="/creator-dashboard" className="p-2">
                  <a class="py-5 px-3 text-gray-500 hover:text-white">creator dashboard</a>
                </Link>
              </div>
            </div>

            <div class="md:hidden flex items-center">
              <button class="mobile-menu-button" onClick={openMenu}>
                <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="mobile-menu hidden md:hidden">
          <div className="ml-3 pb-6">
            <Link href="/explore">
              <a class="py-5 px-3 text-gray-500 hover:text-white">explore</a>
            </Link>
            <Link href="/create-item">
              <a class="py-5 px-3 text-gray-500 hover:text-white">create</a>
            </Link>
            <Link href="/my-assets">
              <a class="py-5 px-3 text-gray-500 hover:text-white">my assets</a>
            </Link>
            <Link href="/creator-dashboard">
              <a class="py-5 px-3 text-gray-500 hover:text-white">creator dashboard</a>
            </Link>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
