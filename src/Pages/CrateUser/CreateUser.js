import "./CreateUser.css"
import { useUser } from "../../usersContext"
import { useState } from "react"
import * as yup from "yup"
import { useComponentsData } from "../../customHooks"
import { useNavigate } from "react-router-dom"
import Form from "../../Components/Form/Form"

let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email().required(),
})

const CreateUser = () => {
  const [loading, setLoading] = useState(false)
  const [valid, setValid] = useState(true)
  const { createUser } = useUser()
  const { inputDetailsForm } = useComponentsData()
  const navigate = useNavigate()

  const onSubmitHandler = async (e) => {
    const response = await schema.isValid(e)
    if (!response) return setValid(false)
    setValid(true)
    await createUser(e, setLoading)
    navigate("/")
  }
  return (
    <div className="create-user-style">
      <h2>Create User</h2>
      <Form
        buttonLable={"Create User"}
        errorMessage={"Please enter correct informations"}
        valid={valid}
        loading={loading}
        onSubmit={onSubmitHandler}
        inputs={inputDetailsForm}
      />
    </div>
  )
}
export default CreateUser
