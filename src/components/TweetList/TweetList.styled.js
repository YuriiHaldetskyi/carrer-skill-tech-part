import styled from "@emotion/styled";
export const Cards = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ListItem = styled.li`
  position: relative;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: cover;
  display: flex;
  width: 380px;
  justify-content: center;

  padding-top: 178px;
  padding-bottom: 36px;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  &:before {
    content: "";
    width: 308px;
    height: 156px;
    z-index: 100;
    position: absolute;
    top: 28px;
    left: 36px;
  }
  &:after {
    content: "";
    width: 76px;
    height: 23px;
    z-index: 100;
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;
