import Header from "../components/Header";
import Card from "../components/Card";
import Contact from "../components/Contact";
import "./Home.css";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
 
const sections = [
  { icon: "fa-building", title: "About the Company", description: lorem, shaded: false },
  { icon: "fa-globe", title: "Our Values", description: lorem, shaded: true },
  { icon: "fa-university", title: "Our Mission", description: lorem, shaded: false },
];

function Home()
{
return (
    <div className="app">
      <Header />
      {sections.map((s, i) => (
        <Card key={i} icon={s.icon} title={s.title} description={s.description} shaded={s.shaded} />
      ))}
      <Contact />
    </div>
  );
}

export default Home;