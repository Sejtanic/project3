import "./App.css"
import { useUser } from "./usersContext"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Navigation from "./Components/Navigation/Navigation"
import CreateUser from "./Pages/CrateUser/CreateUser"

function App() {
  return (
    <div className="App">
      <Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
        </Routes>
      </Navigation>
    </div>
  )
}

export default App
