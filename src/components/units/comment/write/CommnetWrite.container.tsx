import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { IUpdateUseditemQuestionInput } from "./CommentWrite.types";

import CommentWriteUI from "./CommnetWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./CommnetWrite.queries";

export const UPDATE_USER_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $useditemQuestionId: ID!
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
  ) {
    updateUseditemQuestion(
      useditemQuestionId: $useditemQuestionId
      updateUseditemQuestionInput: $updateUseditemQuestionInput
    ) {
      _id
    }
  }
`;

interface IRef {
  __ref: string;
}

export default function CommentWrite(props) {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [contents, setContents] = useState("");

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(String(event.target.value));
  };

  const onClickWrite = async () => {
    if (typeof router.query.productId !== "string") return;

    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: { contents },
          useditemId: router.query.productId,
        },
      });
      console.log(contents);
      alert("성공");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const updateUseditemQuestionSubmit = async () => {
    const updateUseditemQuestionInput: IUpdateUseditemQuestionInput = {};

    if (String(contents))
      updateUseditemQuestionInput.contents = String(contents);
    try {
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: props.useditemQuestionId,
          updateUseditemQuestionInput,
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <CommentWriteUI
      isEdit={props.isEdit}
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      updateUseditemQuestionSubmit={updateUseditemQuestionSubmit}
      onClickUpdateComment={props.onClickUpdateComment}
    />
  );
}
