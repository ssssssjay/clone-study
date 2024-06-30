import styled from "styled-components";
import { useState } from "react";
import Icon from "../../components/Icon";
import googleImg from "../../assets/yozmit/google.png";
import facebookImg from "../../assets/yozmit/facebook.png";
import eyeOn from "../../assets/icons/eye_on.svg";
import eyeOff from "../../assets/icons/eye_off.svg";

const StHeader = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 22.54px;
  text-align: center;
  padding-block: 22px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 24px;
`;

const StSignUpForm = styled.form`
  padding-inline: 24px;
`;

const StInnerSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 17.53px;
  color: #bdbdbd;
  position: absolute;
  top: 20px;
  transition: all 300ms ease;
`;

const StLabel = styled.label`
  border: 1px solid #e0e0e0;
  padding: 30px 13px 12px;
  display: block;
  border-radius: 4px;
  position: relative;
  margin-top: 18px;

  &.focused {
    border-color: #3aa3c7;
  }

  &.focused ${StInnerSpan} {
    font-size: 11px;
    font-weight: 400;
    line-height: 13.77px;
    top: 8px;
    color: #3aa3c7;
  }
`;

const StInnerInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;

const StColorSpan = styled.span`
  color: #3aa3c7;
`;

const StCheckbox = styled.input`
  width: 15px;
  height: 15px;
  position: absolute;
  left: 18px;
`;

const StWishketFilledButton = styled.button`
  padding: 14px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.03px;
  text-align: center;
  color: #fff;
  width: 100%;
  background-color: #3aa3c7;
  border-radius: 4px;
  margin-top: 18px;
`;

const StWishketOulinededButton = styled.button`
  padding: 14px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.03px;
  text-align: center;
  color: #616161;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  margin-top: 18px;
  position: relative;

  background-image: url(${(props) => props.image});
  background-size: 24px;
  background-position: 24px;
  background-repeat: no-repeat;
`;

const StBreakWrap = styled.div`
  padding-inline: 24px;
  margin-block: 24px;
  color: #616161;
  font-size: 12px;
  font-weight: 400;
  line-height: 15.02px;
  text-align: center;
  position: relative;

  & > span::after,
  & > span::before {
    display: block;
    content: "";
    width: calc(50% - 44px);
    height: 1px;
    border-bottom: 1px solid #eeeeee;
    position: absolute;
    top: 6px;
  }
  & > span::after {
    left: 24px;
  }
  & > span::before {
    right: 24px;
  }
`;

const StSocialButtonWrap = styled.div`
  padding-inline: 24px;
`;

export default function YozmITSignup() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [idFocused, setIdFocused] = useState(false);
  const [pwFocused, setPwFocused] = useState(false);
  const [pwConfirmFocused, setPwConfirmFocused] = useState(false);

  const [isChecked, setisChecked] = useState(false);

  return (
    <>
      <StHeader>위시켓 통합회원가입</StHeader>
      <StSignUpForm>
        <StLabel htmlFor="email" className={emailFocused ? "focused" : ""}>
          <StInnerSpan>이메일</StInnerSpan>
          <StInnerInput
            type="email"
            id="email"
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
        </StLabel>
        <span
          style={{
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "16.28px",
            color: "#9e9e9e",
            marginTop: "10px",
            display: "inline-block",
            marginLeft: "13px",
          }}
        >
          비즈니즈용 이메일 사용을 권장합니다.
        </span>
        <StLabel htmlFor="signupId" className={idFocused ? "focused" : ""}>
          <StInnerSpan>아이디</StInnerSpan>
          <StInnerInput
            type="text"
            id="signupId"
            onFocus={() => setIdFocused(true)}
            onBlur={() => setIdFocused(false)}
          />
        </StLabel>
        <StLabel htmlFor="password" className={pwFocused ? "focused" : ""}>
          <StInnerSpan>비밀번호</StInnerSpan>
          <StInnerInput
            type="password"
            id="password"
            onFocus={() => setPwFocused(true)}
            onBlur={() => setPwFocused(false)}
          />
        </StLabel>
        <span
          style={{
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "16.28px",
            color: "#9e9e9e",
            marginTop: "10px",
            display: "inline-block",
            marginLeft: "13px",
          }}
        >
          8자 이상 32자 이하로 입력해주세요.
        </span>
        <StLabel
          htmlFor="passwordConfirm"
          className={pwConfirmFocused ? "focused" : ""}
        >
          <StInnerSpan>비밀번호 확인</StInnerSpan>
          <StInnerInput
            type="password"
            id="passwordConfirm"
            onFocus={() => setPwConfirmFocused(true)}
            onBlur={() => setPwConfirmFocused(false)}
          />
        </StLabel>
        <div
          style={{ marginTop: "18px", display: "flex", alignItems: "center" }}
        >
          <StCheckbox
            type="checkbox"
            id="checkAuth"
            onChange={() => setisChecked(!isChecked)}
          />
          {isChecked ? (
            <Icon name={"checked"} width={15} height={15}></Icon>
          ) : (
            <Icon name={"unchecked"} width={15} height={15}></Icon>
          )}

          <label
            htmlFor="checkAuth"
            style={{
              lineHeight: "17.53px",
              display: "inline-block",
              marginLeft: "12px",
            }}
          >
            <StColorSpan>이용약관</StColorSpan> 및
            <StColorSpan> 개인정보 처리방침</StColorSpan>에 동의합니다.
          </label>
        </div>
        <StWishketFilledButton>회원가입</StWishketFilledButton>
      </StSignUpForm>
      <StBreakWrap>
        <span>또는</span>
      </StBreakWrap>

      <StSocialButtonWrap>
        <StWishketOulinededButton style={{ marginTop: "0" }} image={googleImg}>
          구글로 회원가입
        </StWishketOulinededButton>
        <StWishketOulinededButton image={facebookImg}>
          페이스북으로 회원가입
        </StWishketOulinededButton>
        <div style={{ textAlign: "center", paddingBlock: "12px" }}>
          이미 위시켓 통합회원이신가요?<StColorSpan> 로그인</StColorSpan>
        </div>
      </StSocialButtonWrap>
    </>
  );
}
