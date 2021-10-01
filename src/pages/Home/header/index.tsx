import axios from "axios";
import React from "react";
import Container, { LogoIbav, BtnLink, DivBtn, BtnSign } from "./style";

interface Props {
  about?: boolean;
}

const Header = ({ about }: Props) => { 

  return (
    <Container>
      <LogoIbav src='../assets/logoIbav.jpeg' />      
      <DivBtn>
        <BtnLink onClick={() => (window.location.href = "/about.html")}>
          Sobre a capacitação
        </BtnLink>
        <BtnLink onClick={() => (window.location.href = "/userlist.html")}>
          Lista de inscritos
        </BtnLink>
        {about == true && (
          <BtnSign onClick={() => (window.location.href = "/")}>
            Inscreva-se
          </BtnSign>
        )}
      </DivBtn>
    </Container>
  );
};

export default Header;
