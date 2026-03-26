import React from "react";

class FormComponent extends React.Component {
  render() {
    const { formData, handleChange, handleSubmit } = this.props;

    const inputStyle = {
      width: "60%",
      padding: "6px 8px",
      margin: "5px 0 15px 0",
      border: "1px solid #999",
      boxSizing: "border-box",
      backgroundColor: "#fff",
      fontSize: "14px"
    };

    const sectionStyle = { marginBottom: "10px" };

    const buttonStyle = {
      padding: "8px 25px",
      backgroundColor: "#e0e0e0",
      color: "#000",
      border: "1px solid #999",
      cursor: "pointer",
      marginTop: "15px",
      fontSize: "14px",
      fontWeight: "bold"
    };

    const infoSectionStyle = {
      backgroundColor: "#1f5f5b",
      color: "#fff",
      padding: "15px 20px",
      marginTop: "0"
    };

    const infoLabelStyle = {
      fontStyle: "italic",
      marginBottom: "10px",
      fontSize: "15px"
    };

    return (
      <>
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div style={sectionStyle}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* Last Name */}
          <div style={sectionStyle}>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* Age */}
          <div style={sectionStyle}>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* Gender */}
          <div style={{ ...sectionStyle, marginTop: "10px" }}>
            <label style={{ display: "block", marginBottom: "4px" }}>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              /> Male
            </label>
            <label style={{ display: "block", marginBottom: "4px" }}>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              /> Female
            </label>
          </div>

          {/* Destination */}
          <div style={sectionStyle}>
            <p style={{ margin: "10px 0 5px", fontWeight: "bold" }}>Select your destination</p>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              style={{ padding: "4px", fontSize: "14px" }}
            >
              <option value="">-- Please Choose a destination --</option>
              <option value="Japan">Japan</option>
              <option value="France">France</option>
              <option value="Brazil">Brazil</option>
            </select>
          </div>

          {/* Dietary restrictions */}
          <div style={{ ...sectionStyle, marginTop: "10px" }}>
            <p style={{ margin: "10px 0 5px", fontWeight: "bold", fontStyle: "italic" }}>
              Dietary restrictions:
            </p>
            <label style={{ display: "block", marginLeft: "15px" }}>
              <input
                type="checkbox"
                name="nutsFree"
                checked={formData.nutsFree}
                onChange={handleChange}
              /> Nuts free
            </label>
            <label style={{ display: "block", marginLeft: "15px" }}>
              <input
                type="checkbox"
                name="lactoseFree"
                checked={formData.lactoseFree}
                onChange={handleChange}
              /> Lactose free
            </label>
            <label style={{ display: "block", marginLeft: "15px" }}>
              <input
                type="checkbox"
                name="vegan"
                checked={formData.vegan}
                onChange={handleChange}
              /> Vegan
            </label>
          </div>

          <button type="submit" style={buttonStyle}>Submit</button>
        </form>

        {/* Section "Entered information" en vert-teal */}
        <div style={infoSectionStyle}>
          <h2 style={{ marginTop: 0, marginBottom: "15px" }}>Entered information:</h2>

          <p style={infoLabelStyle}>Your name: {formData.firstName} {formData.lastName}</p>
          <p style={infoLabelStyle}>Your age: {formData.age}</p>
          <p style={infoLabelStyle}>Your gender: {formData.gender}</p>
          <p style={infoLabelStyle}>Your destination: {formData.destination}</p>
          <p style={infoLabelStyle}>Your dietary restrictions:</p>
          <ul style={{ listStyle: "none", padding: "0 0 0 15px", margin: 0 }}>
            <li>**Nuts free : {formData.nutsFree ? "Yes" : "No"}</li>
            <li>**Lactose free : {formData.lactoseFree ? "Yes" : "No"}</li>
            <li>**Vegan meal : {formData.vegan ? "Yes" : "No"}</li>
          </ul>
        </div>
      </>
    );
  }
}

export default FormComponent;