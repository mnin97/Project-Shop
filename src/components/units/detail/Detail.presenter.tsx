import {
  ButtonWrapper,
  BuyButton,
  Category,
  DetailBoy,
  DetailMan,
  Heart,
  ImageUpload,
  MyPage,
  Price,
  PriceName,
  ProductDes,
  ProductMan,
  ProductName,
  ShoppingBagButton,
  Tag,
  TagName,
  TitleWrapper,
  Wrapper,
} from "./Detail.style";

export default function DetailUI() {
  return (
    <>
      <Wrapper>
        <ImageUpload src="./Rectangle 20.png" />
        <TitleWrapper>
          <Category>AVANDRESS</Category>
          <ProductName>[SET] HERO TRACK WIDE SET-UP PURPLE</ProductName>
        </TitleWrapper>
      </Wrapper>
      <ProductMan>
        <PriceName>판매가</PriceName>
        <Price>153,900 원</Price>
        <MyPage>MY</MyPage>
        <Heart src="./heart.png" />
        <span>Product</span>
      </ProductMan>
      <ProductDes>
        <article>
          폴리에스테르 100% 원사로 스퀘어미터 450 밀도있게 편직하여 중량감과
          두께를 트레이닝복에 최적화시켰으며 덤블텐타가공으로 축율 및 뒤틀림을
          최소화 하였습니다. 수분을 빠르게 흡수하고 건조되도록 하였고 내마모성이
          좋습니다. 기계세탁이 가능하며 세탁 후 빠르게 건조되어 관리가
          용이합니다. 편직 가공에서 유연제 처리로 부드러운 터치감으로
          편안합니다.
        </article>
      </ProductDes>
      <TagName>
        <Tag>#트랙자켓 #아우터 #자켓</Tag>
      </TagName>
      <ButtonWrapper>
        <BuyButton>BUY NOW</BuyButton>
        <ShoppingBagButton>SHOPPING BAG</ShoppingBagButton>
      </ButtonWrapper>
      <DetailMan>
        <DetailBoy>DETAIL</DetailBoy>
      </DetailMan>
    </>
  );
}
