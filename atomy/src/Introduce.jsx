import React from "react";
import styled from "styled-components";
import profile from "./img/profile.jpg";
import instagramLogo from "./img/instagram.png";
import kakaotalkLogo from "./img/kakao-talk.png";
import phoneLogo from "./img/phone.png";

const IntroduceComponent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
const ImageComponent = styled.div`
  width: 120px;
  height: 120px;
  text-align: center;
  border-radius: 100%;
  overflow: hidden;
  border: 3px solid ${(props) => props.theme.atomyBlue};
`;
const ProfileImage = styled.img`
  width: 120px;
`;
const IntroduceTextComponent = styled.div`
  margin-top: 10px;
`;
const Info = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.atomyDarkGray};
  text-align: center;
`;
const Contact = styled.div`
  display: flex;
  width: 200px;
  margin-top: 10px;
  justify-content: space-between;
`;
const ContactIconComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.atomyBlue};
  border-radius: 20px;
`;
const ContactIcon = styled.img`
  width: 30px;
`;
export function Introduce() {
  return (
    <IntroduceComponent>
      <ImageComponent>
        <ProfileImage src={profile}></ProfileImage>
      </ImageComponent>
      <IntroduceTextComponent>
        <Info>오경태 Oh GyeongTae</Info>
        <Info>Hello Atomy</Info>
        <Contact>
          <ContactIconComponent>
            <ContactIcon src={instagramLogo} />
          </ContactIconComponent>
          <ContactIconComponent>
            {" "}
            <ContactIcon src={phoneLogo} />
          </ContactIconComponent>
          <ContactIconComponent>
            <ContactIcon src={kakaotalkLogo} />
          </ContactIconComponent>
        </Contact>
      </IntroduceTextComponent>
    </IntroduceComponent>
  );
}
