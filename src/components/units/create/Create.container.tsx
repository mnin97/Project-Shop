import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";

import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IUpdateUseditemInput,
} from "../../../commons/types/generated/types";
import { FETCH_USED_ITEMS } from "../main/Main.queries";

import CreateUI from "./Create.presenter";

const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      contents
      remarks
      images
      tags
      price
    }
  }
`;

const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $useditemId: ID!
    $updateUseditemInput: UpdateUseditemInput!
  ) {
    updateUseditem(
      useditemId: $useditemId
      updateUseditemInput: $updateUseditemInput
    ) {
      _id
      name
      remarks
      contents
      price
      tags
      images
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function Create(props) {
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const router = useRouter();

  const [name, setName] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState("");
  const [remarks, setRemarks] = useState("");
  const [tags, setTags] = useState("");

  const onClickSubmit = async () => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: name,
            remarks: remarks,
            price: Number(price),
            tags: tags,
            contents: contents,
            images: [...fileUrls],
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
          },
        ],
      });
      console.log(result);
      router.push("/main");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async (event: string) => {
    const currentFiles = JSON.stringify(fileUrls); //스트링으로 바꿔서 둘을 비교해야한다 why? 둘다 주소라 다른주소이기 때문에 비교가 불가능하기떄문.
    const defaultFiles = JSON.stringify(props.data?.fetchUseditem.images);

    const isChangedFiles = currentFiles !== defaultFiles;
    // if (
    //   !data.name &&
    //   !data.remarks &&
    //   !data.contents &&
    //   !data.price &&
    //   !data.tags &&
    //   !data.images &&
    //   !data.isChangedFiles
    // ) {
    //   alert("수정한 내용이 없습니다.");
    //   return;
    // }

    const updateUseditemInput: IUpdateUseditemInput = {};
    if (name) updateUseditemInput.name = name;
    if (remarks) updateUseditemInput.remarks = remarks;
    if (contents) updateUseditemInput.contents = contents;
    if (price) updateUseditemInput.price = Number(price);
    if (tags) updateUseditemInput.tags = tags;
    if (isChangedFiles) updateUseditemInput.images = fileUrls;
    // if (data.images) updateUseditemInput.images = data.images;

    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput,
          useditemId: String(router.query.productId),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
          },
        ],
      });
      console.log(result);
      void router.push(`/main/${router.query.productId}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onChangeName = (event: any) => {
    setName(event.currentTarget.value);
  };

  const onChangeTags = (event: any) => {
    setTags(event.currentTarget.value);
  };

  const onChangeRemarks = (event: any) => {
    setRemarks(event.currentTarget.value);
  };

  const onChangeContents = (event: any) => {
    setContents(event);
  };

  const onChangePrice = (event: any) => {
    setPrice(event.currentTarget.value);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  return (
    <>
      <CreateUI
        isEdit={props.isEdit}
        data={props.data}
        onClickSubmit={onClickSubmit}
        onChangeName={onChangeName}
        onChangeTags={onChangeTags}
        onChangeRemarks={onChangeRemarks}
        onChangeContents={onChangeContents}
        onChangePrice={onChangePrice}
        onClickUpdate={onClickUpdate}
        onChangeFileUrls={onChangeFileUrls}
        fileUrls={fileUrls}
      ></CreateUI>
    </>
  );
}
