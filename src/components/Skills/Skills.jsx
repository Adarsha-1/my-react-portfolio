import Card from "../Card/Card";
import data from "./data";
import "./skills.css";


const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="container skills__container">
        {data.map((item) => (
          <Card className="skills">
            <h6>{item.name}</h6>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
