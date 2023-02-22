import InfiniteScroll from "react-infinite-scroller";
import AnswerListItemUI from "./AnswerList.presenterItem";

export default function QuestionAnswerListUI(props) {
  console.log(props.data);
  console.log("===================");

  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchUseditemQuestionAnswers.map((el, idx) => (
        <AnswerListItemUI key={el._id} el={el} idx={idx} />
      )) ?? <div></div>}
    </InfiniteScroll>
  );
}
