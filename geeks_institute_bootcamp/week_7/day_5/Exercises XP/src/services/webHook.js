async function getData() {
  try {
        const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://webhook.site/196d5e55-ea49-44ec-8247-5e50a91519d1",
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            key1: "myusername",
            email: "mymail@gmail.com",
            name: "Isaac",
            lastname: "Doe",
            age: 27,
            }),
        }
        );

    // 🔹 Vérifie si le serveur renvoie JSON ou juste un texte
    let data;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      data = await response.text(); // ça récupère le texte brut
    }

    return data;
  } catch (error) {
    console.error("Erreur lors de l'envoi :", error);
    return null;
  }
}

export default getData;