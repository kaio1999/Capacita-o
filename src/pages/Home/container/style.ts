import styled from 'styled-components'

interface Props {
    Fsize?: any;
}

const DivImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InputValues = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: papayawhip;
    border: none;
    border-radius: 3px;
`;

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
`;

export const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width:800px){
        display: none;
    }
`;

export const ModalSign = styled.div`
    display: flex;
    flex-direction: column;
    background: #f6f8ff;
    width: 40%;
    padding: 8px 10px;
    border-radius: 16px;
    box-shadow: 0px 0px 30px #545454;
`;

export const BtnSave = styled.button`
    width: 150px;
    font-size: 18px;
    border: none;
    background: #142968;
    color: white;
    border-radius: 10px;
    margin: 8px 0;
    display: flex;
    padding: 10px 0;
    align-self: center;
    justify-content: center;
    :hover {
        background: #0033ce;
        transition: background 0.5s;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 50px;

    @media(max-width: 800px){
        padding: 0px 0px;
        margin: 80px 0;
    }

    `;

export const LogoEvent = styled.img`
    height: 70%;
`;

export const Title = styled.h1<Props>`
    font-size: ${({ Fsize }) => Fsize ? `${Fsize}px` : 'auto'};
    text-transform: uppercase;
    color: ${({ color }) => color ? `${color}` : 'black'};
    strong {
        color:#c60401;
    }
`;

export const DivText = styled.div`
    line-height: 0;

    h2 {
        font-size: 20px;
    }
`;

export const Divided = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 25px 0;
`;

export const DivInput = styled.div`
    display: flex;
`;

export const Input = styled.input`
    background-color: transparent;
    border: 1px solid black;
    border-radius: calc(0.5 * var(--ntp-realbox-height));
    color: var(--search-box-text);
    font-family: inherit;
    font-size: inherit;
    outline: none;
    width: 100%;
    position: relative;
    margin: 5px 0px;
`;

export const Formulary = styled.form`
    display: flex;
    flex-direction: column;    
    label {
            display: flex;
            text-transform: uppercase;
        }
    .DivInput {
        margin-right: 10px;
    }
    .Select {
        width: 50%;
    }    
`;

export const ButtonSignUp = styled.button`
    font-size: 20px;
    color: white;
    border: none;
    background: #d51717;
    text-transform: uppercase;
    padding: 12px 33px;
    margin-top: 10px;
    cursor: pointer;
`;

export const Select = styled.select`
    background-color: transparent;
    border: 1px solid black;
    border-radius: calc(0.5 * var(--ntp-realbox-height));
    color: var(--search-box-text);
    font-family: inherit;
    font-size: inherit;
    outline: none;
    width: 100%;
    position: relative;
    margin: 5px 0px;
    `;

export default DivImage;