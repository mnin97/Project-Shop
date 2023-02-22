import styled from "@emotion/styled";

export const Comment = styled.input`
  background: #e9e9e9;
  width: 1050px;
  border: none;
  height: 200px;
  padding-left: 35px;
  padding-bottom: 130px;
`;

export const CommentButtonWrapper = styled.div`
  width: 1050px;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #555555;
  padding-bottom: 10px;
  padding-top: 24px;
`;

export const CommentButton = styled.button`
  width: 140px;
  height: 50px;
  border: none;
  background: #000000;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  top: 7px;
`;

export const MainDeleteButton = styled.button`
  width: 150px;
  margin-top: 6px;
  height: 53px;
  margin-right: 9px;
  border: 1px solid #000000;
  background: #ffffff;
  color: #000000;
  /* padding-bottom: 0px; */
  font-size: 15px;
  font-weight: 600;
`;
