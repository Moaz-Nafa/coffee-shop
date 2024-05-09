import './Footer.scss';
import Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <footer className='footer'>
        <img src={Logo} alt="logo" />
        <ul className='footer__links'>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
        </ul>
    </footer>
  )
}

export default Footer