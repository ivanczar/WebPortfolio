
import { Button } from "./ScrollElements";
import { animateScroll as scroll } from "react-scroll";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const scrollUp = () => {
  scroll.scrollToTop();
};
const ScrollButtonView = () => {
  return (
    <Button to="/" onClick={scrollUp}>
      <BsFillArrowUpCircleFill  />
    </Button>
  );
};

export default ScrollButtonView;
