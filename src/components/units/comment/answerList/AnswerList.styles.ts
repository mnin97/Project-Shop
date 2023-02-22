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

export const CommenAnswertWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 92%;
  padding-top: 25px;
  justify-content: space-between;
  border-bottom: 1px dashed gray;
  padding-bottom: 35px;
`;

export const CommentAnswerName = styled.div`
  width: 92px;
  text-align: center;
  font-weight: 700;
  color: #000000;
  height: 31px;
  padding-top: 5px;
`;

export const CommentAnswer2 = styled.span`
  width: 73%;
  padding: 6px;
  position: relative;

  top: 0px;
`;

export const AnswerDayMan = styled.span`
  position: relative;
  padding: 0px;
  width: 87px;

  padding-top: 6px;
  left: 11px;
`;

export const AnswerEditButton = styled.img`
  width: 13px;
  height: 13px;
  position: relative;
  left: 10px;
  top: 9px;
  margin-right: 17px;
  cursor: pointer;
`;

export const AnswerDeleteButton = styled.img`
  width: 10px;
  height: 11px;
  position: relative;
  top: 10px;
  right: 12px;
  cursor: pointer;
`;
