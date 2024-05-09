import './Cta.scss'
import Img from '../../assets/cta-1.svg';

const Cta = () => {
  return (
    <section className='cta'>
        <div className="cat__container">
            <div className="cat__flex">
                <img src={Img} alt="img" className='cat__img'/>

                <div className="cat__text">
                    <h2>Try Our Special Desert</h2>
                    <button className='button-primary'>Go To Menu</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cta