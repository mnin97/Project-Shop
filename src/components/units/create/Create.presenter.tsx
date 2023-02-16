import {
  AddressInput,
  AddressInputWrapper,
  CancelButton,
  CreateButton,
  CreateButtonWrapper,
  ImageDelete,
  ImageUpload,
  MapPosition,
  MapSearchButton,
  MapSearchInput,
  MapSearchWrapper,
  ProductContents,
  ProductName,
  ProductNameInput,
  ProductPrice,
  ProductPriceInput,
  ProductSummary,
  ProductSummaryInput,
  ProductTag,
  ProductTagInput,
  ReactQuillMan,
  ShowImage,
  UploadButton,
  UploadCancel,
  UploadImage,
  Wrapper,
} from "./Create.style";

export default function CreateUI(props) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }],
      ["clean"],
    ],
  };
  return (
    <>
      <Wrapper>상품등록</Wrapper>
      <ProductName>
        상품명{" "}
        <ProductNameInput
          placeholder="상품명을 작성해주세요"
          onChange={props.onChangeName}
        />
      </ProductName>
      <ProductSummary>
        상품요약{" "}
        <ProductSummaryInput
          placeholder="상품요약을 작성해주세요"
          onChange={props.onChangeRemarks}
        />
      </ProductSummary>
      <ProductContents>
        상품내용{" "}
        <ReactQuillMan
          modules={modules}
          placeholder="상품을 설명해주세요."
          onChange={props.onChangeContents}
        ></ReactQuillMan>
      </ProductContents>
      <ProductPrice>
        판매가격{" "}
        <ProductPriceInput
          placeholder="판매 가격을 입력해주세요"
          onChange={props.onChangePrice}
        />
      </ProductPrice>
      <ProductTag>
        태그입력{" "}
        <ProductTagInput
          placeholder="#태그 #태그 #태그"
          onChange={props.onChangeTags}
        />
      </ProductTag>
      <MapPosition>
        브랜드위치
        <img
          src="/map.png"
          style={{ width: "300px", height: "200px", marginTop: "20px" }}
        />
        <MapSearchWrapper>
          <MapSearchInput />
          <MapSearchButton>우편번호 검색</MapSearchButton>
          <AddressInputWrapper>
            <AddressInput />
            <AddressInput />
          </AddressInputWrapper>
        </MapSearchWrapper>
      </MapPosition>
      <ImageUpload>
        사진첨부
        <ShowImage src="/image box.png" />
        <ImageDelete src="/Vector.png" />
        <UploadImage src="/image 최소 box.png" />
        <UploadButton src="/Upload.png" />
        <UploadCancel src="/Vector2.png" />
      </ImageUpload>
      <CreateButtonWrapper>
        <CancelButton>취소</CancelButton>
        <CreateButton onClick={props.onClickSubmit}>등록</CreateButton>
      </CreateButtonWrapper>
    </>
  );
}
