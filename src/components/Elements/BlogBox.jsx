import React from "react";
import styled from "styled-components";

export default function BlogBox({ tag, title, text,button, action, author }) {
  return (
    <WrapperBtn className="animate pointer" onClick={action ? () => action() : null}>
      <Wrapper className="whiteBg radius8 shadow">
        <h3 className="font20 extraBold">{title}</h3>
        <p className="font13" style={{ padding: "30px 0" }}>
          {text}
        </p>
        <p className="font11 extraBold">{author}</p>
        <div className="flex">
          <p className="tag coralBg  extraBold">{tag}</p>
        </div>
        <ActionButton onClick={action}>{button}</ActionButton>
        
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;
const ActionButton = styled.button`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 70%;
  padding: -25px 0; /* Ajuster le padding pour centrer le texte verticalement */
  outline: none;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  margin: auto; /* Centrer horizontalement */
  display: block; /* Pour occuper toute la largeur */

  :hover {
    background-color: #580cd2;
    border-color: #580cd2;
  }
`;
