function Car(props) {
    const { name, model } = props;

    return (
        <div>
            <h1>This Car name it {name} and model it {model}</h1>
        </div>
    );
}

export default Car;