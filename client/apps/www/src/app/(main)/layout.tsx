import { AppHeader } from "@/components/header";
import { SmoothScroll } from "@/components/smooth-scroll";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <AppHeader />
      <SmoothScroll>{children}</SmoothScroll>
    </>
  );
};

export default layout;
