import { useEffect, useMemo, useState } from "react"
import Loading from "../../Components/Loading/Loading"
import Search from "../../Components/Search/Search"
import Table from "../../Components/Table/Table"
import { useComponentsData, useLoadMore } from "../../customHooks"
import { useUser } from "../../usersContext"
import "./Home.css"
const Home = () => {
  const { users, getUsers, deleteUser, searchUsers } = useUser()
  const { dataUpdated, loadMore } = useLoadMore(users, 2)
  const { inputDetailsSearch, selectedDetails } = useComponentsData()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getUsers(setLoading)
  }, [])

  const onChangeHandler = useMemo(
    () => (e) => {
      searchUsers(e)
    },
    []
  )

  return (
    <div className="home-style">
      <Search
        onChange={onChangeHandler}
        inputDetails={inputDetailsSearch}
        selectDetails={selectedDetails}
      />
      <Loading loading={loading} lable={"Loading.."} />
      <Table
        lable={["Name", "Age", "Email", "Id"]}
        deleteOption={true}
        data={dataUpdated}
        deleteHandler={deleteUser}
      />
      {loadMore()}
    </div>
  )
}
export default Home
