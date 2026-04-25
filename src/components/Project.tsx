import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import '../assets/styles/Project.scss';

// Project thumbnail placeholders — replace with your own screenshots
const projects = [

  {
    title: "Machine Learning Specialization",
    description: "  Completed Coursera's Machine Learning Specialization by Andrew Ng, covering supervised learning, unsupervised learning, and deep learning fundamentals.",
    url: "https://github.com/khawajaacode/Machine-Learning-Specialization.git",
    img: mock01,
  },
  {
    title: "Little Lemon Restaurant",
    description: "Meta Front-End Developer capstone project. A full restaurant website with table reservations, built with React and following UX best practices.",
    url: "https://github.com/khawajaacode",
    img: mock02,
  },
  {
    title: "SpaceX Landing Predictor",
    description: "Predicting SpaceX Falcon 9 first stage landing success using machine learning, data analysis, and interactive visualizations.",
    url: "https://github.com/khawajaacode/Applied-Data-Science-Capstone.git",
    img: mock03,
  },
  {
    title: "Patient Record Application",
    description: "A local, offline patient record management system built with Python + Flask + SQLite.",
    url: "https://github.com/khawajaacode/Patient-Record-App.git",
    img: mock04,
  },
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project" key={index}>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <img src={project.img} className="zoom" alt={project.title} width="100%"/>
                  </a>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <h2>{project.title}</h2>
                  </a>
                  <p>{project.description}</p>
              </div>
            ))}
        </div>
    </div>
    );
}

export default Project;
