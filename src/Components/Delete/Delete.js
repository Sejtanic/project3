import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import "./Delete.css"
const Delete = ({ id, deleteHandler }) => {
  return (
    <td className="delete-style" onClick={() => deleteHandler(id)}>
      <FontAwesomeIcon icon={faTrash} />
    </td>
  )
}
export default Delete
