import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";
import { UPDATE_USED_ITEM_QUESTION_ANSWER } from "../../../commons/hooks/mutation/useUpdateUseditemQuestionAnswer";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../answerList/AnswerList.container";
import AnswerUI from "./Answer.presenter";

export const CREATE_USER_ITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $useditemQuestionId: ID!
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
  ) {
    createUseditemQuestionAnswer(
      useditemQuestionId: $useditemQuestionId
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
    ) {
      _id
    }
  }
`;

export default function AnswerWrite(props) {
  const [contents, setContents] = useState("");
  const router = useRouter();
  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USER_ITEM_QUESTION_ANSWER);

  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEM_QUESTION_ANSWER);

  const updateAnswer = async (data: any, useditemQuestionAnswerId: any) => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId,
          updateUseditemQuestionAnswerInput: {
            ...data,
          },
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickWrite = async () => {
    if (typeof router.query.productId !== "string") return;

    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { contents },
          useditemQuestionId: props.useditemQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemId: String(router.query.productId),
              page: 1,
            },
          },
        ],
      });

      alert("성공");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(String(event.target.value));
  };

  return (
    <AnswerUI
      onClickWrite={onClickWrite}
      updateAnswer={updateAnswer}
      onChangeContents={onChangeContents}
    ></AnswerUI>
  );
}
