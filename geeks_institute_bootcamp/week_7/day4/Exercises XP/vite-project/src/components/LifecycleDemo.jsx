import React from "react";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);

    // 🟢 ÉTAPE 0 (Mounting)
    // Le constructor est appelé une seule fois au début
    // 👉 On initialise le state ici
    this.state = {
      favoriteColor: "red"
    };

    console.log("1️⃣ constructor → initialisation du state");
  }

  // 🔹 1. getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    // 🟡 ÉTAPE 1 (Mounting + Updating)
    // appelée AVANT chaque render (même au début)
    // ⚠️ static → pas de "this"
    // 👉 utilisée pour synchroniser props → state

    console.log("2️⃣ getDerivedStateFromProps → sync props/state");

    return null; // ici on ne change rien
  }

  // 🔹 2. shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    // 🟡 ÉTAPE 2 (Updating seulement)
    // 👉 décide si React doit continuer ou NON

    console.log("3️⃣ shouldComponentUpdate → décision de re-render");

    // ✔️ true → React continue
    // ❌ false → React bloque tout (pas de render, pas d’update)
    return true;
  }

  // 🔹 Mounting
  componentDidMount() {
    // 🟢 ÉTAPE après le premier render
    // appelée UNE SEULE FOIS

    console.log("5️⃣ componentDidMount → composant monté");

    // 👉 on simule un changement automatique après 2s
    setTimeout(() => {
      console.log("⏳ Timer → changement vers yellow");
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }

  // 🔹 3. getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 🟡 ÉTAPE 4 (juste AVANT mise à jour du DOM)
    // 👉 permet de capturer l'ancien état

    console.log("4️⃣ getSnapshotBeforeUpdate → AVANT update DOM");
    console.log("ancienne couleur :", prevState.favoriteColor);

    // 👉 ce qu'on retourne ici sera reçu dans componentDidUpdate
    return prevState.favoriteColor;
  }

  // 🔹 4. componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    // 🟡 ÉTAPE 5 (après update DOM)
    // 👉 exécutée après que l'écran soit mis à jour

    console.log("6️⃣ componentDidUpdate → APRÈS update DOM");
    console.log("after update");

    // 👉 snapshot = valeur retournée par getSnapshotBeforeUpdate
    console.log("snapshot (ancienne couleur) :", snapshot);
  }

  // 🔹 Action utilisateur
  changeColor = () => {
    console.log("🖱️ click → changement vers blue");

    // 👉 déclenche tout le cycle UPDATE
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    // 🟢/🟡 ÉTAPE 3 (Mounting + Updating)
    // 👉 React construit le DOM ici

    console.log("🖌️ render → affichage UI");

    return (
      <div>
        <h2>My favorite color is {this.state.favoriteColor}</h2>

        <button onClick={this.changeColor}>
          Change color to blue
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;