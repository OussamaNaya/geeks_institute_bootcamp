const planets = [
  { name: "Mercury", moons: 0 },
  { name: "Venus", moons: 0 },
  { name: "Earth", moons: 1 },
  { name: "Mars", moons: 2 },
  { name: "Jupiter", moons: 79 },
  { name: "Saturn", moons: 82 },
  { name: "Uranus", moons: 27 },
  { name: "Neptune", moons: 14 }
];

const section = document.getElementsByClassName("listPlanets")[0];

for (let planet of planets) {
  let div = document.createElement("div");
  div.classList.add("planet", planet.name.toLowerCase());
  div.textContent = planet.name;

  for (let i = 0; i < planet.moons; i++) {
    let moon = document.createElement("div");
    moon.classList.add("moon");
    div.appendChild(moon);
  }

  section.appendChild(div);
}