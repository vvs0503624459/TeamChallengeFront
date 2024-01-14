import { Review } from "./ReviewsQuestion";

type Props = {
  questions: Review[] | null;
};

const Questions = ({ questions }: Props) => {
  return (
    <div>
      {questions && (
        <>
          {questions.map((obj: Review) => (
            <div key={obj.comment.id}>{obj.comment.userInfo}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default Questions;
