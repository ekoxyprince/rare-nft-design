import './card.css'

function Card(props){
    return(
        <>
        <div className='card'>
           <img src={props.img} alt="avatar" />
           <h3>{props.title}</h3>
           <p>{props.content}</p>
        </div>
        </>
    )
}

export default Card