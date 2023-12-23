// import { useLocation, useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
// import {
//   NavList,
//   NavItem,
//   NavLink,
// } from "./../../../pages/ProductPage/ProductPage.styled";
// import { Outlet } from "react-router-dom";
// import StarRating from "../../StarRating/StarRating";
import { useState, useEffect } from "react";

// https://run.mocky.io/v3/6f3be700-72d1-46f3-9b3e-4e3a832c8a9f
// https://designer.mocky.io/manage/delete/6f3be700-72d1-46f3-9b3e-4e3a832c8a9f/IMvtgVX3J9gcGVLF4EINejOZRE7ZCVoz0QgQ
type Review = {
  id: string;
  rating: number;
  pluses: string;
  minuses: string;
  comment: {
    id: string;
    message: string;
    creatingDate: string;
    userInfo: string;
    answer: string;
  }[];
  tags: string[];
  photosUri: string[];
  countOfLikes: number;
  countOfDislikes: number;
};
const ReviewsQuestion = () => {
  const { id } = useParams();
  const [tags, setTags] = useState<string[]>([]);
  // const location = useLocation();
  const [reviews, setReviews] = useState<Review[] | null>(null);

  // const [newReview, setNewReview] = useState<Review>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const jsonPath =
        //   "https://run.mocky.io/v3/6f3be700-72d1-46f3-9b3e-4e3a832c8a9f";
        const jsonPath = "../../src/data/reviews.json";
        const response = await fetch(jsonPath);

        const json = await response.json();
        const foundReview = json.filter((obj: Review) => obj.id === id);
        if (foundReview) {
          setReviews(foundReview);
          const allTags = Array.from(
            new Set(
              foundReview.flatMap(
                (review: Review) => review.tags
              ) as unknown as string[]
            )
          );
          console.log("All Tags:", allTags);
          setTags(allTags);
        } else {
          console.warn(`Review with id ${id} not found.`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);
  console.log(reviews);
  return (
    <>
      {/* <div>
        <StarRating />
      </div> */}
      <div>Tags </div>
      {reviews && (
        <>
          {tags.map((tag: string, i) => (
            <div key={i}>{tag}</div>
          ))}
        </>
      )}
      {/* <NavList>
        <NavItem>
          <NavLink to="reviews" state={{ from: location }}>
            Reviews
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="reviews/questions" state={{ from: location }}>
            Questions
          </NavLink>
        </NavItem>
      </NavList>
      <Outlet /> */}
      <div>
        Reviews with images
        {reviews && (
          <>
            {(
              reviews.flatMap(
                (review: Review) => review.photosUri
              ) as unknown as string[]
            ).map((image: string, i: number) => (
              <div key={i}>
                <img src={image} alt="item-photo" />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};
export default ReviewsQuestion;
