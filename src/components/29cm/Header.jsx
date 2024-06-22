import Icon from '../Icon'
import styled from 'styled-components'

const StHeader = styled.header`
  padding: 16px 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  /* TODO: positioning */
`

const StHeaderDropdown = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const StHeaderDropdownButton = styled.button`
  margin-right: 6px;
`

const StHeaderRightButtonWrap = styled.div`
  display: flex;
  align-items: center;
`

const StSearchButton = styled.button`
  margin-right: 15px;
`

export default function Header() {
  return (
    <>
      <StHeader>
        <div>
          <button>
            <Icon name={'arrowLeft'} width={23} height={20}></Icon>
          </button>
        </div>
        <StHeaderDropdown>
          <StHeaderDropdownButton>남성의류</StHeaderDropdownButton>
          <Icon name={'arrowDownSm'} width={10} height={5}></Icon>
        </StHeaderDropdown>
        <StHeaderRightButtonWrap>
          <StSearchButton>
            <Icon name={'search'} width={23} height={23}></Icon>
          </StSearchButton>
          <button>
            <Icon name={'menu'} width={27} height={25}></Icon>
          </button>
        </StHeaderRightButtonWrap>
      </StHeader>
    </>
  )
}