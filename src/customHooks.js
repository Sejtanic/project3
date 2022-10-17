import { useState, useMemo } from "react"
import Button from "./Components/Button/Button"

export const useLoadMore = (data, showElements) => {
  const [loadNumberValue, setLoadNumberValue] = useState(showElements)
  const loadMoreHandler = () => {
    setLoadNumberValue((previouseValuse) => previouseValuse + showElements)
  }

  const dataUpdated = data.slice(0, loadNumberValue)

  const loadMore = () => {
    if (data.length > loadNumberValue) {
      return <Button onClick={loadMoreHandler} lable={"Load More"}></Button>
    }
  }
  return {
    dataUpdated,
    loadMore,
  }
}

export const useComponentsData = () => {
  const inputDetailsSearch = useMemo(
    () => ({
      type: "text",
      name: "search",
      placeholder: "search..",
    }),
    []
  )

  const selectedDetails = useMemo(
    () => ({
      name: "category",
      lable: "Search by",
      options: [
        {
          value: "name",
          lable: "Name",
        },
        {
          value: "age",
          lable: "Age",
        },
        {
          value: "email",
          lable: "Email",
        },
        {
          value: "id",
          lable: "Id",
        },
      ],
    }),
    []
  )

  const inputDetailsForm = [
    {
      lable: "Name",
      placeholder: "Enter Name",
      name: "name",
      type: "text",
    },
    {
      lable: "Age",
      placeholder: "Enter Age",
      name: "age",
      type: "text",
    },
    {
      lable: "Email",
      placeholder: "Enter Email",
      name: "email",
      type: "email",
    },
  ]
  return {
    inputDetailsSearch,
    inputDetailsForm,
    selectedDetails,
  }
}
