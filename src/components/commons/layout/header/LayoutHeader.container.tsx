import { gql, useQuery } from "@apollo/client";

import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { IQuery } from "../../../../commons/types/generated/types";
import LayoutHeaderUI from "./LayoutHeader.presenter";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LayoutHeader() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  console.log(accessToken);

  const router = useRouter();

  const onClickLogo = () => {
    router.push("/main");
  };

  const onClickMoveToLogin = () => {
    router.push("/Login");
  };

  const onClickMoveToJoin = () => {
    router.push("/join");
  };

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log(data);
  // console.log(data?.fetchUserLoggedIn.name);s

  return (
    <LayoutHeaderUI
      data={data}
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToJoin={onClickMoveToJoin}
    />
  );
}
