import { gql, useQuery } from "@apollo/client";

import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { IQuery } from "../../../../commons/types/generated/types";
import LayoutHeaderUI from "./LayoutHeader.presenter";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      _id
      userPoint {
        amount
      }
    }
  }
`;

export default function LayoutHeader() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  console.log(accessToken);
  const [isOpen, setIsOpen] = useState(false);
  const handleCradit = () => {
    setIsOpen((prev) => !prev);
  };

  const logoutUser = async () => {
    localStorage.removeItem("accessToken");
    setAccessToken("");
    alert("로그아웃 하셨습니다.");
    location.reload();
  };

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
  // console.log(data?.fetchUserLoggedIn.name);

  return (
    <LayoutHeaderUI
      data={data}
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToJoin={onClickMoveToJoin}
      logoutUser={logoutUser}
      isOpen={isOpen}
      handleCradit={handleCradit}
    />
  );
}
