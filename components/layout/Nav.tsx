import Link from "next/link";
import styled from "@emotion/styled";

const Nave = styled.nav`
    display: flex;
    align-items: center;
    padding: 1rem;

`;

const Item = styled.p`
margin-right: 7px;
cursor: pointer;    
`;

const Nav = () => {
    return (
        <Nave>
            <Link href="/">
              <Item>Home</Item>  
            </Link>
            <Link href="/create/restaurant">
            <Item>Add</Item> 
            </Link>
            <Link href="/food_types">
            <Item>Food</Item> 
            </Link>
        </Nave>
    )
}

export default Nav
