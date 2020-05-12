import React from 'react'
import links from './content.js'

import { Container, MenuList, MenuItem, MenuLink } from './styled';

const MenuLinks = () => (
  <Container>
    <MenuList>
      {links.map((link, i) => (
        <MenuItem key={i}>
          <MenuLink to={link.url} activeClassName='active'>
            {link.label}
          </MenuLink>
        </MenuItem>
      ))}
    </MenuList>
  </Container>
);

export default MenuLinks
