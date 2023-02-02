import React, { memo } from "react"
import styled from "styled-components"
import BackgroundImg from "../../assets/images/summary-background.jpg"

const Summary = () => {
  return (
    <Container>
      <StyledImg src={BackgroundImg} alt="summary" />
    </Container>
  )
}

export default memo(Summary)

const Container = styled.div`
  height: 432px;
`

const StyledImg = styled.img`
  height: 100%;
`
