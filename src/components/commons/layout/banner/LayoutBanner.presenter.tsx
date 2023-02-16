import { Navigation, NavigationBox, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI(props: any) {
  return (
    <Wrapper>
      <NavigationBox>
        <Navigation onClick={props.onClickLogo}>BRAND</Navigation>
        <Navigation>CATEGORY</Navigation>
        <Navigation>LIFE</Navigation>
        <Navigation>BEAUTY</Navigation>
        <Navigation>|</Navigation>
        <Navigation>#STYLE</Navigation>
        <Navigation>EVENT</Navigation>
      </NavigationBox>
    </Wrapper>
  );
}
