import './Hero.scss';
import Img from '../../assets/hero22.png';

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero__container">
            <div className="hero__left">
                <h1>Fresh<span>&</span>Testy</h1>
                <p className='p-1'>
                    You can achive whate ever you want you just have to work hard every day long,
                     and remmber if others acn do it you can too. Never Give Up, Never Give Up. 
                </p>
                <button className='button-primary'>Make a reservasion</button>
            </div>
            <div className="hero__right">
                <img src={Img} alt="main-img"/>
            </div>
        </div>
    </section>
  )
}

export default Hero