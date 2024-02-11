import React, { Suspense, lazy, useState } from 'react'
import { Link } from 'react-router-dom'
import routes from '../../data/routes'

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'))

const Hamburger: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className='hamburger-container'>
      <nav className='main' id='hambuger-nav'>
        <ul>
          {open ? (
            <li className='menu close-menu'>
              <button type='button' name='Close Menu' onClick={() => setOpen(!open)}>
                <div className='menu-hover'>&#10005;</div>
              </button>
            </li>
          ) : (
            <li className='menu open-menu'>
              <button type='button' name='Open Menu' onClick={() => setOpen(!open)}>
                <div className='menu-hover'>&#9776;</div>
              </button>
            </li>
          )}
        </ul>
      </nav>
      <Suspense fallback={<> </>}>
        <Menu right isOpen={open}>
          <ul className='hamburger-ul'>
            {routes.map(l => (
              <li key={l.label}>
                <Link to={l.path} onClick={() => setOpen(!open)}>
                  <h3 className={l.index ? 'index-li' : ''}> {l.label} </h3>
                </Link>
              </li>
            ))}
          </ul>
        </Menu>
      </Suspense>
    </div>
  )
}

export default Hamburger
