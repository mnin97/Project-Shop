import { useRouter } from "next/router";
import LoginPageUI from "./LoginPage.presenter";

export default function LoginPage() {
  const router = useRouter();
  const onClickLogo = () => {
    router.push("/main");
  };
  return (
    <>
      <LoginPageUI onClickLogo={onClickLogo}></LoginPageUI>
    </>
  );
}
