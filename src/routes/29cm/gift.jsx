import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import Image from "../../components/Image";
import NonItemCard from "../../components/29cm/NonItemCard";
import ItemCard from "../../components/29cm/ItemCard";
import Icon from "../../components/Icon";
import { useState } from "react";

const StTabNav = styled.nav``;
const StTabItem = styled.button`
  padding: 12px 10px;
  min-width: 120px;
`;
const StSectBanner = styled.section`
  margin-bottom: 16px;
`;
const StSectionTitle = styled.strong`
  font-size: 15px;
  font-weight: 700;
  line-height: 21.72px;
  margin-bottom: 16px;
  display: block;
`;
const StSectGrid = styled.div`
  padding-inline: 20px;
  margin-bottom: 102px;
`;
const StGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2개의 열 */
  grid-gap: 28px 14px; /* 상하 여백 28px, 좌우 여백 14px */
  margin-bottom: 50px;
`;
const StGridSeemoreButton = styled.button`
  width: 100%;
  border: 1px solid #d9d9d9;
  padding-block: 16px;
  text-align: center;
`;
const StSectGift1 = styled.section`
  padding-left: 24px;
  margin-bottom: 46px;
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

export default function Gift() {
  return (
    <>
      <StTabNav>
        <StTabItem>큐레이션</StTabItem>
        <StTabItem>베스트</StTabItem>
        <StTabItem>테마선물</StTabItem>
      </StTabNav>
      <StSectBanner>
        <Image name={"Banner1"}></Image>
      </StSectBanner>
      <StSectGrid>
        <StSectionTitle>요즘 많이 하는 선물</StSectionTitle>
        <Swiper slidesPerView={4.3} freeMode={true}>
          <SwiperSlide>
            <StTabItem>전체</StTabItem>
          </SwiperSlide>
          <SwiperSlide>
            <StTabItem>생활/키친</StTabItem>
          </SwiperSlide>
          <SwiperSlide>
            <StTabItem>의류</StTabItem>
          </SwiperSlide>
          <SwiperSlide>
            <StTabItem>액세서리</StTabItem>
          </SwiperSlide>
          <SwiperSlide>
            <StTabItem>가방</StTabItem>
          </SwiperSlide>
          <SwiperSlide>
            <StTabItem>홈/인테리어</StTabItem>
          </SwiperSlide>
        </Swiper>
        <StGridContainer>
          {gridItems.map((item, idx) => {
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
        <StGridSeemoreButton>선물 베스트 전체보기</StGridSeemoreButton>
      </StSectGrid>
      <StSectGift1>
        <StSectionTitle>
          새로운 계절, 일상을 환기해 줄 속옷과 잠옷
        </StSectionTitle>
        <Swiper slidesPerView={2.2} spaceBetween={8} freeMode={true}>
          <SwiperSlide>
            <ItemCard
              title={"GLOBAL BRAND"}
              description={"2024.06.18 ~ 07.01"}
              imgName={"Item1"}
              price={9900}
              priceForSale={9900}
            ></ItemCard>
          </SwiperSlide>
          <SwiperSlide>
            <ItemCard
              title={"GLOBAL BRAND"}
              description={"2024.06.18 ~ 07.01"}
              imgName={"Item1"}
              price={9900}
              priceForSale={9900}
            ></ItemCard>
          </SwiperSlide>
          <SwiperSlide>
            <ItemCard
              title={"GLOBAL BRAND"}
              description={"2024.06.18 ~ 07.01"}
              imgName={"Item1"}
              price={9900}
              priceForSale={9900}
            ></ItemCard>
          </SwiperSlide>
        </Swiper>
      </StSectGift1>
      <StSectGift1>
        <StSectionTitle>유튜버 이사배의 레이어링 무드 체인저</StSectionTitle>
        <Swiper slidesPerView={2.2} spaceBetween={8} freeMode={true}>
          <SwiperSlide>
            <ItemCard
              title={"GLOBAL BRAND"}
              description={"2024.06.18 ~ 07.01"}
              imgName={"Item1"}
              price={9900}
              priceForSale={9900}
            ></ItemCard>
          </SwiperSlide>
          <SwiperSlide>
            <ItemCard
              title={"GLOBAL BRAND"}
              description={"2024.06.18 ~ 07.01"}
              imgName={"Item1"}
              price={9900}
              priceForSale={9900}
            ></ItemCard>
          </SwiperSlide>
          <SwiperSlide>
            <ItemCard
              title={"GLOBAL BRAND"}
              description={"2024.06.18 ~ 07.01"}
              imgName={"Item1"}
              price={9900}
              priceForSale={9900}
            ></ItemCard>
          </SwiperSlide>
        </Swiper>
      </StSectGift1>
      <StSectGift1>
        <StSectionTitle>소중한 반려견을 위한 선물</StSectionTitle>
        <Swiper slidesPerView={2.2} spaceBetween={8} freeMode={true}>
          <SwiperSlide>
            <ItemCard
              title={"아이캔더"}
              description={"[콤보] 지게백+울리쿠션"}
              imgName={"Item3"}
              price={9900}
              priceForSale={9900}
            ></ItemCard>
          </SwiperSlide>
          <SwiperSlide>
            <ItemCard
              title={"아이캔더"}
              description={"[콤보] 지게백+울리쿠션"}
              imgName={"Item3"}
              price={9900}
              priceForSale={9900}
            ></ItemCard>
          </SwiperSlide>
          <SwiperSlide>
            <ItemCard
              title={"아이캔더"}
              description={"[콤보] 지게백+울리쿠션"}
              imgName={"Item3"}
              price={9900}
              priceForSale={9900}
            ></ItemCard>
          </SwiperSlide>
        </Swiper>
      </StSectGift1>
    </>
  );
}
