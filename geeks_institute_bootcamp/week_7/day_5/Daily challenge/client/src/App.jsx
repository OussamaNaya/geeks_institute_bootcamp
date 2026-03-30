import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: '',       // message from GET /api/hello
      inputValue: '',  // controlled input
      response: '',    // message from POST /api/world
    };
  }

  // Part I – fetch the greeting when the component mounts
  async componentDidMount() {
    const res = await fetch('http://localhost:5000/api/hello');
    const data = await res.json();
    console.log("data : ", data);
    this.setState({ hello: data.message });
  }

  // Part II – POST the input value to the server
  handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/world', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post: this.state.inputValue }),
    });

    const text = await res.text();
    this.setState({ response: text });
  };

  render() {
    const { hello, inputValue, response } = this.state;

    return (
      <div style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '40px' }}>
        {/* Part I – display the Express greeting */}
        <h1>{hello}</h1>

        {/* Part II – form that POSTs to the server */}
        <h3>Post to Server:</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>

        {/* Display the server's POST response */}
        {response && <p>{response}</p>}
      </div>
    );
  }
}

export default App;