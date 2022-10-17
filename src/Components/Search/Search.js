import React from "react"
import Input from "../Input/Input"
import "./Search.css"
import { useForm } from "react-hook-form"

const Search = ({ selectDetails, inputDetails, onChange }) => {
  const { register, handleSubmit } = useForm()

  return (
    <div className="search-style" onChange={handleSubmit(onChange)}>
      {selectDetails && (
        <select {...register(selectDetails.name)} id="">
          {selectDetails.options.map((option) => (
            <option key={Math.random()} value={option.value}>
              {option.lable}
            </option>
          ))}
        </select>
      )}
      <Input input={inputDetails} register={register} />
    </div>
  )
}
export default React.memo(Search)
