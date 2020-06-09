import React, { useEffect, useState } from 'react'

import { Container, MenuBarGroup, MenuBarItem, MenuBarLink } from './styled'
import { Home } from '@styled-icons/typicons/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { LightBulb as Light } from '@styled-icons/entypo/LightBulb'
import { Grid } from '@styled-icons/boxicons-solid/Grid'
import { ThList as List } from '@styled-icons/typicons/ThList'

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)
  
  const isDarkMode = theme === 'dark'
  const isListMode = theme === 'list'
  
  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)
    
    
    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setTheme(window.__display)
  }, [])
  
  return (
    <Container>
      <MenuBarGroup>
        <MenuBarLink to='/' title='Back to home'>
          <MenuBarItem>
            <Home />
          </MenuBarItem>
        </MenuBarLink>
  
        <MenuBarLink to='/search' title='Search'>
          <MenuBarItem>
            <Search />
          </MenuBarItem>
        </MenuBarLink>
      </MenuBarGroup>
  
      <MenuBarGroup>
        <MenuBarItem 
          title='Mudar o tema'
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
          className={theme}
        >
          <Light />
        </MenuBarItem>
        <MenuBarItem
          title='Mudar visualização'
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
          }}
          className={display}
        >
          {isListMode ? <Grid /> : <List />}
        </MenuBarItem>
        <MenuBarItem title='go-to-top'>
          <Arrow/>
        </MenuBarItem>
      </MenuBarGroup>
    </Container>
  );
}

export default MenuBar;