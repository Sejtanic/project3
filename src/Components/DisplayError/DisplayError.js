import "./DisplayError.css"
const DisplayError = ({ valid, message }) => {
  return <p className="error-style">{valid ? "" : message}</p>
}
export default DisplayError
