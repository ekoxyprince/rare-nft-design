import './header.css'

const Header = ()=>{
  return( 
  <header>
    <div className='nav__logo'>
      <a href="">Krypto</a>
    </div> 
    <div className='nav__bar'>
      <a href="">about</a>
      <a href="">pricing</a>
      <a href="">contact</a>
      <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
  <circle cx="8.5" cy="9" r="8.5" fill="#9091DC"/>
</svg> buy nfts</a>
    </div>
   </header>
  )
}

export default Header