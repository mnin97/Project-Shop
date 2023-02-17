import {
  Banner,
  BannerTitle,
  ButtonWrapper,
  CancelButton,
  CartBox,
  CheckButton,
  IdBox,
  InputBigWrapper,
  InputBox,
  InputWrapper,
  Line,
  LineBottom,
  LoginBackground,
  LoginInput,
  LoginLogo,
  Logo,
  MoveCartJoin,
  MoveCartJoin2,
  NameBox,
  PBox,
  PBox2,
} from "./JoinPage.styles";

export default function JoinPageUI(props: any) {
  return (
    <>
      <Banner>
        <Logo onClick={props.onClickLogo}>DINGCO</Logo>
        <BannerTitle>BRAND</BannerTitle>
        <BannerTitle>CATAGORY</BannerTitle>
        <BannerTitle>LIFE</BannerTitle>
        <BannerTitle>BEAUTY</BannerTitle>
        <Line>|</Line>
        <BannerTitle>#STYLE</BannerTitle>
        <BannerTitle>EVENT</BannerTitle>
        <BannerTitle>BEST</BannerTitle>
        <MoveCartJoin onClick={props.onClickLogin}>로그인</MoveCartJoin>
        <MoveCartJoin2>장바구니</MoveCartJoin2>
      </Banner>
      <LoginBackground>
        <LoginLogo>
          <LineBottom>
            <p>JOIN MEMBER</p>
          </LineBottom>
        </LoginLogo>
        <InputBigWrapper>
          <InputWrapper>
            <InputBox>
              <IdBox>아이디</IdBox>
              <LoginInput
                placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
                onChange={props.onChangeEmail}
              />
              <PBox>비밀번호</PBox>
              <LoginInput
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요"
                onChange={props.onChangePassword}
              />
              <PBox2>비밀번호 확인</PBox2>
              <LoginInput
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요"
                onChange={props.onChangePassword}
              />
              <NameBox onChange={props.onChangeName}>이름</NameBox>
              <LoginInput placeholder="Ex) 홍길동" />
            </InputBox>
          </InputWrapper>
        </InputBigWrapper>
        <ButtonWrapper>
          <CancelButton>취소</CancelButton>
          <CheckButton onClick={props.createUserSubmit}>확인</CheckButton>
        </ButtonWrapper>
      </LoginBackground>
    </>
  );
}
