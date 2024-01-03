
import { Stars } from "./StarRating.styled";
type Props = {rating: number}

const StarRatingFixed = ({rating}:Props) => {


  return (
    <Stars
      size={32}
      initialValue={rating}
    />
  );
};
export default StarRatingFixed;

