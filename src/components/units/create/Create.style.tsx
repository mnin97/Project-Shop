import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const QuillWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export const Wrapper = styled.div`
  width: 86%;
  border-bottom: 2px solid #555555;
  font-weight: 700;
  font-size: 40px;
  color: #000000;
  padding-left: 75px;
  padding-top: 50px;
  padding-bottom: 30px;
`;

export const ProductName = styled.div`
  width: 86%;
  border-bottom: 1px solid #999999;
  font-weight: 500;
  font-size: 24px;
  color: #000000;
  padding-left: 75px;
  padding-top: 50px;
  padding-bottom: 30px;
`;

export const ProductNameInput = styled.input`
  height: 40px;
  position: relative;
  left: 130px;
  bottom: 5px;
  border: none;
  background: #e9e9e9;
  width: 80%;
  color: #a9a9a9;
  padding: 20px;
  font-size: 11px;
`;

export const ProductSummary = styled.div`
  width: 86%;
  border-bottom: 1px solid #999999;
  font-weight: 500;
  font-size: 24px;
  color: #000000;
  padding-left: 75px;
  padding-top: 50px;
  padding-bottom: 30px;
`;

export const ProductSummaryInput = styled.input`
  bottom: 5px;
  position: relative;
  left: 110px;
  width: 80%;
  height: 40px;
  border: none;
  background: #e9e9e9;
  font-size: 11px;
  padding: 20px;
`;

export const ProductContents = styled.div`
  width: 86%;
  border-bottom: 1px solid #999999;
  font-weight: 500;
  font-size: 24px;
  color: #000000;
  padding-left: 75px;
  padding-top: 50px;
  padding-bottom: 30px;
`;

export const ReactQuillMan = styled(QuillWrapper)`
  bottom: 50px;
  width: 80%;
  height: 250px;
  position: relative;
  left: 200px;
`;

export const ProductPrice = styled.div`
  width: 86%;
  border-bottom: 1px solid #999999;
  font-weight: 500;
  font-size: 24px;
  color: #000000;
  padding-left: 75px;
  padding-top: 50px;
  padding-bottom: 30px;
`;

export const ProductPriceInput = styled.input`
  bottom: 5px;
  position: relative;
  left: 110px;
  width: 80%;
  height: 40px;
  border: none;
  background: #e9e9e9;
  font-size: 11px;
  padding: 20px;
`;

export const ProductTag = styled.div`
  width: 86%;
  border-bottom: 1px solid #999999;
  font-weight: 500;
  font-size: 24px;
  color: #000000;
  padding-left: 75px;
  padding-top: 50px;
  padding-bottom: 30px;
`;

export const ProductTagInput = styled.input`
  bottom: 5px;
  position: relative;
  left: 110px;
  width: 80%;
  height: 40px;
  border: none;
  background: #e9e9e9;
  font-size: 11px;
  padding: 20px;
`;

export const MapPosition = styled.div`
  display: flex;
  flex-direction: column;
  width: 86%;
  height: 320px;
  border-bottom: 1px solid #999999;
  font-weight: 500;
  font-size: 24px;
  padding-left: 75px;
  padding-top: 50px;
`;

export const MapSearchWrapper = styled.div`
  bottom: 180px;
  position: relative;
  left: 320px;
`;

export const MapSearchInput = styled.input`
  width: 55px;
  border: 1px solid #bdbdbd;
  height: 35px;
`;

export const MapSearchButton = styled.button`
  border: none;
  height: 35px;
  color: #ffffff;
  background: #000000;
  margin-left: 10px;
`;

export const AddressInput = styled.input`
  width: 70%;
  height: 35px;
  border: none;
  background: #e9e9e9;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const AddressInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageUpload = styled.div`
  display: flex;
  flex-direction: column;
  width: 86%;
  height: 320px;
  border-bottom: 1px solid #999999;
  font-weight: 500;
  font-size: 24px;
  padding-left: 75px;
  padding-top: 50px;
`;

export const ShowImage = styled.img`
  width: 180px;
  height: 180px;
  border: 1px solid #bdbdbd;
  margin-top: 20px;
`;

export const ImageDelete = styled.img`
  width: 14px;
  height: 14px;
  position: relative;
  left: 155px;
  bottom: 170px;
  cursor: pointer;
`;

export const UploadImage = styled.img`
  width: 180px;
  height: 178px;
  border: 1px solid #bdbdbd;
  margin-top: 20px;
  position: relative;
  left: 195px;
  bottom: 213px;
  cursor: pointer;
`;

export const UploadButton = styled.img`
  width: 50px;
  position: relative;
  left: 260px;
  bottom: 300px;
`;

export const UploadCancel = styled.img`
  width: 10px;
  position: relative;
  left: 278px;
  bottom: 347px;
`;

export const CreateButtonWrapper = styled.div`
  padding: 50px;
`;
export const CancelButton = styled.button`
  width: 130px;
  height: 50px;
  border: 1px solid #000000;
  background: #ffffff;
  font-weight: 500;
  cursor: pointer;
`;

export const CreateButton = styled.button`
  width: 130px;
  height: 50px;
  border: 1px solid #000000;
  background: #000000;
  font-weight: 500;
  color: #ffffff;
  margin-left: 10px;
  cursor: pointer;
`;
