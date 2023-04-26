import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, StyledLink, Navigation, Logo } from "./SharedLayout.styled";
import { FiTwitter } from "react-icons/fi";

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Logo to="/">
          <FiTwitter size="40"></FiTwitter>
        </Logo>
        <Navigation>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/tweets">Tweets</StyledLink>
        </Navigation>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
