import Button from "../Button/Button"
import { useForm } from "react-hook-form"
import "./Form.css"
import Input from "../Input/Input"
import DisplayError from "../DisplayError/DisplayError"

const Form = ({
  inputs,
  onSubmit,
  onChange,
  loading,
  valid,
  errorMessage,
  buttonLable,
}) => {
  const { register, handleSubmit } = useForm()

  return (
    <form
      className="form-style"
      onSubmit={handleSubmit(onSubmit)}
      onChange={onChange}
    >
      {inputs.map((input) => (
        <Input key={Math.random()} input={input} register={register} />
      ))}
      <DisplayError valid={valid} message={errorMessage} />
      <Button lable={buttonLable} loading={loading} />
    </form>
  )
}
export default Form
