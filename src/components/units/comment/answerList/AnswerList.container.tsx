import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";
import QuestionAnswerListUI from "./AnswerList.presenter";
import AnswerListUI from "./AnswerList.presenterItem";

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      createdAt
      user {
        _id
        name
        picture
      }
    }
  }
`;

export default function AnswerList(props) {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.useditemQuestionId,
      page: 1,
    },
  });
  console.log(data);

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestionAnswers)
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestionAnswers],
          };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };
  return (
    <>
      <QuestionAnswerListUI
        useditemQuestionId={props.useditemQuestionId}
        data={data}
        fetchMore={fetchMore}
        onLoadMore={onLoadMore}
      ></QuestionAnswerListUI>
    </>
  );
}
