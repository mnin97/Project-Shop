import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";

import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../commons/types/generated/types";

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

export default function Create() {
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

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
          },
        },
      });
      console.log(result);
      router.push("/main");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
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
    setContents("");
  };

  const onChangePrice = (event: any) => {
    setPrice(event.currentTarget.value);
  };

  return (
    <>
      <CreateUI
        onClickSubmit={onClickSubmit}
        onChangeName={onChangeName}
        onChangeTags={onChangeTags}
        onChangeRemarks={onChangeRemarks}
        onChangeContents={onChangeContents}
        onChangePrice={onChangePrice}
      ></CreateUI>
    </>
  );
}
