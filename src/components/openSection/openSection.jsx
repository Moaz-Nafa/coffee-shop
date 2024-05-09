import './openSection.scss';
import Img1 from '../../assets/open-1.webp';
import Img2 from '../../assets/open-2.webp';

const OpenSection = () => {
  return (
    <section className='open'>
        <div className="open__container">

            <div className="open__first">
                <div>
                    <img src={Img1} alt="img" />
                </div>
                <div className="open__text">
                    <h2>The Best Day Starts Here</h2>
                    <p>You can achive whate ever you want you just have to work hard every day long,
                        and remmber if others acn do it you can too. Never Give Up, Never Give Up.
                    </p>
                </div>
            </div>

            <div className="open__secound">
                <div className="open__text">
                    <h2>Open Evertday</h2>
                    <p>You can achive whate ever you want you just have to work hard every day long,
                        and remmber if others acn do it you can too. Never Give Up, Never Give Up.
                    </p>
                </div>
                <div>
                    <img src={Img2} alt="img" />
                </div> 
            </div>

            
        </div>
    </section>
  )
}

export default OpenSection