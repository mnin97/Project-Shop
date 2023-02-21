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
            variables: { useditemQuestionId: router.query.productId },
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
              <img src="/Vector4.png" />
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
      )}
    </>
  );
}
