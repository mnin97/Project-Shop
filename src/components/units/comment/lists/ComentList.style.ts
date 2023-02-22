import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 96%;
  padding-top: 25px;
  justify-content: space-between;
`;

export const CommentName = styled.div`
  width: 92px;
  border: 1px solid;
  text-align: center;
  background: #000000;
  color: #ffffff;
  height: 31px;
  padding-top: 5px;
`;

export const Comment2 = styled.span`
  width: 73%;
  padding: 6px;
  position: relative;

  top: 0px;
`;

export const Day = styled.span`
  position: relative;
  padding: 0px;
  width: 87px;

  padding-top: 6px;
  left: 11px;
`;

export const EditButton = styled.img`
  width: 13px;
  height: 13px;
  position: relative;
  left: 10px;
  top: 9px;
  margin-right: 17px;
  cursor: pointer;
`;

export const DeleteButton = styled.img`
  width: 10px;
  height: 11px;
  position: relative;
  top: 10px;
  right: 12px;
  cursor: pointer;
`;
