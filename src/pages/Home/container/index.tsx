import React from 'react'
import DivImage, { LogoEvent, Container, ContainerLeft, Title, ContainerRight } from './style'
import SignIn from '../../../components/SignIn'
const Body = () => {


    return (
        <>
            <Container>
                <ContainerLeft>
                    <DivImage>
                        <Title Fsize={40} color="white">Seminário</Title>
                        <LogoEvent src="../assets/logoEvent.jpeg" />
                    </DivImage>
                </ContainerLeft>
                <ContainerRight>
                    <SignIn />
                </ContainerRight>
            </Container>
        </>
    )
}

export default Body