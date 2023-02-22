import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import { useAuth } from "../../commons/hooks/customs/useAuth";
import MainPageUI from "./Brand.presenter";
import { FETCH_USED_ITEMS } from "./Brand.queries";
import { useEffect } from "react";

export default function BrandPage() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);
  console.log(data);

  const onLoadMore = () => {
    if (data === undefined) return;
    console.log(data.fetchUseditems.length);
    void fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchUseditems === undefined)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickMoveToDetail = (event) => {
    console.log(event.currentTarget.id);
    void router.push(`/main/${event.currentTarget.id}`);
  };

  const onClickMoveToSubmit = () => {
    void router.push("/main/new");
  };

  return (
    <MainPageUI
      data={data}
      onLoadMore={onLoadMore}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickMoveToSubmit={onClickMoveToSubmit}
    />
  );
}
