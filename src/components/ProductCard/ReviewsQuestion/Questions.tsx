import { useTranslation } from "react-i18next";
import { SortType, useSorter } from "../../../redux/hooks/sorters";
import {
  AnswerHr,
  AnswerItemWrap,
  AnswerWrap,
  ReplyUserButton,
  ReviewHeaderFooterWrap,
  ReviewItemToRateWrap,
  ReviewItemWrap,
  ReviewRateWrap,
} from "./ReviewsQuestion.styled";
import {
  IconThumbsDown,
  IconThumbsUp,
  IconThumbsVector,
  TagReply,
} from "../../IconComponents/IconsCatalogue";
type Props = {
  // id: string | undefined;
  questions: Question[] | null;
  currentSorter: SortType;
  // setQuestions: React.Dispatch<React.SetStateAction<Question[] | null>>;
};
export type Question = {
  id: string;
  comment: {
    id: string;
    message: string;
    creatingDate: string;
    userInfo: string;
    answer: {
      comment: {
        id: string;
        message: string;
        creatingDate: string;
        userInfo: string;
        answer: {};
      };
    };
  };
  photosUri: string[];
};

const Questions = ({ questions, currentSorter }: Props) => {
  // const [questions, setQuestions] = useState<Question[] | null>(null);
  const { t } = useTranslation();
  const sorter = useSorter(currentSorter)
  return (
    <>
      {questions && (
        <>
          {questions.sort(sorter).map((obj: Question) => (
            <ReviewItemWrap key={obj.comment.id}>
              <ReviewHeaderFooterWrap>
                <ReviewRateWrap>{obj.comment.userInfo}</ReviewRateWrap>
                {obj.comment.creatingDate}
              </ReviewHeaderFooterWrap>
              <p>{obj.comment.message}</p>
              <ReviewHeaderFooterWrap>
                <ReplyUserButton>
                  {t("Reply")} {obj.comment.userInfo}
                </ReplyUserButton>
                <ReviewItemToRateWrap>
                  <IconThumbsUp />
                  <IconThumbsVector />
                  <IconThumbsDown />
                </ReviewItemToRateWrap>
              </ReviewHeaderFooterWrap>
              {obj.comment.answer && (
                <AnswerItemWrap key={obj.comment.answer.comment.id}>
                  <AnswerHr />
                  <ReviewHeaderFooterWrap>
                    <ReviewRateWrap>
                      <AnswerWrap>
                        <TagReply />
                        {t("Reply to")} {obj.comment.userInfo}
                      </AnswerWrap>
                      {obj.comment.answer.comment.userInfo}
                    </ReviewRateWrap>
                    {obj.comment.answer.comment.creatingDate}
                  </ReviewHeaderFooterWrap>
                  <p>{obj.comment.answer.comment.message}</p>
                  <ReviewHeaderFooterWrap>
                    <ReplyUserButton>
                      {t("Reply")} {obj.comment.answer.comment.userInfo}
                    </ReplyUserButton>
                    <ReviewItemToRateWrap>
                      <IconThumbsUp />
                      <IconThumbsVector />
                      <IconThumbsDown />
                    </ReviewItemToRateWrap>
                  </ReviewHeaderFooterWrap>
                </AnswerItemWrap>
              )}
            </ReviewItemWrap>
          ))}
        </>
      )}
    </>
  );
};

export default Questions;
