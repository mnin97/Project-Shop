import { FETCH_USED_ITEMS } from "./Main.queries";
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
} from "./Main.style";

export default function MainPageUI(props: any) {
  console.log(props.data?.fetchUseditems);
  return (
    <>
      <div>
        <Carrusel></Carrusel>
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
    </>
  );
}
