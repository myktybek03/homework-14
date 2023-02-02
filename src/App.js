import Basket from "./components/basket/Basket"
import Header from "./components/header/Header"
import Meals from "./components/meals/Meals"
import Summary from "./components/summary/Summary"
import styled from "styled-components"
import SummaryInfoCard from "./components/summary/SummaryInfoCard"
import { useCallback, useState } from "react"
import { BasketProvider } from "./components/store/BasketContext"

function App() {
  const [isBasketVisible, setIsBasketVisible] = useState(false)

  const showBasketHansler = useCallback(() => {
    setIsBasketVisible((prevState) => !prevState)
  }, [])

  return (
    <BasketProvider>
      <Header onShowBasket={showBasketHansler} />
      <Content>
        <Summary />
        <SummaryInfoCard />
        <Meals />
        {isBasketVisible && <Basket onClose={showBasketHansler} />}
      </Content>
    </BasketProvider>
  )
}

export default App

const Content = styled.div`
  margin-top: 101px;
`

// GET /foods

// Headers: { UserID: "your_name"  }
// GET /basket
// Headers: { UserID: "your_name"  }
// POST /foods/:foodId/addToBasket
// BODY: { amount: number }
// Headers: { UserID: "your_name"  }
// DELETE /basketItem/:id/delete
// Headers: { UserID: "your_name"  }
// PUT /basketItem/:id/update
// BODY: { amount: number }
// Headers: { UserID: "your_name"  }
