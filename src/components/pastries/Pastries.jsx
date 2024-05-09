import './Pastries.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Img1 from '../../assets/pasty-1.png';
import Img2 from '../../assets/pasty-2.png';
import Img3 from '../../assets/pasty-3.png';
import Img4 from '../../assets/pasty-4.png';
import Img5 from '../../assets/pasty-5.png';
import Img6 from '../../assets/pasty-6.png';
import Img7 from '../../assets/pasty-7.png';
import Img8 from '../../assets/pasty-8.png';
import Img9 from '../../assets/pasty-9.png';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const data = [
    {
        name: 'Brief',
        price: '8$',
        img: Img1
    },
    {
        name: 'Brief',
        price: '8$',
        img: Img2
    },
    {
        name: 'Brief',
        price: '8$',
        img: Img3
    },
    {
        name: 'Brief',
        price: '8$',
        img: Img4
    },
    {
        name: 'Brief',
        price: '8$',
        img: Img5
    },
    {
        name: 'Brief',
        price: '8$',
        img: Img6
    },
    {
        name: 'Brief',
        price: '8$',
        img: Img7
    },
    {
        name: 'Brief',
        price: '8$',
        img: Img8
    },
    {
        name: 'Brief',
        price: '8$',
        img: Img9
    }
]

const Pastries = () => {
  return (
    <section className='flower'>

        <div className="flower__text">
            <h2>Pastries</h2>
            <p className='p-2'>
                You can achive whate ever you want you just have to work hard every day long,
                and remmber if others acn do it you can too. Never Give Up, Never Give Up.
            </p>
        </div>

        <Carousel 
            responsive={responsive}
            infinite={true}
            removeArrowOnDeviceType={["tablet"]}
            autoPlay={true}
        >
            {
                data.map(({name,price,img}) => (
                    <div className="flower__card">
                        <img src={img} alt="img" />
                        <h3>{name}</h3>
                        <p>{price}</p>
                    </div>
                ))
            }
        </Carousel>

        <div className="flower__btn">
            <button className="button-primary">Go To Menu</button>
        </div>
    </section>
  )
}

export default Pastries