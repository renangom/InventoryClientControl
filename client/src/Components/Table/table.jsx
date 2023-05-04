import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Table({data}) {

    const deleteUser = async(id) => {
        axios.delete(`http://localhost:5000/${id}`)
    }
  return (
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
            {data.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td><button className="btn btn-del" onClick={() => deleteUser(item.id)}> Delete </button></td>
                        <td><button className="btn btn-up"> <Link to={`/client/${item.id}`}>Update</Link> </button></td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}
