import styled from 'styled-components'

const DivInfo = styled.div`
    display: flex;
    align-items: center;
    color: white;
    text-transform: uppercase;
    margin: 60px 0;
    
    h1 {
        margin: 0;
    }

    h2 {
        margin: 0;
    }

    .Icon {
        font-size: 60px;
        margin-right: 10px;
    }
`;

export const DivGeneral = styled.div`
    display: flex;
    flex-direction: column;

    @media(max-width: 800px){
        align-items: center;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 50px;
    width: 100%;
    margin: 40px 0;

    @media(max-width: 800px){
        flex-direction: column;
        padding: 0px 0px;
    }
`;

export default DivInfo;