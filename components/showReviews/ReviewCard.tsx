import styled from '@emotion/styled';

const Li = styled.li`
    background-color: #fffbbd;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    width: 100%;
    padding: 2rem;
    margin: 1rem;
    width: 100%;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 768px) {
        width: 50rem;
        display: block;
    }
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
      @media(min-width: 768px) {
        display: flex;
        flex-direction: row;
    justify-content: space-between;
    }
`;

const Email = styled.p`
    font-size: 1.5rem;
`;

const ReviewCard = ( { review } ) => {
    return (
        <>
             <Li>
                 <SubContainer>
              <Email>{review.email}</Email>
              <p>Rating: {review.rating}</p>
                 </SubContainer>
              <p>{review.comments}</p>
            </Li>
        </>
    )
}

export default ReviewCard
