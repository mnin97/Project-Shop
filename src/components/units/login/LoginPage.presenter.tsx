import {
  Banner,
  BannerTitle,
  CartBox,
  IdBox,
  InputBox,
  InputWrapper,
  Line,
  LineBottom,
  LoginBackground,
  LoginButton,
  LoginInput,
  LoginLogo,
  Logo,
  MoveCartJoin,
  PBox,
} from "./LoginPage.styles";

export default function LoginPageUI(props: any) {
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
        <MoveCartJoin>회원가입</MoveCartJoin>
        <CartBox>
          <MoveCartJoin>장바구니</MoveCartJoin>
        </CartBox>
      </Banner>
      <LoginBackground>
        <LoginLogo>
          <LineBottom>
            <p>LOGIN</p>
          </LineBottom>
        </LoginLogo>
        <InputWrapper>
          <InputBox>
            <IdBox>아이디</IdBox>
            <LoginInput placeholder="이메일 아이디를 @까지 정확하게 입력하세요" />
            <PBox>비밀번호</PBox>
            <LoginInput placeholder="영문+숫자 조합 8~16자리를 입력해주세요" />
          </InputBox>
          <LoginButton>로그인</LoginButton>
        </InputWrapper>
      </LoginBackground>
    </>
  );
}
