import './buttons.css'




function ButtonSolid(props){
    return(
        <>
        <button className='btn-solid'>{props.title}</button>
        </>
    )
}

function ButtonOutline(props){
    return(
        <>
        <button className='btn-outline'>{props.title}</button>
        </>
    )
}
function Button(props){
    return(
        <>
        <button className='btn btn-dark'>{props.title}</button>
        </>
    )
}

export {ButtonOutline,ButtonSolid,Button}