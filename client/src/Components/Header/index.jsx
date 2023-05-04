import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { logout } from '../../store/userSlice';
import {Link} from 'react-router-dom'

export default function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
    window.location.reload();
  }
  return (
    <header className="header">
      <nav className="nav">
        <div className="user">
          <div className='icon'>

          </div>
          <Link to={`/user/${user.id}`}><span className="name">{user.username}</span></Link>
        </div>
        <button className="logout" onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  )
}
