import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import * as S from "./carousel.styles";

export default function LayoutCarousel() {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div>
        <S.Carousel>
          <Slider {...setting}>
            <S.BoxWrapper>
              <S.Box src="/meyeng.png" width="1920px" />
            </S.BoxWrapper>
            <S.BoxWrapper>
              <S.Box src="/meyeng.png" width="1920px" />
            </S.BoxWrapper>
          </Slider>
        </S.Carousel>
        <S.NewArr>New Arriva</S.NewArr>
      </div>
    </>
  );
}
