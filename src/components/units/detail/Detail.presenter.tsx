import {
  Answer,
  AnswerMain,
  AnswerWrapper,
  ButtonWrapper,
  BuyButton,
  Category,
  Comment,
  Comment2,
  Comment3,
  CommentButton,
  CommentButtonWrapper,
  CommentMan,
  CommentManWrapper,
  CommentName,
  CommentWrapper,
  CommentWrapper2,
  CreateButton,
  Day,
  Day2,
  Day3,
  DeleteButton,
  DeleteButton2,
  DetailBoy,
  DetailMan,
  Edit2Button,
  EditButton,
  EditDeleteWrapper,
  Emergency,
  EmergencyMent,
  ExplainMan,
  Heart,
  ImageUpload,
  ImageWrapper,
  InputWrapper,
  LikeBtn,
  LikeBtnWrapper,
  LikeCount,
  MainButtonWrapper,
  MainContents,
  MainDeleteButton,
  MainInput,
  MapPosition,
  MyPage,
  NoImageUploadWrapper,
  Price,
  PriceName,
  ProductDes,
  ProductMan,
  ProductName,
  Ques,
  ShoppingBagButton,
  Tag,
  TagName,
  TitleWrapper,
  Wrapper,
} from "./Detail.style";
import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import CommentWrite from "../comment/write/CommnetWrite.container";
import CommentList from "../comment/lists/ComentList.container";
import InfiniteScroll from "react-infinite-scroller";

export default function DetailUI(props) {
  console.log(props.data?.fetchUseditem.images === "");
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          {props.data?.fetchUseditem.images
            .slice(0, 1)
            .map((el: string) =>
              props.data?.fetchUseditem?.images[0] === true ? (
                <NoImageUploadWrapper src="/imageBox.png" />
              ) : (
                <ImageUpload
                  key={uuidv4()}
                  src={`https://storage.googleapis.com/${el}`}
                />
              )
            )}
        </ImageWrapper>
        <TitleWrapper>
          <Category>AVANDRESS</Category>
          <ProductName>
            <div> {props.data?.fetchUseditem.name}</div>
          </ProductName>
          <EditDeleteWrapper>
            <Edit2Button
              src="/Vector3.png"
              onClick={props.onClickMoveToBoardEdit}
            />
            <DeleteButton2
              src="/Vector.png"
              onClick={props.onClickDeleteItem(props.data?.fetchUseditem._id)}
            />
          </EditDeleteWrapper>
        </TitleWrapper>
      </Wrapper>
      <ProductMan>
        <PriceName>판매가</PriceName>
        <Price> {props.data?.fetchUseditem.price} 원</Price>
        <MyPage>MY</MyPage>
        <LikeBtnWrapper>
          <Heart onClick={props.onClickLikeProduct} src="/heart.png" />
          <LikeCount>{props.data?.fetchUseditem.pickedCount}</LikeCount>

          <span>Product</span>
        </LikeBtnWrapper>
      </ProductMan>
      <ProductDes>
        <article>{props.data?.fetchUseditem.remarks}</article>
      </ProductDes>
      <TagName>
        <Tag>{props.data?.fetchUseditem.tags}</Tag>
      </TagName>
      <ButtonWrapper>
        <BuyButton onClick={props.onClickBuy(props.data?.fetchUseditem._id)}>
          BUY NOW
        </BuyButton>
        <ShoppingBagButton>SHOPPING BAG</ShoppingBagButton>
      </ButtonWrapper>
      <DetailMan>
        <DetailBoy>DETAIL</DetailBoy>
      </DetailMan>
      {props.data?.fetchUseditem.contents && (
        <MainContents
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
          }}
        ></MainContents>
      )}

      <Emergency>
        <span>배송/교환/반품/AS 관련 유의사항</span>

        <EmergencyMent>
          상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음
          안내사항보다 우선 적용됩니다.
        </EmergencyMent>
      </Emergency>

      <div>
        <MapPosition src="/map.png" />
      </div>

      <ExplainMan>
        상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이 달라집니다.
        상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은 배송이
        불가합니다. 상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품
        택배비 고객부담으로 왕복택배비가 발생합니다. (전자상거래 등에서의
        소비자보호에 관한 법률 제18조(청약 철회 등) 9항에 의거 소비자의 사정에
        의한 청약 철회 시 택배비는 소비자 부담입니다.) 주문완료 후 재고 부족
        등으로 인해 주문 취소 처리가 될 수도 있는 점 양해 부탁드립니다.
        반품/교환은 미사용 제품에 한해 배송완료 후 7일 이내에 접수하여 주십시오.
        제품을 사용 또는 훼손한 경우, 사은품 누락, 상품 TAG 보증서, 상품
        부자재가 제거 혹은 분실된 경우, 밀봉포장을 개봉했거나 내부 포장재를 훼손
        또는 분실한 경우(단, 제품확인을 위한 개봉 제외) 반품/교환이 불가합니다.
        A/S 기준이나 가능여부는 브랜드와 상품에 따라 다르므로 관련 문의는
        에이블리 고객센터를 통해 부탁드립니다. 상품불량에 의한 반품,교환, A/S,
        환불, 품질보증 및 피해보상 등에 관한 사항은
        소비자분쟁해결기준(공정거래위원회 고시)에 따라 받으실 수 있습니다.
      </ExplainMan>

      <Ques>
        <p>Q & A</p>
      </Ques>
      {/* <div>
        <Comment placeholder="내용을 입력해주세요." />
      </div>
      <CommentButtonWrapper>
        <CommentButton>작성하기</CommentButton>
      </CommentButtonWrapper>
      <CommentWrapper>
        <CommentName>노은정</CommentName>
        <Comment2>사이즈가 더 큰건 없나요? </Comment2>
        <Day>2022 03 30</Day>
        <EditButton src="/Vector3.png" />
        <DeleteButton src="/Vector.png" />
      </CommentWrapper>
      <AnswerWrapper>
        <Answer>답변</Answer>
        <Day2>2022 03 30</Day2>
        <AnswerMain>
          안녕하세요, 고객님! 저희 제품에 관심 가져주셔서 감사드립니다. 현재 더
          큰 사이즈 상품은 없습니다. 궁금하신 사항은 언제든지 문의 부탁드립니다.
          감사합니다.
        </AnswerMain>
      </AnswerWrapper>

      <CommentWrapper2>
        <CommentName>성시윤</CommentName>
        <Comment3>재입고 날짜... </Comment3>
        <Day3>2022 03 30</Day3>
        <DeleteButton src="/Vector4.png" />
      </CommentWrapper2>
      <InputWrapper>
        <MainInput placeholder="내용을 입력해주세요." />
      </InputWrapper> */}

      <CommentWrite />
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        <CommentManWrapper>
          <CommentMan>
            <CommentList />
          </CommentMan>
        </CommentManWrapper>
      </InfiniteScroll>

      {/* <MainButtonWrapper>
        <MainDeleteButton>취소하기</MainDeleteButton>
        <CreateButton>작성하기</CreateButton>
      </MainButtonWrapper> */}
    </>
  );
}
