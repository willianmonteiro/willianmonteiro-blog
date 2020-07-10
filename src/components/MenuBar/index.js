import React, { useEffect, useState } from "react"
import { Container, MenuBarGroup, MenuBarItem, MenuBarLink } from './styled'

import { Home } from '@styled-icons/typicons/Home'
import { Moon } from '@styled-icons/boxicons-regular/Moon'
import { Sun } from '@styled-icons/heroicons-outline/Sun'

import { ThList as List } from '@styled-icons/typicons/ThList'
import { GridAlt as Grid } from '@styled-icons/boxicons-solid/GridAlt'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'

const MenuBar = () => {
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
  

  const scrollToTop = () => typeof window !== 'undefined' && window && window.scrollTo({top: 0, behavior: 'smooth'});
  
    return (
      <Container>
        <MenuBarGroup>

          <MenuBarLink to='/' title='Home'>
            <MenuBarItem>
              <Home />
            </MenuBarItem>
          </MenuBarLink>
          
          <MenuBarLink to='/search' title='Search'>
            <MenuBarItem>
              <Search />
            </MenuBarItem>
          </MenuBarLink>
            
          <MenuBarItem
            title='Mudar o tema'
            onClick={() => {
              window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
            }}
            className={theme}
          >
            {isDarkMode ? <Sun /> : <Moon/>}
          </MenuBarItem>
          
          {(path && (path === '/' || path === '/search' || path.includes('/page/'))) && (
              <MenuBarItem
              title='Mudar visualização'
              onClick={() => window.__setPreferredDisplay(isListMode ? 'grid' : 'list')}
              className={display}
            >
              {isListMode ? <Grid /> : <List/>}
            </MenuBarItem>
          )}


          <MenuBarItem
            title='go-to-top'
            onClick={scrollToTop}
            className='scrollToTop'
          >
            <Arrow/>
          </MenuBarItem>
        </MenuBarGroup>
      </Container>
    )
}

export default MenuBar