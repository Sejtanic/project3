import "./Loading.css"
const Loading = ({ loading }) => {
  return <div className="loading">{loading ? <span>&#x21bb;</span> : ""}</div>
}
export default Loading
