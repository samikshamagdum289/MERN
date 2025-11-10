import React from "react";
import "./Resume.css"; // custom styles

const Resume = () => {
  return (
    <div className="resume">
      <header>
        <h1>Samiksha Magdum</h1>
        <p>
          <a href="mailto:samikshamagdum289@gmail.com">samikshamagdum289@gmail.com</a> | 
          +91-9579155563 | 
          <a href="http://www.linkedin.com/in/samikshamagdum" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </header>

      <section>
        <h2>Career Objective</h2>
        <p>
          Final-year B.Tech Computer Science student with a strong foundation in programming, web development, and machine learning.
          Proficient in designing and deploying impactful tech solutions with strong problem-solving and communication skills.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li><b>Languages:</b> C, Python, Java</li>
          <li><b>Web Development:</b> HTML, CSS, JavaScript, React, Flutter, MySQL, Flask, Spring Boot</li>
          <li><b>Tools:</b> VS Code, Android Studio, IntelliJ IDEA, GitHub</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <b>Hostel Link Platform:</b> Responsive web app for PG accommodations with 3D models (HTML, CSS, JS, Spring Boot, MySQL).
          </li>
          <li>
            <b>E-commerce App:</b> Cross-platform clothing shopping app (Flutter, Dart, JavaScript, MySQL).
          </li>
          <li>
            <b>Quiz Game:</b> Java-based quiz system with MySQL backend and real-time feedback.
          </li>
          <li>
            <b>Tourism Website:</b> Interactive tourism showcase (HTML, CSS, JavaScript).
          </li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li><b>B.Tech CSE</b>, D.Y. Patil College of Engineering, Kolhapur (2022–2026), CGPA: 8.4/10</li>
          <li><b>HSC</b>, New College, Kolhapur (2020–2022), 67.33%</li>
          <li><b>SSC</b>, Maharashtra High School, Kolhapur (2019–2020), 90.60%</li>
        </ul>
      </section>

      <section>
        <h2>Certifications</h2>
        <ol>
          <li>Data Structures in Java</li>
          <li>HTML & CSS Workshop</li>
          <li>Programming Foundations</li>
          <li>Technology Job Simulation</li>
          <li>Oracle Cloud Infrastructure Generative AI (2025)</li>
        </ol>
      </section>

      <section>
        <h2>Activities</h2>
        <ul>
          <li>National Hackathon – Built predictive maintenance ML model (2024)</li>
          <li>Media Coordinator – Training & Placement Cell, DYPCOE (2023–24)</li>
        </ul>
      </section>

      <section>
        <h2>Hobbies</h2>
        <p>Photography | Travelling</p>
      </section>
    </div>
  );
};

export default Resume;
