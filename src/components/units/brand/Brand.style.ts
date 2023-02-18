import styled from "@emotion/styled";
import { HeartOutlined } from "@ant-design/icons";

export const ListWrapperMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 75px;
  justify-content: center;
`;

export const Carrusel = styled.div`
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 620px;
  border: none;
  margin-top: 15px;

  display: flex;

  flex-direction: row;
  background-color: #d3d3d3;
`;

export const Arrival = styled.p`
  font-weight: 700;
  padding-left: 200px;
  padding-top: 25px;

  font-size: 22px;

  color: #000000;
  border-bottom: 1px solid #555555;
  width: 89%;
  position: relative;
  left: 126px;
  padding-bottom: 37px;
`;

export const SubmitButton = styled.p`
  border: 1px solid #000000;
  background: #ffffff;
  position: relative;
  width: 150px;
  height: 60px;
  right: 198px;
  top: 21px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  padding-top: 19px;
  cursor: pointer;
`;

export const ListWrapper = styled.div`
  margin-right: 44px;
  width: 300px;
`;

export const ListBox = styled.div`
  width: 300px;
  height: 400px;
  margin-left: 30px;
  margin-bottom: 15px;
  margin-top: 30px;
`;

export const ListBoxImg = styled.img`
  width: 300px;
  height: 400px;
  margin-left: 30px;
  margin-bottom: 15px;
  margin-top: 30px;
`;

export const Comment = styled.div`
  width: 200px;
  padding-left: 30px;
`;

export const Title = styled.span`
  color: #f65656;
  font-weight: 400;
  font-size: 20px;
  margin-right: 5px;
`;

export const Price = styled.span`
  font-weight: 400;
  font-size: 20px;
`;

export const Shop = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #555555;
`;

export const Status = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  color: #555555;
`;

export const HeartIcon = styled(HeartOutlined)`
  margin-left: 260px;
  margin-top: 20px;
`;

export const InfiniteWrapper = styled.div`
  width: 100%;

  overflow: auto;
`;

export const NoImageUploadWrapper = styled.img`
  width: 600px;
`;
