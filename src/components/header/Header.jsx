import React, { useCallback, useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { BasketContext } from "../store/BasketContext"
import BasketButton from "./BasketButton"

const Header = ({ onShowBasket }) => {
  const { items } = useContext(BasketContext)
  const [animationClass, setAnimationClass] = useState("")

  const calculateTotalAmount = useCallback(() => {
    const sum = items.reduce((s, item) => {
      return s + item.amount
    }, 0)

    return sum
  }, [items])

  useEffect(() => {
    setAnimationClass("bump")

    const id = setTimeout(() => {
      setAnimationClass("")
    }, 300)

    return () => {
      clearTimeout(id)
    }
  }, [items])

  return (
    <Container>
      <Logo>React Meals</Logo>
      <BasketButton
        onClick={onShowBasket}
        className={animationClass}
        count={calculateTotalAmount()}
      />
    </Container>
  )
}

export default Header

const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 101px;
  background: #8a2b06;
  padding: 0 120px;
  align-items: center;
  z-index: 1;
`

const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`
