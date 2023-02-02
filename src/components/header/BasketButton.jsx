import React from "react"
import styled from "styled-components"
import { ReactComponent as BasketIcon } from "../../assets/icons/basket-icon.svg"

const BasketButton = ({ count, ...restProps }) => {
  return (
    <StyledButton {...restProps}>
      <BasketIcon />
      <StyledTitle>You Cart</StyledTitle>
      <StyledCounter id="counter">{count || 0}</StyledCounter>
    </StyledButton>
  )
}

export default BasketButton

const StyledButton = styled.button`
  background: #5a1f08;
  border-radius: 20px;
  padding: 12px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #2c0d00;
  }

  &:hover > #counter {
    background: #662207;
  }
  &.bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`

const StyledTitle = styled.span`
  margin: 0 24px 0 12px;
`

const StyledCounter = styled.span`
  background: #8a2b06;
  border-radius: 30px;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  padding: 4px 20px;
`
