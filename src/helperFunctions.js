export const searchFilters = (usersData, data, setUsers) => {
  if (data.category === "name") {
    setUsers(
      usersData.filter((user) =>
        user.name.toLowerCase().startsWith(data.search.toLowerCase())
      )
    )
  }
  if (data.category === "age") {
    setUsers(usersData.filter((user) => user.age.startsWith(data.search)))
  }
  if (data.category === "id") {
    setUsers(usersData.filter((user) => user.id === +data.search))
  }
  if (data.category === "email") {
    setUsers(
      usersData.filter((user) =>
        user.email.toLowerCase().startsWith(data.search.toLowerCase())
      )
    )
  }
  if (data.search === "") {
    setUsers(usersData)
  }
}
