import React from "react"
import styled from "styled-components"

const SummaryInfoCard = () => {
  return (
    <div>
      <SummaryCard>
        <SummaryInfo>
          <Title>Delicious Food, Delivered To You</Title>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by  experienced chefs!
          </p>
        </SummaryInfo>
      </SummaryCard>
    </div>
  )
}

export default SummaryInfoCard

const SummaryCard = styled.div`
  text-align: center;
  margin: -160px auto auto;
  background-color: #383838;
  border-radius: 14px;
  position: relative;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.5);
  width: 854px;
  height: 270px;
  color: #fff;
  display: grid;
  align-items: center;
  padding: 1rem;
`

const SummaryInfo = styled.div`
  padding: 0 40px;
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
`
