import { FETCH_USED_ITEMS } from "./Main.queries";
import {
  Arrival,
  Carrusel,
  Comment,
  HeartIcon,
  ListBoxImg,
  ListWrapper,
  ListWrapperMain,
  Price,
  Shop,
  Status,
  Title,
} from "./Main.style";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import LayoutCarousel from "../carousel/carousel.presenter";

export default function MainPageUI(props: any) {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  // const usedItem = props.data?.fetchUseditems.slice(0, 8);
  return (
    <>
      <div>
        <LayoutCarousel></LayoutCarousel>
        <Arrival>New Arrival</Arrival>
        <ListWrapperMain>
          {props.data?.fetchUseditems.slice(0, 8).map((el: any, i: any) => (
            <ListWrapper id={el._id} key={i}>
              <ListBoxImg
                id={el._id}
                onClick={props.onClickMoveToDetail}
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
              <HeartIcon />
              <Comment>
                <Title>{el.tags}</Title> <Price>{el.price}원</Price>
                <Shop>{el.name}</Shop>
                <Status>[당일출고/주문폭주]{el.remarks}</Status>
              </Comment>
            </ListWrapper>
          ))}
        </ListWrapperMain>
      </div>
    </>
  );
}
