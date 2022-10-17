import Delete from "../Delete/Delete"
import "./Table.css"
const Table = ({ data, lable, deleteOption, deleteHandler }) => {
  return (
    <table className="table-style">
      <thead>
        <tr>
          {lable.map((lable) => (
            <th key={Math.random()}>{lable}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((element) => {
          return (
            <tr key={element.id} id={element.id}>
              {Object.values(element).map((element) => (
                <td key={Math.random()}>{element}</td>
              ))}
              {deleteOption && (
                <Delete deleteHandler={deleteHandler} id={element.id} />
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
export default Table
