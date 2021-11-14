import { useState } from "react";
import API from "../../api/api";
interface IReview {
  slug: any;
  setChangeState: any;
}

const CreateReview: React.FC<IReview> = ({ slug, setChangeState }) => {
  //state________________________________________________________________
  const [Review, setReview] = useState({
    restaurant: slug,
    rating: "",
    comments: "",
    email: "",
  });
  const { rating, comments, email } = Review;

  //functions_____________________________________________________________
  const updateReview = (e) => {
    setReview({ ...Review, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //validate email
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email");
      return;
    }
    //validate comments
    if (comments.length < 10 || comments.length > 100) {
      alert("Please enter at least 10 characters and maximum 100 characters");
      return;
    }
    //validate rating
    if (rating === "") {
      alert("Please enter a rating");
      return;
    }
    const postReview = async () => {
      try {
        let config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "en",
          },
          body: JSON.stringify(Review),
        };
        let res = await fetch(`${API}reviews/`, config);
        let json = await res.json();
        setChangeState(true);
        setChangeState(false);
      } catch (err) {
        console.log(err);
      }
    };
    postReview();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="">Email</label>
        <input type="text" name="email" value={email} onChange={updateReview} />
      </div>
      <div>
        <label htmlFor="">Comment</label>
        <textarea
          name="comments"
          value={comments}
          onChange={updateReview}
        ></textarea>
      </div>
      <div>
        <label htmlFor="">Rating</label>
        <select name="rating" value={rating} onChange={updateReview}>
          <option value="">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default CreateReview;
