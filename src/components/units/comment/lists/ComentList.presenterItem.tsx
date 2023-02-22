import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../commons/stores";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import AnswerWrite from "../answer/Answer.container";
import AnswerList from "../answerList/AnswerList.container";

import CommentWrite from "../write/CommnetWrite.container";

import {
  Comment2,
  CommentName,
  CommentWrapper,
  Day,
  DeleteButton,
  EditButton,
} from "./ComentList.style";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTION,
} from "./CommentList.queries";

export default function CommentListItemUI(props: any) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isUpdateId, setIsUpdateId] = useState("");
  const [isanswer, setIsAnswer] = useState(false);

  const [infoUser] = useRecoilState(infoUserState);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USEDITEM_QUESTION);

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION,
            variables: {
              useditemId: String(router.query.productId),
              page: 1,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdateComment = (updateId: string) => (event) => {
    setIsUpdateId(updateId);
  };

  const onClickOpenAnswer = () => {
    setIsAnswer((prev) => !prev);
  };

  return (
    <>
      {isUpdateId !== props.el._id ? (
        <>
          <CommentWrapper>
            <CommentName>{props.el?.user.name}</CommentName>
            <Comment2>{props.el?.contents} </Comment2>
            <Day>2022 03 30</Day>

            {infoUser._id === props.el?.user._id ? (
              <>
                <EditButton
                  src="/Vector3.png"
                  onClick={onClickUpdateComment(props.el._id)}
                />
                <DeleteButton src="/Vector.png" onClick={onClickDelete} />
              </>
            ) : (
              <img
                src="/Vector4.png"
                style={{ cursor: "pointer" }}
                onClick={onClickOpenAnswer}
              />
            )}
          </CommentWrapper>
        </>
      ) : (
        <CommentWrite
          defaultValue={props.el?.contents}
          useditemQuestionId={isUpdateId}
          isEdit={true}
          onClickUpdateComment={onClickUpdateComment}
        />
      )}{" "}
      <AnswerList useditemQuestionId={props.el._id} />
      {isanswer ? <AnswerWrite useditemQuestionId={props.el._id} /> : <></>}
    </>
  );
}
