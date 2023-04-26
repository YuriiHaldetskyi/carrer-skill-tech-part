import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const GoBackBtn = styled(Link)`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 80px;
  padding: 8px 18px;
  background-color: #ebd8ff;
  text-decoration: none;
  color: black;
  font-size: 12px;
  font-weight: 500;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  :hover {
    background-color: #5cd3a8;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
