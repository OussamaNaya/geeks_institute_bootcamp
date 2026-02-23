// ====== Daily Challenge 1 : Gifs
// let myCategories = document.getElementById("myCategories");
// let myButton = document.getElementById("myButton");
// let gifsSection = document.getElementById("gifs");
// let deleteAll = document.getElementById("deleteAll");

// async function fetchOne(categorie)
// {
//     try {
//         const API_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
//         const API_Griphy = "https://api.giphy.com/v1/gifs/search";
//         let response = await fetch(`${API_Griphy}?q=${categorie}&limit=1&offset=1&api_key=${API_key}`);
        
//         if(response.ok)
//         {
//             let objJson = await response.json();
//             return objJson.data[0];
//         }
//         else
//         {
//             throw new Error('Erreurrr !');
//         }
//     } catch (error) {
//         console.log(`consol: ${error}`);
//     }
// }

// function addGif(gif) {
//     try {
//         // Container pour le gif + bouton
//         let div = document.createElement("div");
//         div.classList.add("gif");

//         // L'image
//         let img = document.createElement("img");
//         img.id = gif.id;
//         img.src = gif.images.fixed_height.url;

//         // Le bouton DELETE
//         let btnDelete = document.createElement("button");
//         btnDelete.textContent = "DELETE";
//         btnDelete.addEventListener("click", () => {
//             div.remove(); // supprime tout le container (gif + bouton)
//         });

//         div.appendChild(img);
//         div.appendChild(btnDelete);
//         gifsSection.appendChild(div);

//     } catch (error) {
//         console.log(`error: ${error}`);
//     }
// }

// myButton.addEventListener("click", async (e) => {
//     try {
//         e.preventDefault()

//         let categorie = myCategories.value;
//         console.log("categorie: ", categorie);
//         myCategories.value = "";

//         let gif = await fetchOne(categorie);
//         console.log(gif);

//         addGif(gif);  
//     } catch (error) {
//         console.log(`catch: ${error}`);
//     }

// });

// deleteAll.addEventListener("click", () => {
//     try {
//         gifsSection.innerHTML = "";
//     } catch (error) {
//         console.log(`error: ${error}`);
//     }

// });


// ====== Daily Challenge 2 : Promise.all()
const API = "https://api.sunrise-sunset.org/json";
const form = document.getElementById("form");
const result = document.getElementById("result");

const fetchSunrise = async (lat, lng) => {
    const resp = await fetch(`${API}?lat=${lat}&lng=${lng}`);
    if (!resp.ok) {
        throw new Error("Error fetching data");
    }
    const data = await resp.json();
    return data.results.sunrise;
};

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const lat1 = document.getElementById("lat1").value;
    const lng1 = document.getElementById("lng1").value;
    const lat2 = document.getElementById("lat2").value;
    const lng2 = document.getElementById("lng2").value;

    try {
        const [sunrise1, sunrise2] = await Promise.all([
            fetchSunrise(lat1, lng1),
            fetchSunrise(lat2, lng2)
        ]);

        result.innerHTML = `
            <h3>🌅 City 1 Sunrise : ${sunrise1}</h3>
            <h3>🌅 City 2 Sunrise : ${sunrise2}</h3>
        `;

    } catch (error) {
        console.log("Oooops !", error);
        result.innerHTML = "<p>Something went wrong !</p>";
    }
});
