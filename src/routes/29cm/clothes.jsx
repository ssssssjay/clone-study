import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import Image from "../../components/Image";
import NonItemCard from "../../components/29cm/NonItemCard";
import ItemCard from "../../components/29cm/ItemCard";
import Icon from "../../components/Icon";
import { useState } from "react";

const StSectBanner = styled.section`
  margin-bottom: 16px;
`;

const StSectPromotion = styled.section`
  padding-left: 24px;
  margin-bottom: 46px;
`;

const StPromotionTitle = styled.strong`
  font-size: 15px;
  font-weight: 700;
  line-height: 21.72px;
  margin-bottom: 16px;
  display: block;
`;

const StSectGrid = styled.div`
  padding-inline: 20px;
`;

const StGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2개의 열 */
  grid-gap: 28px 14px; /* 상하 여백 28px, 좌우 여백 14px */
  margin-bottom: 50px;
`;

const StSeeMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 7px;
  background-color: #e6e6e9;
  border-radius: 8px;
  width: 122px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 17px;
`;

const gridItems = [
  {
    title: "도씨",
    description: "실크핏 클린 반팔 카라 커플 잠옷 세트",
    price: 50000,
    priceForSale: 21510,
    imgName: "Item1",
  },
  {
    title: "도씨",
    description: "실크핏 클린 반팔 카라 커플 잠옷 세트",
    price: 50000,
    priceForSale: 21510,
    imgName: "Item1",
  },
  {
    title: "도씨",
    description: "실크핏 클린 반팔 카라 커플 잠옷 세트",
    price: 50000,
    priceForSale: 21510,
    imgName: "Item1",
  },
  {
    title: "도씨",
    description: "실크핏 클린 반팔 카라 커플 잠옷 세트",
    price: 50000,
    priceForSale: 21510,
    imgName: "Item1",
  },
  {
    title: "뚜누",
    description: "안수향 작가 잘 챙겨 먹어 반팔 티셔츠",
    price: 33900,
    priceForSale: 31527,
    imgName: "Item2",
  },
  {
    title: "뚜누",
    description: "안수향 작가 잘 챙겨 먹어 반팔 티셔츠",
    price: 33900,
    priceForSale: 31527,
    imgName: "Item2",
  },
  {
    title: "뚜누",
    description: "안수향 작가 잘 챙겨 먹어 반팔 티셔츠",
    price: 33900,
    priceForSale: 31527,
    imgName: "Item2",
  },
  {
    title: "뚜누",
    description: "안수향 작가 잘 챙겨 먹어 반팔 티셔츠",
    price: 33900,
    priceForSale: 31527,
    imgName: "Item2",
  },
];

export default function Clothes() {
  const [renderIndex, setRenderIndex] = useState(1);

  const renderItemsFirst = gridItems.slice(0, 4);
  const renderItemsSeconde = gridItems.slice(4, 8);

  return (
    <>
      <StSectBanner>
        <Image name={"Banner1"}></Image>
      </StSectBanner>
      <StSectPromotion>
        <StPromotionTitle>프로모션</StPromotionTitle>
        <Swiper slidesPerView={2.2} spaceBetween={8} freeMode={true}>
          <SwiperSlide>
            <NonItemCard
              title={"GLOBAL BRAND"}
              description={"2024.06.18 ~ 07.01"}
              imgName={"NonItem1"}
            ></NonItemCard>
          </SwiperSlide>
          <SwiperSlide>
            <NonItemCard
              title={"GLOBAL BRAND"}
              description={"2024.06.18 ~ 07.01"}
              imgName={"NonItem1"}
            ></NonItemCard>
          </SwiperSlide>
          <SwiperSlide>
            <NonItemCard
              title={"GLOBAL BRAND"}
              description={"2024.06.18 ~ 07.01"}
              imgName={"NonItem1"}
            ></NonItemCard>
          </SwiperSlide>
        </Swiper>
      </StSectPromotion>
      <StSectPromotion>
        <StPromotionTitle>지금 주목해야 할 브랜드</StPromotionTitle>
        <Swiper slidesPerView={2.2} spaceBetween={8}>
          <SwiperSlide>
            <NonItemCard
              title={"GLOBAL BRAND"}
              description={"2024.06.18 ~ 07.01"}
              imgName={"NonItem1"}
            ></NonItemCard>
          </SwiperSlide>
          <SwiperSlide>
            <NonItemCard
              title={"GLOBAL BRAND"}
              description={"2024.06.18 ~ 07.01"}
              imgName={"NonItem1"}
            ></NonItemCard>
          </SwiperSlide>
          <SwiperSlide>
            <NonItemCard
              title={"GLOBAL BRAND"}
              description={"2024.06.18 ~ 07.01"}
              imgName={"NonItem1"}
            ></NonItemCard>
          </SwiperSlide>
        </Swiper>
      </StSectPromotion>
      <StSectGrid>
        <StPromotionTitle>이굿위크</StPromotionTitle>
        <StGridContainer>
          {renderIndex === 1
            ? renderItemsFirst.map((item, idx) => {
                return (
                  <ItemCard
                    key={item.title + idx}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    priceForSale={item.priceForSale}
                    imgName={item.imgName}
                  ></ItemCard>
                );
              })
            : renderItemsSeconde.map((item, idx) => {
                return (
                  <ItemCard
                    key={item.title + idx}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    priceForSale={item.priceForSale}
                    imgName={item.imgName}
                  ></ItemCard>
                );
              })}
        </StGridContainer>
        <StSeeMoreButton
          onClick={() =>
            renderIndex === 1 ? setRenderIndex(2) : setRenderIndex(1)
          }
        >
          <Icon name={"rotate"}></Icon>
          <span style={{ marginLeft: "8px" }}>더보기 {renderIndex}/2</span>
        </StSeeMoreButton>
      </StSectGrid>
    </>
  );
}
