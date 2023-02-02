import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { fetchAPI } from "../../lib/fetchApi"
import MealItem from "./meal-item/MealItem"

// const DUMMY_MEALS = [
//   {
//     id: "meal1",
//     title: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "meal2",
//     title: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.0,
//   },
//   {
//     id: "meal3",
//     title: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "meal4",
//     title: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 19.99,
//   },
// ]

const Meals = () => {
  const [meals, setMeals] = useState([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const getMeals = async () => {
    try {
      const response = await fetchAPI("foods")

      setMeals(response.data)
      setIsLoading(false)
    } catch (error) {
      setError("Failed to load meals")
    }
  }

  useEffect(() => {
    getMeals()
  }, [])

  return (
    <Card>
      <ul>
        {isLoading && <p>Loading.........</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {meals.map((meal, index) => {
          return (
            <MealItem
              key={index}
              title={meal.title}
              description={meal.description}
              price={meal.price}
              id={meal._id}
            />
          )
        })}
      </ul>
    </Card>
  )
}
export default Meals

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 64.9375rem;
  margin: 40px auto;
  padding: 40px 40px 36px 40px;
`
