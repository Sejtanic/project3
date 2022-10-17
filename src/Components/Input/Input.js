import "./Input.css"
const Input = ({ input, register }) => {
  return (
    <div className="input-style">
      <label htmlFor="">{input?.lable}</label>
      <input
        type={input.type}
        {...register(input.name)}
        placeholder={input.placeholder}
      />
    </div>
  )
}
export default Input
