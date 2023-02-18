import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../commons/types/generated/types";
import { FETCH_USED_ITEMS } from "../main/Main.queries";
import DetailUI from "./Detail.presenter";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      contents
      remarks
      name
      price
      tags
      images
      pickedCount
    }
  }
`;

const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export default function Detail() {
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const onClickMoveToBoardEdit = () => {
    if (typeof router.query.productId !== "string") {
      alert("올바르지 않은 게시글 아이디입니다.");
      return;
    }

    void router.push(`/main/${router.query.productId}/edit`);
  };
  const router = useRouter();

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productId) },
  });
  console.log(data);

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickDeleteItem = (useditemId: string) => async (event: string) => {
    try {
      await deleteUseditem({
        variables: {
          useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
          },
        ],
      });

      router.push("/");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <DetailUI
      data={data}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onClickDeleteItem={onClickDeleteItem}
    ></DetailUI>
  );
}
