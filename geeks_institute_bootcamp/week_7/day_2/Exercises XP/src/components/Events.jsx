const ClickMe = () => {
    alert("I was clicked");
}

const hundelKeyDown = (event) => {
    if (event.key == 'Enter') {
        const content = event.target.value;
        alert(`The Enter key was pressed, your input is : ${content}`);
    }

}

function Events() {
    return (
        <>
            <input type="text" placeholder="Press the Enter key !" onKeyDown={hundelKeyDown} />
            <button onClick={ClickMe}>Click me</button>
        </>
    )
}

export default Events;