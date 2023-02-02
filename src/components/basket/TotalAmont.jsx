import React, { useCallback, useMemo } from "react"

import styled from "styled-components"
import Button from "../UI/Button"

const TotalAmont = ({ price, onClose, onOrder }) => {
  const orderButton = useCallback(
    () => (price > 0 ? <Button onClick={onOrder}>Order</Button> : null),
    [onOrder, price]
  )

  const fixedPrice = useMemo(() => price.toFixed(2), [price])

  return (
    <Container>
      <InfoContainer>
        <Label>Total Amout</Label>
        <Price>${fixedPrice}</Price>
      </InfoContainer>

      <ActionButtonsContainer>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        {orderButton()}
      </ActionButtonsContainer>
    </Container>
  )
}

export default TotalAmont

const Container = styled.div`
  padding-top: 30px;
`

const Label = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
  margin: 0;
`

const Price = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
  margin: 0;
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ActionButtonsContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`
