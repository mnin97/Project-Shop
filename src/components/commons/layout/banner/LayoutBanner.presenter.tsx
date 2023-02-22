import { Navigation, NavigationBox, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI(props: any) {
  return (
    <Wrapper>
      <NavigationBox>
        <Navigation onClick={props.onClickBrand}>BRAND</Navigation>
        <Navigation onClick={props.onClickBrand}>CATEGORY</Navigation>
        <Navigation onClick={props.onClickBrand}>LIFE</Navigation>
        <Navigation onClick={props.onClickBrand}>BEAUTY</Navigation>
        <Navigation>|</Navigation>
        <Navigation onClick={props.onClickBrand}>#STYLE</Navigation>
        <Navigation onClick={props.onClickBrand}>EVENT</Navigation>
      </NavigationBox>
    </Wrapper>
  );
}
