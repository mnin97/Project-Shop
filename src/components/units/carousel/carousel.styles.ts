import styled from "@emotion/styled";

export const Carousel = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 400px;
  background-color: gray;
`;

export const NewArr = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #000000;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 100%;
`;

export const BoxWrapper = styled.div`
  width: 1920px;
  height: 700px;
`;

export const Box = styled.img`
  height: 400px;
  object-fit: contain;
`;
