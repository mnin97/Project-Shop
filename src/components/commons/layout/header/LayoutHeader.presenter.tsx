import CreaditModal from "../../../units/\bPayment/Creadit.index";
import {
  ChargeWrapper,
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
      <CreaditModal
        isOpen={props?.isOpen}
        infoUser={props?.infoUser}
        setIsOpen={props?.setIsOpen}
        handleCradit={props?.handleCradit}
      />
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>DINGCO</InnerLogo>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <InnerButton onClick={props.onClickMoveToLogin}>
            {props.data?.fetchUserLoggedIn.name ? (
              <span>{props.data?.fetchUserLoggedIn.name}</span>
            ) : (
              <span>로그인</span>
            )}
          </InnerButton>
          {props.data?.fetchUserLoggedIn.name ? (
            <>
              <ChargeWrapper>
                <span>포인트 &nbsp;</span>
                <span style={{ marginRight: "10px" }}>
                  &nbsp;{props.data?.fetchUserLoggedIn.userPoint.amount}P
                </span>
                <div onClick={props.handleCradit}>충전</div>
              </ChargeWrapper>

              <InnerButton onClick={props.logoutUser}>로그아웃</InnerButton>
            </>
          ) : (
            <InnerButton onClick={props.onClickMoveToJoin}>
              회원가입
            </InnerButton>
          )}

          <InnerButton>장바구니</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
