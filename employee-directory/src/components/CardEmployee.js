import Span from "./Span"

const CardEmployee = ({age,email,name,phone,picture}) =>{

    return(
        <div className="card col-sm">
            <img src={picture} className="card-img-top" alt={name} />
            <div className="card-body">
                <h4 className="card-title text-primary">{name}</h4>
                <Span text="Email" value={email}/>
                <Span text="Phone" value={phone}/>
                <Span text="Age" value={age}/>
            </div>
        </div>
    )
}

export default CardEmployee