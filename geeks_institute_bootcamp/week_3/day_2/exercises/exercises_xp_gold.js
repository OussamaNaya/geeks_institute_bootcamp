// ===== Exercise 1 : Giphy API #2
const API_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const API_Griphy = "https://api.giphy.com/v1/gifs/search";

let gifsSection = document.getElementById("gifs");
let gifImg = document.getElementById("gifImg");

fetch(`${API_Griphy}?q=sun&limit=1&offset=1&api_key=${API_key}`)
    .then((response) => {
        if(response.ok)
        {
            return response.json();
        }
        else
        {
            throw new Error("Wrong artwork");
        }
    })
    .then((obj) => {
        console.log(obj);

        let objGif = document.createElement("div");

        objGif.textContent  = obj;
        const firstGif = obj.data[0];
        console.log(`firstGif: `);
        console.log(firstGif);

        gifImg.id = firstGif.id;
        gifImg.src = firstGif.images.fixed_height.url;

        gifsSection.appendChild(objGif);
    })
    .catch((err) => {
        console.log(`catch: ${err}`);
    })


// ===== Exercise 2

// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...