import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { infoUserState } from "../../../../commons/stores";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../../../commons/hooks/queries/useFetchUseditemQuestionAnswers";
import { DELETE_USED_ITEM_ANSWER } from "../../../commons/hooks/mutation/useDeleteUseditemQuestionAnswer";
import CommentWrite from "../write/CommnetWrite.container";
import AnswerWrite from "../answer/Answer.container";
import {
  AnswerDeleteButton,
  AnswerEditButton,
  CommenAnswertWrapper,
  CommentAnswer2,
  CommentAnswerName,
  AnswerDayMan,
} from "./AnswerList.styles";
import { useRecoilState } from "recoil";
import { Modal } from "antd";

export default function AnswerListItemUI(props) {
  console.log(props.el);

  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isUpdateId, setIsUpdateId] = useState("");

  console.log(props.el);
  const [infoUser] = useRecoilState(infoUserState);

  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USED_ITEM_ANSWER);

  const onClickUpdateComment = (updateId: string) => (event) => {
    setIsUpdateId(updateId);
    setIsEdit((prev) => !prev);
  };

  const onDeleteItemQuestionAnswer =
    (useditemQuestionAnswerId) => async (event) => {
      try {
        await deleteUseditemQuestionAnswer({
          variables: {
            useditemQuestionAnswerId,
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUseditemQuestionsAnswers: (prev) => {
                  const deletedId = data.deleteUseditemQuestionAnswer;
                  const filteredPrev = prev.filter(
                    (el) => !el.__ref.includes(deletedId)
                  );
                  return [...filteredPrev];
                },
              },
            });
          },
        });
        Modal.success({ content: "답변이 삭제되었습니다" });
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    };

  return (
    <>
      {isUpdateId !== props.el?._id ? (
        <>
          <CommenAnswertWrapper>
            <CommentAnswerName>답변</CommentAnswerName>
            <CommentAnswer2>{props.el?.contents} </CommentAnswer2>
            <AnswerDayMan>2022 03 30</AnswerDayMan>

            {infoUser._id === props.el?.user._id ? (
              <>
                <AnswerEditButton
                  src="/Vector3.png"
                  onClick={onClickUpdateComment(props.el?._id)}
                />
                <AnswerDeleteButton
                  src="/Vector.png"
                  onClick={onDeleteItemQuestionAnswer(props.el?._id)}
                />
              </>
            ) : (
              <></>
              // <img src="/Vector4.png" style={{ cursor: "pointer" }} />
            )}
          </CommenAnswertWrapper>
        </>
      ) : (
        <AnswerWrite
          defaultValue={props.el?.contents}
          useItemQuestionAnswerId={isUpdateId}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          onClickUpdateComment={onClickUpdateComment}
        />
      )}
    </>
  );
}
