
import { Stars } from "./StarRating.styled";
type Props = {
  rating: number,
readonly: boolean,
}

const StarRatingFixed = ({rating, readonly}:Props) => {


  return (
    <Stars
      size={32}
      initialValue={rating}
      readonly={readonly}
    />
  );
};
export default StarRatingFixed;

