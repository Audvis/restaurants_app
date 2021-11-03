import React from 'react';
import Nav from "./Nav";
import styled from "@emotion/styled";

const Container = styled.header`
    background-color: #333;
    color: #fff;
    padding: 1rem;

    @media (min-width: 768px) {
        padding: 2rem;
    }
`;

const Header = () => {
    return (
        <Container>
            <Nav />
        </Container>
    )
}

export default Header
