import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  height: 200px;
  min-width: 1200px;
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
  letter-spacing: 1em;
  background-color: #aaaaaa;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 200px;
  text-aligh: center;
`;
export const StyledLink = styled(NavLink)`
  color: rgb(0, 153, 255);
  :hover,
  :focus,
  &.active {
    color: yellow;
    letter-spacing: 15px;
    transform: scale(1.5);
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;
export const Logo = styled(NavLink)`
  text-decoration: none;
  color: #00212f;
`;
