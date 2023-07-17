import './Header.scss'

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src="" alt="" />
      <h3 className="header__option">Select date:</h3>
      <input type="date" className='header__input'/>
      <h3 className="header__option">Number of people:</h3>
      <input type="number" className='header__input'/>
      <button className="button">Search</button>
      <img src="" alt="" className="header__navbar"/>
    </header>
  )
}

export default Header