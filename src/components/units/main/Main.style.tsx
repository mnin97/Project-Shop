import styled from "@emotion/styled";
import { HeartOutlined } from "@ant-design/icons";

export const ListWrapperMain = styled.div`
  width: 100%;

  display: flex;

  flex-direction: row;

  flex-wrap: wrap;
  margin-bottom: 75px;

  padding: 0 40px;

  justify-content: space-around;
`;

export const Carrusel = styled.div`
  width: 100%;
  height: 400px;
  background-color: #c4c4c4;
`;

export const Arrival = styled.p`
  font-weight: 700;
  padding: 50px;
  font-size: 22px;
  text-align: center;
  color: #000000;
`;

export const ListWrapper = styled.div`
  /* margin-right: 30px; */
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

export const Price = styled.div`
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
  position: relative;
  left: 266px;
  bottom: 396px;
`;
