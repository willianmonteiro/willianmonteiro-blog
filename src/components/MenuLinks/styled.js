import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.nav``
export const MenuList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  list-style: none;
`
export const MenuItem = styled.li`
  padding: 0.5rem 0;
  
  .active {
    color: #1fa1f3;
  }
`
export const MenuLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;
  
  &:hover {
    color: #1fa1f2;
  }
`



