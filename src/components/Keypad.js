// Code Keypad Component Here

function eventHandeler () {
    console.log("Entering password...");
}

function Keypad (){
    return (
        <div>
            <input type = "password" onChange={eventHandeler}>
            </input>
        </div>
    )
}

export default Keypad;