import './Header.scss'

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src="src/assets/logo/bonz.ai-logo-white-symbol.png" alt="" />
      <h3 className="header__option">Select date:</h3>
      <input type="date" className='header__input' placeholder="select date"/>
      <h3 className="header__option">Number of people:</h3>
      <input type="number" className='header__input' placeholder="number of people"/>
      <button className="button">Search</button>
      <img src="src/assets/Hamburger.png" alt="" className="header__navbar"/>
    </header>
  )
}

export default Header