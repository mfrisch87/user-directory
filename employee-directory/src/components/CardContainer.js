import CardEmployee from "./CardEmployee.js";

function CardContainer({empList}){
    return(
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 m-0">
        {
            empList.map( emp => {
                return <CardEmployee {...emp}/>
            })
        }
    </div>
    )
}

export default CardContainer