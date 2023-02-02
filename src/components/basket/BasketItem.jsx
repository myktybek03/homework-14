import styled from "styled-components"

import { ReactComponent as MinusIcon } from "../../assets/icons/minus.svg"
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg"

import Button from "../UI/Button"

const BasketItem = ({
  title,
  price,
  amount,
  decrementAmount,
  incrementAmount,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <PriceAndAmountContainer>
          <Price>${price}</Price>
          <Amount>x{amount}</Amount>
        </PriceAndAmountContainer>
        <CounterContainer>
          <Button
            borderStyle="sqaured"
            variant="outlined"
            onClick={decrementAmount}
          >
            <MinusIcon />
          </Button>
          <Button
            borderStyle="sqaured"
            variant="outlined"
            onClick={incrementAmount}
          >
            <PlusIcon />
          </Button>
        </CounterContainer>
      </Content>
    </Container>
  )
}

export default BasketItem

const Container = styled.div`
  padding: 20px 0;
  width: 100%;
  border-bottom: 1px solid rgba(36, 36, 36, 0.09); ;
`

const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
  margin: 0 0 12px 0;
  text-align: start;
`

const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
  margin: 0;
`
const Amount = styled.span`
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  padding: 6px 14px;
  display: block;
`

const PriceAndAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 153px;
`

const CounterContainer = styled.div`
  display: flex;
  gap: 14px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
