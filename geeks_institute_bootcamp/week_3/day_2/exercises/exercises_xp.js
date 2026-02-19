// ===== Exercise 1 : Giphy API
// const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// fetch(url)
//    .then((result) => {
//       if(result.ok) {
//          return result.json()
//       } else {
//          throw new Error("Wrong artwork");
//       }
//    })
//    .then((obj) => {
//       // const gifs = obj.data; // the array of 25 items
      
//       // gifs.forEach((gif) => {
//       //    console.log({
//       //       type: gif.type,
//       //       id:   gif.id,
//       //       url:  gif.url,
//       //       slug: gif.slug
//       //    });
//       // });
//       console.log(obj);
//    })
//    .catch((error) => console.log(`catch: ${error}`));



   // ===== Exercise 2 : Giphy API
// const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"; // Remplace par ta clé API

// const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=sun&limit=10&offset=2`;

// fetch(url)
//    .then((response) => {
//       if (response.ok) {
//          return response.json();
//       } else {
//          throw new Error(`HTTP Error: ${response.status}`);
//       }
//    })
//    .then((obj) => {
//       console.log(obj);
//    })
//    .catch((error) => {
//       console.log(`catch: ${error}`);
//    });


   // ===== Exercise 3 : Async function
// async function fetchSwapi()
// {
//    try {
//       console.log("fetchSwapi Starting ...")

//       const swapi = await fetch("https://www.swapi.tech/api/starships/9/");
//       if(swapi.ok)
//       {
//          let ObjJson = await swapi.json();
//          console.log(ObjJson.result);
//       }
//       else{
//          throw new Error(`HTTP Error: ${swapi.status}`);
//       }
//    } catch (error) {
//          console.log("catch: ", error);
//    }
// }

// fetchSwapi();


// ===== Exercise 4 : Analyze
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
// Output => "resolved"