import React from "react";

// 👶 Composant enfant
class Child extends React.Component {
  componentWillUnmount() {
    // 🔴 appelé juste avant que React supprime ce composant du DOM
    alert("Child component is about to be unmounted!");
    console.log("🗑️ Child componentWillUnmount executed");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);

    // 🟢 ÉTAPE 0 (Mounting)
    this.state = {
      favoriteColor: "red", // couleur initiale
      show: true // affichage du Child
    };

    console.log("1️⃣ constructor → initialisation du state");
  }

  // 🔹 1. getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("2️⃣ getDerivedStateFromProps → sync props/state");
    return null;
  }

  // 🔹 2. shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    console.log("3️⃣ shouldComponentUpdate → décision de re-render");
    return true;
  }

  // 🔹 Mounting
  componentDidMount() {
    console.log("5️⃣ componentDidMount → composant monté");

    // changement automatique après 2s
    setTimeout(() => {
      console.log("⏳ Timer → changement vers yellow");
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }

  // 🔹 3. getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("4️⃣ getSnapshotBeforeUpdate → AVANT update DOM");
    console.log("ancienne couleur :", prevState.favoriteColor);
    return prevState.favoriteColor;
  }

  // 🔹 4. componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("6️⃣ componentDidUpdate → APRÈS update DOM");
    console.log("after update");
    console.log("snapshot (ancienne couleur) :", snapshot);
  }

  // 🔹 Action utilisateur pour changer couleur
  changeColor = () => {
    console.log("🖱️ click → changement vers blue");
    this.setState({ favoriteColor: "blue" });
  };

  // 🔹 Action utilisateur pour supprimer Child
  deleteChild = () => {
    console.log("🖱️ Delete button clicked");
    this.setState({ show: false });
  };

  render() {
    console.log("🖌️ render → affichage UI");

    return (
      <div>
        <h2>My favorite color is {this.state.favoriteColor}</h2>

        <button onClick={this.changeColor}>
          Change color to blue
        </button>

        {/* 🔹 affichage conditionnel du Child */}
        {this.state.show && <Child />}

        <button onClick={this.deleteChild}>
          Delete Child Component
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;