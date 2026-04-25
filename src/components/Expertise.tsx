import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Python",
    "Flask",
    "Django",
    "FastAPI",
    "REST APIs",
    "PostgreSQL",
    "Git",
];

const labelsSecond = [
    "LangChain",
    "ChromaDB",
    "OpenAI API",
    "scikit-learn",
    "RAG",
    "FastAPI",
    "Python",
    "Pandas",
    "NumPy",
];

const labelsThird = [
    "Microsoft Azure",
    "AZ-900",
    "Azure AI Fundamentals",
    "GitHub Actions",
    "Linux",
    "Bash",
    "Docker",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I build full-stack web applications using React, Flask, Django, and FastAPI. Strong proficiency in the SDLC process, REST API design, and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>GenAI & LLM Engineering</h3>
                    <p>I build GenAI-powered applications using LangChain and RAG pipelines. My standout project is a GenAI RAG app using LangChain, ChromaDB, and FastAPI — a rare differentiator in the market.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Cloud & DevOps</h3>
                    <p>Certified in Microsoft Azure (AZ-900) and Azure AI Fundamentals. I have hands-on experience with cloud deployments, Linux environments, and CI/CD workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
