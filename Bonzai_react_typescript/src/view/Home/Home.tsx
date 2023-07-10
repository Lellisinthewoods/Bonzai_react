import './Home.scss'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();
  function handleClick(){
    navigate('/Rooms')
  }
  return (
    <div className='Home'>
      <h1>Welcome to the Home Page!</h1>
      <h5 onClick={handleClick}>Go to rooms</h5>
    </div>
  )
}

export default Home