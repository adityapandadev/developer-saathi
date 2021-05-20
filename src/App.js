import "./styles.css";

import image from "./images/ct.gif";




export default function App() {
  return (
    <div className="App">
      
      <h1>
        Developer Saathi
        <span role="img" aria-label="man technologist">
          👨🏻‍💻
        </span>
      </h1>
      <h3>
        A true companion which will suggest some excellent course to you so that
        you become an enigmatic developer.
      </h3>
      <div className="head-img">
        {/*
        Alternative Way
        <img src={require("../src/ct.gif")} alt="Developer" />  
        */}

        <img src={image} alt="Developer" />
      </div>
      <h3>
        Click on the buttons below, to explore Courses of that domain.{" "}
        <span role="img" aria-label="backhand index pointing down">
          👇
        </span>



      </h3>
    </div>
  );
}
