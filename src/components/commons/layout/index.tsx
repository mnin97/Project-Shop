import styled from "@emotion/styled";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import { useRouter } from "next/router";
import LayoutHeader from "./header/LayoutHeader.container";
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HIDDEN_HEADERS = ["/Login", "/join"];
const HIDDEN_BANNER = ["/Login", "/join"];

interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenBanner && <LayoutBanner />}
      <Body>{props.children}</Body>
      <LayoutFooter />
    </>
  );
}
