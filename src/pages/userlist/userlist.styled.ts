import styled from "styled-components";

interface Props {
  display?: any;
  marginLeft?: any;
}

export const Describe = styled.td<Props>`
  width: 20%;
  text-align: left;

  @media (max-width: 800px) {
    display: ${({ display }) => display && `${display}`};
    margin-left: ${({ marginLeft }) => marginLeft && `${marginLeft}`};
    width: 25%;
  }
`;

export const ListDescribe = styled.td<Props>`
  color: white;
  text-transform: uppercase;
  margin-top: 7px;
  margin-bottom: 7px;
  padding-bottom: 3px;
  padding: auto 8px;
  width: 20%;
  font-size: 13px;

  @media (max-width: 800px) {
    display: ${({ display }) => display && `${display}`};
    width: 100%;
    text-align: center;
  }
`;

export const DivName = styled.th`
  margin: 5px 10px;
  display: flex;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 20px;
  background: #d41616;
  color: white;
  margin: 0;
  justify-content: space-between;

  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

export const ModalSignUp = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify: content: space-between; 
    padding: 8px 10px;
    width: 100%;

    @media(max-width:800px){
        width: 100%;
        padding: 8px 0px;
    }
`;

export const DivList = styled.table`
  tr:nth-child(odd) {
    background: rgb(27, 43, 74);
  }

  @media (max-width: 800px) {
    .mediaMobile {
      display: none;
    }
  }
`;

export const ListSign = styled.div`
  background: #d41616;
  color: white;
  padding: 10px 10px;
  margin: 10px;

  @media(max-width: 800px){
    padding: 0;
    font-size: 14px;
    margin: 20px 0;
    text-align: center;
    width: 100%;
  }
`;

export const List = styled.tr`
  margin: 0;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

const DivGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
  }

  .Loading {
    margin: 50px 0;
    @media (max-width: 800px) {
      display: flex;
      margin: 190px;
    }
  }
`;

export default DivGeneral;
