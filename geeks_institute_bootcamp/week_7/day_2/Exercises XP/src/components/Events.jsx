const ClickMe = () => {
    alert("I was clicked");
}

function Events() {
    return (
        <button onClick={ClickMe}>Click me</button>
    )
}

export default Events;