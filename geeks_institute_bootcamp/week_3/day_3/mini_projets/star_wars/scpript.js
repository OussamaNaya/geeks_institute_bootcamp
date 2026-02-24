let name = document.getElementById("name");
let height = document.getElementById("height");
let gender = document.getElementById("gender");
let birth_year = document.getElementById("birth-year");
let home_world = document.getElementById("home-world");
let button = document.getElementById("button");

const api_url = "https://www.swapi.tech/api/people";
let conter = 1;

async function fetchOne()
{
    try {
        let resp = await fetch(`${api_url}/${conter}`);
        if(resp.ok)
        {
            let data = await resp.json();
            return data.result.properties;
        }
        else
        {
            throw new Error("Oooops !");
        }
    } catch (error) {
        console.log(`catch: ${error}`);
    }
}

function diplayData(star)
{
    try {
        name.textContent = star.name;
        height.textContent = "Height: " + star.height;
        gender.textContent = "Gender: " + star.gender;
        birth_year.textContent = "Birth Year: " + star.birth_year;
        home_world.textContent = "Home World: " + star.home_world;        
    } catch (error) {
        console.log(`catch: ${error}`);
    }
}

button.addEventListener("click", async () => {
    try {
        let star = await fetchOne();

        console.log(star);
        diplayData(star);
        conter ++;
    } catch (error) {
       console.log(`catch: ${error}`); 
    }
});