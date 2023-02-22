import { useRouter } from "next/router";
import LayoutBannerUI from "./LayoutBanner.presenter";

export default function LayoutBanner() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickBrand = () => {
    router.push("/brand");
  };

  return (
    <LayoutBannerUI onClickLogo={onClickLogo} onClickBrand={onClickBrand} />
  );
}
