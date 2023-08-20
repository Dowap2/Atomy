import React from "react";
import styled from "styled-components";
import logo from "./img/atomy_logo.png";
import language from "./img/language.svg";

const HeaderComponent = styled.div`
  background: ${(props) => props.theme.white};
  width: 100vw;
  border-bottom: 2px solid ${(props) => props.theme.atomyBlue};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  height: 40px;
  margin: 10px;
`;
const Language = styled.img`
  margin: 10px;
  height: 30px;
  color: ${(props) => props.theme.atomyDarkGray};
`;

export function Header() {
  return (
    <HeaderComponent>
      <Logo src={logo}></Logo>
      <Language src={language}></Language>
    </HeaderComponent>
  );
}
