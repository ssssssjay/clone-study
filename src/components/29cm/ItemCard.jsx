import styled from "styled-components";
import Image from "../Image";
import Icon from "../Icon";

const StCardWrap = styled.div`
  max-width: 167px;
  min-height: 221px;
  padding-bottom: 10px;
`;

const StCardTitle = styled.strong`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

const StCardDecription = styled.p`
  font-weight: 100;
  font-size: 12px;
  line-height: 17px;
  margin-top: 8px;
  margin-bottom: 6px;
`;

const StMiddleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StCardPriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StPriceTxt = styled.span`
  font-size: 12px;
  font-weight: 350;
  line-height: 20px;
  color: #adb0b7;
  text-decoration: line-through;
  margin-right: 9px;
`;

const StDiscountTxt = styled.span`
  color: #e5102e;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
`;

export default function ItemCard({
  title,
  description,
  imgName,
  like = false,
  price,
  priceForSale,
}) {
  const isDiscount = price !== priceForSale;
  const discountRate = Math.floor(((price - priceForSale) / price) * 100);

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <StCardWrap>
      <Image
        name={imgName}
        style={{
          borderRadius: "8px",
          maxWidth: "100%",
          marginBottom: "8px",
        }}
      ></Image>
      <StMiddleWrap>
        <StCardTitle>{title}</StCardTitle>
        <button onClick={() => console.log("clicked", title)}>
          <Icon name={"like"} width={23} height={14}></Icon>
        </button>
      </StMiddleWrap>
      <StCardDecription>{description}</StCardDecription>
      <StCardPriceWrap>
        {isDiscount ? (
          <>
            <StCardTitle>{formatNumber(priceForSale)} 원</StCardTitle>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StPriceTxt>{formatNumber(price)} 원</StPriceTxt>
              <StDiscountTxt>{discountRate}%</StDiscountTxt>
            </div>
          </>
        ) : (
          <StCardTitle>{formatNumber(priceForSale)} 원</StCardTitle>
        )}
      </StCardPriceWrap>
    </StCardWrap>
  );
}
