import React from 'react';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { 
    Container,
    Header,
    LogImg,
    MenuContainer,
    MenuItemLink,
    Title,
    MenuItemButton
} from './styles';

import {
    MdDashboard,
    MdExitToApp
} from 'react-icons/md'

const Aside: React.FC = () =>{
    const {signOut} = useAuth();

    return( 
        <Container menuIsOpen={false}>
            <Header>
                <LogImg src={logoImg} alt="Meu logo"/>
                <Title>Conversor de moedas</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard/>
                    Conversor 
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>
                   <MdExitToApp/>
                    Sair
                </MenuItemButton>
            </MenuContainer>
        </Container>
    );
}

export default Aside;