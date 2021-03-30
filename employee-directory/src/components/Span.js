const Span = ({text, value}) =>{
    return(
        <p className="text-primary">{text}: <span className="text-dark">{value}</span></p>
    )
}

export default Span