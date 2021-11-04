
const ReviewCard = ( { review } ) => {
    return (
        <>
             <li>
              <p>{review.comments}</p>
              <p>{review.email}</p>
              <p>{review.rating}</p>
            </li>
        </>
    )
}

export default ReviewCard
