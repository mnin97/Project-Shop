import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import JoinPageUI from "./JoinPage.presenter";
export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

export default function JoinPage() {
  // const props

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const createUserSubmit = async (data: any, resultUrls: any) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: String(email),
            password: String(password),
            name: String(name),
          },
        },
      });
      alert("회원가입을 해주셔서 감사합니다.");
      void router.push("/login");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const router = useRouter();
  const onClickLogo = () => {
    router.push("/main");
  };

  const onClickLogin = () => {
    router.push("./Login");
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  return (
    <JoinPageUI
      onClickLogo={onClickLogo}
      onClickLogin={onClickLogin}
      createUserSubmit={createUserSubmit}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeName={onChangeName}
    ></JoinPageUI>
  );
}
