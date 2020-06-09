import React from 'react'
import links from './content.js'
import { Container, MenuList, MenuItem, MenuLink } from './styled';

const MenuLinks = () => (
  <Container>
    <MenuList>
      {links.map((link, i) => (
        <MenuItem key={i}>
          <MenuLink 
            cover 
            direction='left' 
            bg='var(--background)' 
            duration={0.6} 
            to={link.url} 
            activeClassName='active'
          >
            {link.label}
          </MenuLink>
        </MenuItem>
      ))}
    </MenuList>
  </Container>
);

export default MenuLinks
