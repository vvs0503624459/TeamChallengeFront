import { useState } from "react";
// import { Rating } from "react-simple-star-rating";

import { Stars } from "./StarRating.styled";
// import Rating from '@mui/material/Rating';

type Props = {
  rate: number,
  readonly: boolean,
  size: number
}

const StarRating = ({rate, readonly, size }: Props) => {
  // let result = phone.map(({stars}) => {

  // });
  //  console.log(result)
  // const [value, setValue] = React.useState<number | null>(2);

  // Catch Rating value

  const [rating, setRating] = useState(rate);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);
  return (
    <Stars
      size={size}
      initialValue={rating}
      onClick={handleRating}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerMove={onPointerMove}
      readonly={readonly}
    />
  );
};
export default StarRating;

{
  /* <Rating
name="size-small"
 defaultValue={2} 
 size="small"
value={rating}
onClick={handleRating}
onChange={handleRating}
/> */
}
