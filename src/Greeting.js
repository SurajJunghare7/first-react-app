import "./Greeting.css"

function Greeting(){

let name = "Suraj"
    return (
        <div className="GreetingBox">
        <h2>Hello {name}, Greeting From React App!</h2>
        <p>This Is Our First React Project</p>
        </div>
    )
}

export default Greeting;