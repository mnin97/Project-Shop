import {
  Arrival,
  Comment,
  HeartIcon,
  ListBox,
  ListWrapper,
  ListWrapperMain,
  Price,
  Shop,
  Status,
  Title,
  Wrapper,
} from "./Main.style";

export default function MainPageUI() {
  return (
    <>
      <Wrapper></Wrapper>
      <Arrival>New Arrival</Arrival>
      <ListMan />
      <ListMan />
    </>
  );
}

function ListMan() {
  return (
    <ListWrapperMain>
      {new Array(4).fill(1).map(() => (
        <ListWrapper>
          <ListBox>
            <HeartIcon />
          </ListBox>
          <Comment>
            <Title>대표태그</Title> <Price>27,500</Price>
            <Shop>조이조이</Shop>
            <Status>[당일출고/주문폭주]노티드 캔버스 패브릭 가방 4color</Status>
          </Comment>
        </ListWrapper>
      ))}
    </ListWrapperMain>
  );
}
