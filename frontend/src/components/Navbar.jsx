import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent text-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 ring-1 ring-green-500/20">
            <span className="text-lg font-bold text-green-600">&lt;/&gt;</span>
          </div>
          <div className="leading-tight">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              <span className="text-green-600">Pass</span>OP
            </h1>
            <p className="text-xs text-gray-500">Secure Password Manager</p>
          </div>
        </div>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white/70 text-2xl text-gray-700 shadow-sm transition hover:bg-white hover:text-green-600"
        >
          <i className="ri-github-fill"></i>
        </a>
      </div>
    </nav>
  )
}

export default Navbar