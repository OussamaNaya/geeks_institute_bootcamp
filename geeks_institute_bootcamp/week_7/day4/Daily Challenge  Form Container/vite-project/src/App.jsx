import FormComponent from './components/FormComponent';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        destination: "",
        lactoseFree: false,
        nutsFree: false,
        vegan: false,
      }
    };
  }

  handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: type === "checkbox" ? checked : value
      }
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const query = new URLSearchParams(this.state.formData).toString();
    window.location.href = `http://localhost:3000/?${query}`;
  };

  render() {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh" }}>
        {/* Header sombre */}
        <div style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px 15px"
        }}>
          <h1 style={{ margin: 0 }}>Sample form</h1>
        </div>

        {/* Zone formulaire beige/sable */}
        <div style={{
          backgroundColor: "#d4a96a",
          padding: "15px"
        }}>
          <FormComponent
            formData={this.state.formData}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default App;