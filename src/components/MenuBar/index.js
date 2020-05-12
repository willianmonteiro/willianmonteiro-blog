import React from 'react'

import { Container, MenuBarGroup, MenuBarItem, MenuBarLink } from './styled'
import { Home } from '@styled-icons/typicons/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { LightBulb as Light } from '@styled-icons/entypo/LightBulb'
import { Grid } from '@styled-icons/boxicons-solid/Grid'

const MenuBar = () => (
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
      <MenuBarItem title='change-theme'>
        <Light />
      </MenuBarItem>
      <MenuBarItem title='change-view'>
        <Grid />
      </MenuBarItem>
      <MenuBarItem title='go-to-top'>
        <Arrow/>
      </MenuBarItem>
    </MenuBarGroup>
  </Container>
);

export default MenuBar;