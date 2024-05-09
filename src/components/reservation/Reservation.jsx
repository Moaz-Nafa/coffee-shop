import './Reservation.scss';
import Img from '../../assets/reservation.webp';


const Reservation = () => {
  return (
    <section className='reservation'>
        <div className="reservation__container">

            <div className="reservation__left">
                <img src={Img} alt="" />
            </div>
            <div className="reservation__right">
                <h2>Make A Reservation</h2>
                <form>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email Adress' />
                    <input type="text" placeholder='Phone On' />
                    <button className='button-primary'>Resevation</button>
                </form>
            </div>

        </div>
    </section>
  )
}

export default Reservation