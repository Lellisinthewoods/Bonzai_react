import './Home.scss'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header';

function Home() {

  const navigate = useNavigate();
  function handleClick(){
    navigate('/Rooms')
  }
  return (
    <div className='home'>
      <Header />
      <h1>Welcome to the Home Page!</h1>
      <h5 onClick={handleClick}>Go to rooms</h5>
    </div>
  )
}

export default Home