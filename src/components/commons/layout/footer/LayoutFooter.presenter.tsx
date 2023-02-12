import { Boss, SubTitle, Title, Wrapper } from "./LayoutFooter.styles";

export default function LayoutFooterUI() {
  return (
    <Wrapper>
      <Title>DINGCO</Title>
      <SubTitle>
        (주)딩코 <Boss>대표:안우엽</Boss>
      </SubTitle>
      <div style={{ marginTop: "7px", fontSize: "13px" }}>
        <span>사업자등록번호717-87-02373</span>
      </div>
      <div style={{ marginTop: "7px", fontSize: "13px" }}>
        <span>주소:서울특별시 구로구 디지털로 300,패스트파이브</span>
      </div>

      <div style={{ marginTop: "7px", fontSize: "13px" }}>
        학원 등록 번호:제5845호
      </div>
      <div style={{ marginTop: "7px", fontSize: "13px" }}>
        <span>개인정보 처리방침 서비스 이용약관</span>
      </div>
      <div style={{ marginTop: "7px", fontSize: "13px" }}>
        Copylight 2022. Dingco Corp,Ltd
      </div>
    </Wrapper>
  );
}
