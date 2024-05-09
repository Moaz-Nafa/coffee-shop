import './Wrapper.scss'

const Wrapper = ({className, chlidren}) => {
  return (
    <div className={`wrapper ${className || ""}`}>{chlidren}</div>
  )
}

export default Wrapper