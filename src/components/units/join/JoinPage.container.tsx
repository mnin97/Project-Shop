import { useRouter } from "next/router";
import JoinPageUI from "./JoinPage.presenter";

export default function JoinPage() {
  const router = useRouter();
  const onClickLogo = () => {
    router.push("/main");
  };
  return <JoinPageUI onClickLogo={onClickLogo}></JoinPageUI>;
}
