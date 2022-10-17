import React, { useContext, useState } from "react"
import { searchFilters } from "./helperFunctions"
import axios from "axios"

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API}/users`,
})

const UserContext = React.createContext()

export const useUser = () => {
  return useContext(UserContext)
}

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  let usersData = []

  const getUsers = async (loading) => {
    loading(true)
    try {
      const data = await instance.get()
      setUsers(data.data.reverse())
      usersData = data.data
    } catch (err) {
      console.log(err)
    }
    loading(false)
  }
  const searchUsers = (data) => {
    searchFilters(usersData, data, setUsers)
  }

  const createUser = async (data, loading) => {
    loading((prev) => !prev)
    try {
      return await instance.post("", data)
      // loading((prev) => !prev)
    } catch (err) {
      console.log(err)
      loading((prev) => !prev)
    }
  }
  const deleteUser = async (id) => {
    try {
      await instance.delete(`/${id}`)
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  const value = {
    users,
    getUsers,
    searchUsers,
    createUser,
    deleteUser,
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
