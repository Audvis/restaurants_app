import styled from '@emotion/styled';

const Li = styled.li`
    background-color: red;
    margin: 2rem;
    padding: .5rem;
    border-radius: 10px;
`;

const TypesCard = ( { food_type } ) => {
    return (
        <>
            <Li>{food_type.name}</Li>
        </>
    )
}

export default TypesCard
