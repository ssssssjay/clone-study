import styled from "styled-components"
import Image from "../Image"

const StCardWrap = styled.div`
  width: 160px;
  height: 173px;
`

const StCardTitle = styled.strong`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
`

const StCardDecription = styled.p`
  font-weight: 100;
  font-size: 12px;
  line-height: 17px;
  margin-top: 8px;
`

export default function NonItemCard({ title, description, imgName }) {
  return (
    <StCardWrap>
      <Image name={imgName} style={{borderRadius: '8px'}}></Image>
      <StCardTitle>{ title }</StCardTitle>
      <StCardDecription>{ description }</StCardDecription>
    </StCardWrap>
  )
}