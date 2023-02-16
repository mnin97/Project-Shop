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
  width: 1864px;
  height: 600px;
  border: none;
  margin-top: 15px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  background-color: #d3d3d3;
`;

export const Arrival = styled.p`
  font-weight: 700;
  padding: 50px;
  font-size: 22px;
  text-align: center;
  color: #000000;
`;

export const ListWrapper = styled.div`
  margin-right: 80px;
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
