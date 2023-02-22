import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ssrEntries } from "next/dist/build/webpack/plugins/middleware-plugin";

interface IButtonIsActive {
  isActive: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageUpload = styled.img`
  width: 600px;
`;

export const NoImageUploadWrapper = styled.img`
  width: 600px;
  height: 600px;
`;

export const TitleWrapper = styled.div`
  position: absolute;

  left: 679px;
  width: 519px;
`;

export const Category = styled.h4`
  margin-bottom: 7px;
  font-size: 12px;
  font-weight: 400;
`;

export const ProductName = styled.h1`
  font-size: 34px;
  font-weight: 700;
  width: 747px;
`;

export const ProductMan = styled.div`
  width: 50%;
  height: 45px;
  position: relative;
  left: 327px;
  bottom: 314px;
  border-bottom: 3px solid #555555;
`;

export const PriceName = styled.span`
  padding-right: 30px;
`;

export const Price = styled.span`
  padding-right: 409px;
`;
export const MyPage = styled.span`
  margin-right: 0px;
`;

export const Heart = styled.img`
  padding-left: 7px;
  padding-right: 7px;
  width: 34px;
  cursor: pointer;
`;

export const ProductDes = styled.div`
  width: 40%;
  height: 120px;
  position: relative;
  left: 271px;
  bottom: 292px;
  font-size: 20px;
  font-weight: 400;
`;

export const TagName = styled.div`
  position: relative;
  left: 324px;
  bottom: 308px;
  color: f65656;
  color: #f65656;
  border-bottom: 1px solid #c0c0c0;
  width: 51%;
  height: 32px;
`;

export const Tag = styled.span`
  position: relative;
  left: 12px;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  bottom: 295px;
  left: 322px;
`;

export const BuyButton = styled.button`
  width: 234px;
  height: 56px;
  border: none;
  background: #000000;
  font-size: 28px;
  color: #ffffff;
  font-weight: 300;
`;
export const ShoppingBagButton = styled.button`
  width: 400px;
  font-size: 28px;
  height: 56px;
  background: #a0a0a0;
  color: #ffffff;
  border: none;
  margin-left: 29px;
  font-weight: 300;
`;

export const DetailMan = styled.div`
  font-size: 32px;
  width: 95%;
  left: 10px;
  position: relative;
  bottom: 210px;
  border-bottom: 3px solid #555555;
`;

export const DetailBoy = styled.p`
  padding-left: 20px;
  padding-bottom: 10px;
`;

export const Emergency = styled.div`
  right: 340px;
  font-size: 32px;
  font-weight: 700;
  position: relative;
  bottom: 130px;
`;

export const EmergencyMent = styled.p`
  font-size: 13px;
  font-weight: 400;
  padding-top: 8px;
`;

export const MapPosition = styled.img`
  width: 1050px;
  height: 500px;
  position: relative;
  bottom: 124px;
  right: 62px;
`;

export const ExplainMan = styled.p`
  width: 1141px;
  line-height: 2;
  position: relative;
  bottom: 113px;
  right: 17px;
`;

export const Ques = styled.div`
  padding-bottom: 10px;
  position: relative;
  border-bottom: 2px solid #555555;
  padding-left: 21px;
  width: 1250px;
  bottom: 72px;
  font-size: 32px;
`;

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
  height: 60px;
  border: none;
  background: #000000;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 74%;
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
  position: relative;
  right: 141px;
  top: 8px;
`;

export const Day = styled.span`
  position: relative;
  top: 8px;
  left: 312px;
`;

export const EditButton = styled.img`
  width: 13px;
  height: 13px;
  position: relative;
  left: 155px;
  top: 9px;
  margin-right: 17px;
`;

export const DeleteButton = styled.img`
  width: 10px;
  height: 11px;
  position: relative;
  top: 10px;
  right: 13px;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #555555;
  width: 1050px;
  height: 220px;
`;

export const Answer = styled.span`
  padding-top: 25px;
  padding-left: 126px;
  font-size: 15px;
  font-weight: 700;
`;

export const Day2 = styled.span`
  padding-left: 124px;
  padding-top: 15px;
  font-size: 15px;
  color: #555555;
`;

export const AnswerMain = styled.span`
  width: 683px;
  padding-top: 18px;
  padding-left: 123px;
  line-height: 2;
`;

export const Day3 = styled.span`
  position: relative;
  top: 8px;
  left: 235px;
`;

export const Comment3 = styled.span`
  position: relative;
  right: 228px;
  top: 8px;
`;

export const CommentWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 74%;
  height: 100px;
  padding-top: 25px;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  width: 950px;
  position: relative;
  border-top: 1px solid #555555;
  left: 49px;
  padding-top: 12px;
`;

export const MainInput = styled.input`
  width: 950px;
  border: none;
  background: #e9e9e9;
  height: 180px;
  padding-bottom: 122px;
  padding-left: 24px;
`;

export const MainButtonWrapper = styled.div`
  width: 1050px;
  height: 67px;
  border-bottom: 1px solid #555555;
  /* border: 1px solid; */
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;
  justify-content: flex-end;
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

export const CreateButton = styled.button`
  background: #000000;
  width: 150px;
  color: #ffffff;
  color: 150px;
  margin-top: 6px;
  border: none;
  height: 53px;
  font-size: 15px;
  font-weight: 600;
`;

export const Edit2Button = styled.img`
  margin-right: 20px;
  cursor: pointer;
`;

export const EditDeleteWrapper = styled.div`
  position: relative;
  left: 641px;
  bottom: 39px;
`;

export const DeleteButton2 = styled.img`
  margin-bottom: 3px;
  cursor: pointer;
`;

export const MainContents = styled.div`
  font-size: 35px;
  width: 92%;
  height: 500px;
  position: relative;
  bottom: 186px;
`;

export const LikeBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  left: 586px;
  bottom: 21px;
`;

export const LikeCount = styled.div`
  padding-right: 15px;
`;

export const CommentMan = styled.div`
  /* width: 102%; */

  height: 500px;
  overflow: auto;
`;

export const CommentManWrapper = styled.div`
  width: 1050px;
`;
