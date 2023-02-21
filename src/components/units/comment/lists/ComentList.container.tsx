import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import CommentListUI from "./ComentList.presenter";
import { FETCH_USEDITEM_QUESTION } from "./CommentList.queries";

export default function CommentList(props: any) {
  const router = useRouter();
  if (typeof router.query.productId !== "string") {
    console.log("잘못된 접근");
    return <></>;
  }
  console.log(router.query.productId);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTION, {
    variables: {
      useditemId: router.query.productId,
      page: 1,
    },
  });

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return <CommentListUI data={data} onLoadMore={onLoadMore}></CommentListUI>;
}
