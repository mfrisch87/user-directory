import Container from "./Container"
import JumboComponents from "./JumboComponents"

function Jumbotron(){
    return(
        <header className="jumbotron bg-primary text-white">
            <Container>
               <JumboComponents/>
            </Container>
        </header>
    )
}

export default Jumbotron