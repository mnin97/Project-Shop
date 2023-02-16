import { useRouter } from "next/router";
import JoinPageUI from "./JoinPage.presenter";

export default function JoinPage() {
  const router = useRouter();
  const onClickLogo = () => {
    router.push("/main");
  };

  const onClickLogin = () => {
    router.push("./Login");
  };
  return (
    <JoinPageUI
      onClickLogo={onClickLogo}
      onClickLogin={onClickLogin}
    ></JoinPageUI>
  );
}
