import Banner1 from "../assets/29cm/Banner1.png";
import NonItem1 from "../assets/29cm/NonItem1.png";
import Item1 from "../assets/29cm/Item1.jpeg";
import Item2 from "../assets/29cm/Item2.jpeg";
import Item3 from "../assets/29cm/Item3.jpeg";
import google from "../assets/yozmit/google.png";

export default function Image({ name, style = {} }) {
  const image = {
    Banner1,
    NonItem1,
    Item1,
    Item2,
    Item3,
    google,
  };
  return (
    <>
      <img src={image[name]} alt={name} style={{ ...style }} />
    </>
  );
}
