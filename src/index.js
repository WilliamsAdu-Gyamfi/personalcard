import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = function () {
  return (
    <img className="avatar" src="cardprofile.jpg" alt="Willliams Gyamfi" />
  );
};

const Intro = function () {
  return (
    <div>
      <h1>Williams Adu-Gyamfi</h1>
      <p>
        Junior Software Engineer. I excel in JavaScript, HTML, CSS and React! I
        like video games just to relax my brain after a long hour of code.
      </p>
    </div>
  );
};

const SkillList = function () {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="🤌" color="green" />
      <Skill skill="HTML+CSS" emoji="🤌" color="yellow" />
      <Skill skill="JavaScript" emoji="🤌" color="orange" />
      <Skill />
    </div>
  );
};

const Skill = function (props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
