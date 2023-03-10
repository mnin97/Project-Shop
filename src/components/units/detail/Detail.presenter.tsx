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
        <PriceName>?????????</PriceName>
        <Price> {props.data?.fetchUseditem.price} ???</Price>
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
        <span>??????/??????/??????/AS ?????? ????????????</span>

        <EmergencyMent>
          ????????????????????? ??????/??????/??????/?????? ?????? ????????? ????????? ?????? ??????
          ?????????????????? ?????? ???????????????.
        </EmergencyMent>
      </Emergency>

      <div>
        <MapPosition src="/map.png" />
      </div>

      <ExplainMan>
        ???????????? ?????? ?????? ??? ???????????? ?????? ???????????? ??? ??????????????? ???????????????.
        ????????? ???????????? ??????????????? ????????? ?????? ???????????? ????????? ??? ????????? ?????????
        ???????????????. ???????????? ?????? ?????????, ???????????? ??? ?????? ????????? ?????? ??????/??????
        ????????? ?????????????????? ?????????????????? ???????????????. (??????????????? ????????????
        ?????????????????? ?????? ?????? ???18???(?????? ?????? ???) 9?????? ?????? ???????????? ?????????
        ?????? ?????? ?????? ??? ???????????? ????????? ???????????????.) ???????????? ??? ?????? ??????
        ????????? ?????? ?????? ?????? ????????? ??? ?????? ?????? ??? ?????? ??????????????????.
        ??????/????????? ????????? ????????? ?????? ???????????? ??? 7??? ????????? ???????????? ????????????.
        ????????? ?????? ?????? ????????? ??????, ????????? ??????, ?????? TAG ?????????, ??????
        ???????????? ?????? ?????? ????????? ??????, ??????????????? ??????????????? ?????? ???????????? ??????
        ?????? ????????? ??????(???, ??????????????? ?????? ?????? ??????) ??????/????????? ???????????????.
        A/S ???????????? ??????????????? ???????????? ????????? ?????? ???????????? ?????? ?????????
        ???????????? ??????????????? ?????? ??????????????????. ??????????????? ?????? ??????,??????, A/S,
        ??????, ???????????? ??? ???????????? ?????? ?????? ?????????
        ???????????????????????????(????????????????????? ??????)??? ?????? ????????? ??? ????????????.
      </ExplainMan>

      <Ques>
        <p>Q & A</p>
      </Ques>
      {/* <div>
        <Comment placeholder="????????? ??????????????????." />
      </div>
      <CommentButtonWrapper>
        <CommentButton>????????????</CommentButton>
      </CommentButtonWrapper>
      <CommentWrapper>
        <CommentName>?????????</CommentName>
        <Comment2>???????????? ??? ?????? ?????????? </Comment2>
        <Day>2022 03 30</Day>
        <EditButton src="/Vector3.png" />
        <DeleteButton src="/Vector.png" />
      </CommentWrapper>
      <AnswerWrapper>
        <Answer>??????</Answer>
        <Day2>2022 03 30</Day2>
        <AnswerMain>
          ???????????????, ?????????! ?????? ????????? ?????? ??????????????? ??????????????????. ?????? ???
          ??? ????????? ????????? ????????????. ???????????? ????????? ???????????? ?????? ??????????????????.
          ???????????????.
        </AnswerMain>
      </AnswerWrapper>

      <CommentWrapper2>
        <CommentName>?????????</CommentName>
        <Comment3>????????? ??????... </Comment3>
        <Day3>2022 03 30</Day3>
        <DeleteButton src="/Vector4.png" />
      </CommentWrapper2>
      <InputWrapper>
        <MainInput placeholder="????????? ??????????????????." />
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
        <MainDeleteButton>????????????</MainDeleteButton>
        <CreateButton>????????????</CreateButton>
      </MainButtonWrapper> */}
    </>
  );
}
