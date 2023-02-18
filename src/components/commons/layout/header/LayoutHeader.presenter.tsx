import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styled";
import { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: any) {
  console.log(props.data?.fetchUserLoggedIn.name);
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>DINGCO</InnerLogo>
        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>
            {props.data?.fetchUserLoggedIn.name ? (
              <span>{props.data?.fetchUserLoggedIn.name}</span>
            ) : (
              <span>로그인</span>
            )}
          </InnerButton>
          {props.data?.fetchUserLoggedIn.name ? (
            <InnerButton onClick={props.logoutUser}>로그아웃</InnerButton>
          ) : (
            ""
          )}
          <InnerButton onClick={props.onClickMoveToJoin}>회원가입</InnerButton>
          <InnerButton>장바구니</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
