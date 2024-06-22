import arrowLeft from "../assets/icons/arrow-left.svg";
import menu from "../assets/icons/menu.svg";
import search from "../assets/icons/search.svg";
import arrowDownSm from "../assets/icons/arrow-down-sm.svg";
import rotate from "../assets/icons/rotate.svg";
import like from "../assets/icons/like.svg";

export default function Icon({ name, width = 20, height = 20 }) {
  const icons = {
    arrowLeft,
    menu,
    search,
    arrowDownSm,
    rotate,
    like,
  };
  return <img src={icons[name]} alt="" style={{ width, height }} />;
}
