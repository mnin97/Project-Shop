import { FETCH_USED_ITEMS } from "./Brand.queries";
import {
  Arrival,
  Carrusel,
  Comment,
  HeartIcon,
  ListBoxImg,
  ListWrapper,
  ListWrapperMain,
  Price,
  Shop,
  Status,
  Title,
} from "./Brand.style";

export default function BrandPageUI(props: any) {
  console.log(props.data?.fetchUseditems);
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
          {props.data?.fetchUseditems.map((el: any, i: any) => (
            <ListWrapper id={el._id} key={i}>
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
        <Arrival>New Arrival</Arrival>
        <ListWrapperMain>
          {props.data?.fetchUseditems.map((el: any, i: any) => (
            <ListWrapper id={el._id} key={i}>
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
        </ListWrapperMain>
      </div>
    </div>
  );
}
