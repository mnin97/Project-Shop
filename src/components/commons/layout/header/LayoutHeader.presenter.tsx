import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styled";
import { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: any) {
  console.log(props, "props");
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>DINGCO</InnerLogo>
        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>
            {props.data?.fetchUserLoggedIn.name === undefined
              ? "로그인"
              : props.data?.fetchUserLoggedIn.name}
          </InnerButton>
          <InnerButton onClick={props.onClickMoveToJoin}>회원가입</InnerButton>
          <InnerButton>장바구니</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
