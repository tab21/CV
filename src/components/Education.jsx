import React from "react";

// css imports
import "./css/main.css";

export default function Education() {
  return (
    <main>
      <h2>Education</h2>

      <ul className="content">
        <li className="item">
          <h3>Bachelor of Technology</h3>
          <h4>Electrical Engineering</h4>
          <h5>2020 - 2024</h5>
          <p>
            I am pursuing my Bachelor of Technology in Electrical Engineering
            from the Jamia Millia Islamia.
          </p>
        </li>

        <li className="item">
          <h3>Senior Secondary School (12th)</h3>
          <h4>Science </h4>
          <h5>2019</h5>
          <p>
            I completed my 12th in Science from Tagore International School,
            East of Kailash.
          </p>
        </li>

        <li className="item">
          <h3>Secondary School (10th)</h3>
          <h5>2017</h5>
          <p>
            I completed my 10th in Science from Tagore International School,
            East of Kailash.
          </p>
        </li>
      </ul>
    </main>
  );
}
