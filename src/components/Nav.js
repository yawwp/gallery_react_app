import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav(props) {
  return (
    <nav className="main-nav">
        <ul>
          <li>
            <NavLink to='cats' onClick={(e)=> {
                props.getData('cats')
              }} end>Cats</NavLink>
          </li>
          <li>
            <NavLink to='dogs' onClick={(e)=> {
                props.getData('dogs')
            }}>Dogs</NavLink>
          </li>
          <li>
            <NavLink to='computers' onClick={(e)=> {
                props.getData('computers')
            }}>Computers</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default Nav

