import React, { useState } from "react";
import "./styles.css";

import image from "./images/ct.gif";

var database = {
  all: [
    {
      courseName: "The Web Developer Bootcamp 2021",

      courseDesc:
        "This course was just completely overhauled to prepare students for the 2021 job market, with over 60 hours of brand new content. This is the only course you need to learn web development.",

      courseLink: "https://www.udemy.com/course/the-web-developer-bootcamp/"
    },
    {
      courseName: "HTML and CSS for Beginners-Traversy media",

      courseDesc:
        "Learn HTML and CSS and many othe web technologies in a curated playlist with in depth explaination and demos.",

      courseLink:
        "https://youtube.com/playlist?list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU"
    },
    {
      courseName: "Responsive Web Design - FreeCodeCamp",

      courseDesc:
        "In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.",

      courseLink: "https://www.freecodecamp.org/learn/responsive-web-design"
    },
    {
      courseName: "The Complete JavaScript Course 2021: From Zero to Expert!",

      courseDesc:
        "This is the most complete JavaScript course on Udemy. It's an all-in-one package that will take you from the very fundamentals of JavaScript, all the way to building modern and complex applications.",

      courseLink: "https://www.udemy.com/course/the-complete-javascript-course/"
    },
    {
      courseName: "Learn Python Programming Masterclass",

      courseDesc:
        "This course is aimed at complete beginners who have never programmed before, as well as existing programmers who want to increase their career options by learning Python.",

      courseLink:
        "https://www.udemy.com/course/python-the-complete-python-developer-course/"
    },
    {
      courseName: "Beginning C++ Programming - From Beginner to Beyond",

      courseDesc:
        "Obtain Modern C++ Object-Oriented Programming (OOP) and STL skills needed for game, system, and application development.",

      courseLink:
        "https://www.udemy.com/course/beginning-c-plus-plus-programming/"
    },
    {
      courseName:
        "React - The Complete Guide (incl Hooks, React Router, Redux)",

      courseDesc:
        "This course will teach you React.js in a practice-oriented way, using all the latest patterns and best practices you need. You will learn all the key fundamentals as well as advanced concepts and related topics to turn you into a React.js developer.",

      courseLink:
        "https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
    },
    {
      courseName: "Angular - The Complete Guide (2021 Edition)",

      courseDesc:
        "Master Angular 12 (formerly 'Angular 2') and build awesome, reactive web apps with the successor of Angular.js ",

      courseLink:
        "https://www.udemy.com/course/the-complete-guide-to-angular-2/"
    },
    {
      courseName: "Python and Django Full Stack Web Developer Bootcamp",

      courseDesc:
        "Learn to build websites with HTML , CSS , Bootstrap , Javascript , jQuery , Python 3 , and Django!",

      courseLink:
        "https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/"
    },
    {
      courseName: "GitHub Ultimate: Master Git and GitHub - Beginner to Expert",

      courseDesc:
        "This course will comprehensively cover the GitHub hosting service as a companion to the Git source control tool, which means no prior knowledge or experience is required. Students will emerge at the end with a very solid understanding and hands-on experience with Git and GitHub.",

      courseLink: "https://www.udemy.com/course/github-ultimate/"
    },
    {
      courseName: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",

      courseDesc:
        "The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more.",

      courseLink: "https://www.udemy.com/course/advanced-css-and-sass/"
    }
  ],
  web_development: [
    {
      courseName: "The Web Developer Bootcamp 2021",

      courseDesc:
        "This course was just completely overhauled to prepare students for the 2021 job market, with over 60 hours of brand new content. This is the only course you need to learn web development.",

      courseLink: "https://www.udemy.com/course/the-web-developer-bootcamp/"
    },
    {
      courseName: "HTML and CSS for Beginners-Traversy media",

      courseDesc:
        "Learn HTML and CSS and many othe web technologies in a curated playlist with in depth explaination and demos.",

      courseLink:
        "https://youtube.com/playlist?list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU"
    },
    {
      courseName: "Responsive Web Design - FreeCodeCamp",

      courseDesc:
        "In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.",

      courseLink: "https://www.freecodecamp.org/learn/responsive-web-design"
    }
  ],
  programming: [
    {
      courseName: "The Complete JavaScript Course 2021: From Zero to Expert!",

      courseDesc:
        "This is the most complete JavaScript course on Udemy. It's an all-in-one package that will take you from the very fundamentals of JavaScript, all the way to building modern and complex applications.",

      courseLink: "https://www.udemy.com/course/the-complete-javascript-course/"
    },
    {
      courseName: "Learn Python Programming Masterclass",

      courseDesc:
        "This course is aimed at complete beginners who have never programmed before, as well as existing programmers who want to increase their career options by learning Python.",

      courseLink:
        "https://www.udemy.com/course/python-the-complete-python-developer-course/"
    },
    {
      courseName: "Beginning C++ Programming - From Beginner to Beyond",

      courseDesc:
        "Obtain Modern C++ Object-Oriented Programming (OOP) and STL skills needed for game, system, and application development.",

      courseLink:
        "https://www.udemy.com/course/beginning-c-plus-plus-programming/"
    }
  ],
  frameworks: [
    {
      courseName:
        "React - The Complete Guide (incl Hooks, React Router, Redux)",

      courseDesc:
        "This course will teach you React.js in a practice-oriented way, using all the latest patterns and best practices you need. You will learn all the key fundamentals as well as advanced concepts and related topics to turn you into a React.js developer.",

      courseLink:
        "https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
    },
    {
      courseName: "Angular - The Complete Guide (2021 Edition)",

      courseDesc:
        "Master Angular 12 (formerly 'Angular 2') and build awesome, reactive web apps with the successor of Angular.js ",

      courseLink:
        "https://www.udemy.com/course/the-complete-guide-to-angular-2/"
    },
    {
      courseName: "Python and Django Full Stack Web Developer Bootcamp",

      courseDesc:
        "Learn to build websites with HTML , CSS , Bootstrap , Javascript , jQuery , Python 3 , and Django!",

      courseLink:
        "https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/"
    }
  ],
  miscellenous: [
    {
      courseName: "GitHub Ultimate: Master Git and GitHub - Beginner to Expert",

      courseDesc:
        "This course will comprehensively cover the GitHub hosting service as a companion to the Git source control tool, which means no prior knowledge or experience is required. Students will emerge at the end with a very solid understanding and hands-on experience with Git and GitHub.",

      courseLink: "https://www.udemy.com/course/github-ultimate/"
    },
    {
      courseName: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",

      courseDesc:
        "The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more.",

      courseLink: "https://www.udemy.com/course/advanced-css-and-sass/"
    }
  ]
};

var courseList = Object.keys(database);

export default function App() {
  const [course, setCourse] = useState("all");

  function courseClickHandler(course) {
    setCourse(course);
  }

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
      <div className="btn-area">
        {courseList.map((course) => (
          <button className="btn" onClick={() => courseClickHandler(course)}>
            {course}
          </button>
        ))}
      </div>
      {database[course].map((contents) => {
        return (
          <div className="list">
            <h3>{contents.courseName}</h3>
            <p>
              <q>{contents.courseDesc}</q>
            </p>
            <a href={contents.courseLink} rel="noreferrer" target="_blank">
              Course link
            </a>
          </div>
        );
      })}

      <footer className="footer">
        <h4>"Learn Continually-There is always 'one more thing' to learn!"</h4>
        <h5>-Steve Jobs</h5>
      </footer>
    </div>
  );
}
