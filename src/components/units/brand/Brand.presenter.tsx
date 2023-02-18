import InfiniteScroll from "react-infinite-scroller";
import { NoImageUploadWrapper } from "../detail/Detail.style";
import { FETCH_USED_ITEMS } from "./Brand.queries";
import {
  Arrival,
  Carrusel,
  Comment,
  HeartIcon,
  InfiniteWrapper,
  ListBoxImg,
  ListWrapper,
  ListWrapperMain,
  Price,
  Shop,
  Status,
  SubmitButton,
  Title,
} from "./Brand.style";

export default function BrandPageUI(props: any) {
  return (
    <div style={{ background: "#ffffff" }}>
      <div>
        <div
          style={{
            fontSize: "20px",
            width: "100%",
            fontWeight: "700",
            textAlign: "center",
            paddingTop: "10px",
          }}
        >
          BEST
        </div>

        <Carrusel>
          {props.data?.fetchUseditems.slice(0, 4).map((el: any, i: any) => (
            <ListWrapper
              onClick={props.onClickMoveToDetail}
              id={el._id}
              key={i}
            >
              <ListBoxImg
                id={el._id}
                onClick={props.onClickMoveToDetail}
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
              <HeartIcon />
              <Comment>
                <Title>{el.tags}</Title> <Price>{el.price}원</Price>
                <Shop>{el.name}</Shop>
                <Status>[당일출고/주문폭주]{el.remarks}</Status>
              </Comment>
            </ListWrapper>
          ))}
        </Carrusel>

        <Arrival>
          <SubmitButton onClick={props.onClickMoveToSubmit}>
            상품등록
          </SubmitButton>
        </Arrival>
        <InfiniteWrapper>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
          >
            <ListWrapperMain>
              {props.data?.fetchUseditems.map((el: any, i: any) =>
                props.data?.fetchUseditems[0] !== "" ? (
                  <ListWrapper
                    id={el._id}
                    key={i}
                    onClick={props.onClickMoveToDetail}
                  >
                    <ListBoxImg
                      id={el._id}
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                    <HeartIcon />
                    <Comment>
                      <Title>{el.tags}</Title> <Price>{el.price}원</Price>
                      <Shop>{el.name}</Shop>
                      <Status>[당일출고/주문폭주]{el.remarks}</Status>
                    </Comment>
                  </ListWrapper>
                ) : (
                  <NoImageUploadWrapper src="/imageBox.png" />
                )
              )}
            </ListWrapperMain>
          </InfiniteScroll>
        </InfiniteWrapper>
      </div>
    </div>
  );
}
