import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;

  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
    gap: 100px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-left: 500px;
`;
export const StyledLink = styled(NavLink)`
  font-size: 16px;
  text-decoration: none;
  color: #00212f;
  font-weight: 600;
  &.active {
    color: tomato;
    letter-spacing: 4px;
    transform: scale(1.5);
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;
export const Logo = styled(NavLink)`
  text-decoration: none;
  color: #00212f;
`;
