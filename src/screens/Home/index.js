import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Suggestions from "../../components/Suggestions";

import { Wrapper, Header, BalanceContainer, BalanceTitle, Balance, Container } from "./styles";

export default function Home() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <AntDesign name="qrcode" size={30} color="#10c86e" />

                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>

                    <AntDesign name="gift" size={30} color="#10c86e" />
                </Header>

                <Suggestions></Suggestions>
            </Container>
        </Wrapper>
    );
}