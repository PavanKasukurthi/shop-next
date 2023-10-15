import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
import { useEffect, useState } from 'react'

const themes = {
  pastel: 'pastel',
  business: 'business',
}

const getThemeFromLocalStorage = () => {
  return localStorage.getItem('theme') || themes.winter
}

const NavBar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage())

  const handleTheme = () => {
    const { pastel, business } = themes
    const newTheme = theme === pastel ? business : pastel
    setTheme(newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        {/* NAVBAR START */}
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            S
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        {/* NAVBAR CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>

        {/* NAVBAR END */}
        <div className="navbar-end">
          {/* THEME SWITCH */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />

            <BsMoonFill className="swap-off h-4 w-4" />
          </label>

          {/* CART LINK */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
export default NavBar