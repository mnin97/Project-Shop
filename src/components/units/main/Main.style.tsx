import styled from "@emotion/styled";
import { HeartOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  padding: 50px;
  background-color: #f1f1f1;
`;

export const ListWrapperMain = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 75px;
`;

export const Arrival = styled.p`
  font-weight: 700;
  padding: 50px;
  font-size: 22px;
  color: #000000;
`;

export const ListWrapper = styled.div``;

export const ListBox = styled.div`
  width: 300px;
  height: 400px;
  margin-left: 30px;
  margin-bottom: 15px;
  margin-top: 30px;
  background-color: #f1f1f1;
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
