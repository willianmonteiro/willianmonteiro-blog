import React, { useEffect, useState } from 'react'
import { Container, NavMenuGroup, NavMenuItem, NavMenuLink } from './styled'

import { Moon } from '@styled-icons/boxicons-regular/Moon'
import { Sun } from '@styled-icons/heroicons-outline/Sun'

import { ThList as List } from '@styled-icons/typicons/ThList'
import { GridAlt as Grid } from '@styled-icons/boxicons-solid/GridAlt'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { Home } from "@styled-icons/typicons/Home"

const NavMenu = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === 'dark'
  const isListMode = display === 'list'
  const path = typeof window !== 'undefined' && window && window.location ? window.location.pathname : ''

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)
    
    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])
    
    return (
      <Container>
        <NavMenuGroup>

          <NavMenuLink to='/' title='Home'>
            <NavMenuItem>
              <Home />
            </NavMenuItem>
          </NavMenuLink>
          
          <NavMenuLink to='/search' title='Search'>
            <NavMenuItem>
              <Search />
            </NavMenuItem>
          </NavMenuLink>
            
          <NavMenuItem
            title='Mudar o tema'
            onClick={() => {
              window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
            }}
            className={theme}
          >
            {isDarkMode ? <Sun /> : <Moon/>}
          </NavMenuItem>
          
          {(path && (path === '/' || path === '/search' || path.includes('/page/'))) && (
              <NavMenuItem
              title='Mudar visualização'
              onClick={() => {
                window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
              }}
              className={display}
            >
              {isListMode ? <Grid /> : <List/>}
            </NavMenuItem>
          )}
        </NavMenuGroup>
      </Container>
    )
}

export default NavMenu