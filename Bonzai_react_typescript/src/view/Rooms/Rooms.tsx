import './Rooms.scss'
import {useNavigate} from 'react-router-dom'

function Rooms() {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/')
  }
  return (
    <div>
      <h1>Welcome to the Room Page!</h1>
      <h5 onClick={handleClick}>Go to Home</h5>
    </div>
  )
}

export default Rooms