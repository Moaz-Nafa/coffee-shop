import { useState } from 'react';
import './Stats.scss';
import { useEffect } from 'react';

const Stats = ({maxRange}) => {

    const [counter1, setCounter1] = useState(maxRange);
    useEffect(()=>{
        if(counter1 < 432){
            setTimeout(()=> setCounter1(counter1 + 1),40)
        }
    },[counter1])
////////////////////////////////////////////////////////////////
    const [counter2, setCounter2] = useState(maxRange);
    useEffect(()=>{
        if(counter2 < 29){
            setTimeout(()=> setCounter2(counter2 + 1),1000)
        }
    },[counter2])
//////////////////////////////////////////////////////////////////    
    const [counter3, setCounter3] = useState(maxRange);
    useEffect(()=>{
        if(counter3 < 589){
            setTimeout(()=> setCounter3(counter3 + 1),50)
        }
    },[counter3])
//////////////////////////////////////////////////////////////////    
    const [counter4, setCounter4] = useState(maxRange);
    useEffect(()=>{
        if(counter4 < 287){
            setTimeout(()=> setCounter4(counter4 + 1),70)
        }
    },[counter4])

  return (
    <section className='stats'>
        <div className="stats__container">
            <div className="stats__point">
                <h1>+{counter1}</h1>
                <p>Donates</p>
            </div>
            <div className="stats__point">
                <h1>+{counter2}</h1>
                <p>Years of Expereince</p>
            </div>
            <div className="stats__point">
                <h1>+{counter3}</h1>
                <p>Coffee</p>
            </div>
            <div className="stats__point">
                <h1>+{counter4}</h1>
                <p>Reviews</p>
            </div>
        </div>
    </section>
  )
}

export default Stats