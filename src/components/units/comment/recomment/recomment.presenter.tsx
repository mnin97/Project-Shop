import {
  Answer,
  AnswerMain,
  AnswerWrapper,
  Comment3,
  CommentName,
  CommentWrapper2,
  CreateButton,
  Day2,
  Day3,
  DeleteButton,
  InputWrapper,
  MainButtonWrapper,
  MainDeleteButton,
  MainInput,
} from "./recomment.styles";

export default function RecommentUI() {
  return (
    <>
      {/* <AnswerWrapper>
        <Answer>답변</Answer>
        <Day2>2022 03 30</Day2>
        <AnswerMain>
          안녕하세요, 고객님! 저희 제품에 관심 가져주셔서 감사드립니다. 현재 더
          큰 사이즈 상품은 없습니다. 궁금하신 사항은 언제든지 문의 부탁드립니다.
          감사합니다.
        </AnswerMain>
      </AnswerWrapper> */}
      <CommentWrapper2>
        <CommentName>성시윤</CommentName>
        <Comment3>재입고 날짜... </Comment3>
        <Day3>2022 03 30</Day3>
        <DeleteButton src="/Vector4.png" />
      </CommentWrapper2>
      <InputWrapper>
        <MainInput placeholder="내용을 입력해주세요." />
      </InputWrapper>
      <MainButtonWrapper>
        <MainDeleteButton>취소하기</MainDeleteButton>
        <CreateButton>작성하기</CreateButton>
      </MainButtonWrapper>
    </>
  );
}
