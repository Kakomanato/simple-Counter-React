
const Counter = ({time}) => {

 

  return(

  <div className="Timer">
    <div className="Clock"><i className="fa-regular fa-clock"></i></div>
    <div className="Digit">{Math.floor(time / 1000000) % 10}</div>
    <div className="Digit">{Math.floor(time / 100000) % 10}</div>
    <div className="Digit">{Math.floor(time / 10000) % 10}</div>
    <div className="Digit">{Math.floor(time / 1000) % 10}</div>
    <div className="Digit">{Math.floor(time / 100) % 10}</div>
    <div className="Digit">{Math.floor(time / 10) % 10}</div>
    <div className="Digit">{Math.floor(time / 1) % 10}</div>
  </div>
)

}


export default Counter