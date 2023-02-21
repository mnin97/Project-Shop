import InfiniteScroll from "react-infinite-scroller";
import CommentListItemUI from "./ComentList.presenterItem";
import { CommentWrapper } from "./ComentList.style";

export default function CommentListUI(props) {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <CommentListItemUI key={el._id} el={el} />
      )) ?? <div></div>}
    </InfiniteScroll>
  );
}
