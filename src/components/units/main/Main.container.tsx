import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import MainPageUI from "./Main.presenter";
import { FETCH_USED_ITEMS } from "./Main.queries";

export default function MainPage() {
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

  return (
    <MainPageUI
      data={data}
      onLoadMore={onLoadMore}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
