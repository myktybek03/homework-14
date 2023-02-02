import React from "react"
import styled from "styled-components"

const Button = ({
  children,
  variant = "contained",
  borderStyle = "rounded",
  ...restProps
}) => {
  return (
    <StyledButton variant={variant} borderStyle={borderStyle} {...restProps}>
      {children}
    </StyledButton>
  )
}

export default Button

const getBackgrounColor = (props) => {
  return props.variant === "contained" ? "#8a2b06" : "#fff"
}
const getBorder = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #8a2b06"
}

const getColor = (props) => {
  return props.variant === "contained" ? "#fff" : "#8a2b06"
}
const getBorderRadius = (props) => {
  return props.borderStyle === "rounded" ? "20px" : "6px"
}
const getIconPadding = (props) => {
  return props.borderStyle === "rounded" ? "10px 32px" : "8px 14px"
}

const StyledButton = styled.button`
  background: ${getBackgrounColor};
  border-radius: ${getBorderRadius};
  padding: ${getIconPadding};
  font-weight: 600;
  line-height: 24px;
  color: ${getColor};
  border: ${getBorder};
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    background: #7e2a0a;
    color: #fff;
    path {
      stroke: #fff;
    }
  }
  :active {
    background: #993108;
  }
`
