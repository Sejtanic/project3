import "./Button.css"
const Button = ({ onClick, lable, loading }) => {
  return (
    <button disabled={loading} className="button-style" onClick={onClick}>
      {lable}
    </button>
  )
}
export default Button
