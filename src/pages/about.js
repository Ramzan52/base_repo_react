import React from "react";
import Header from "../components/header";

export default function About() {
  return (
    <div>
      <Header/>
      <div class="about-section">
        <h2>About Us</h2>
        <p>
          We are a team of passionate react professionals dedicated to
          build the best base repo for our own learning.Our mission
          is to make react development easy and convenient for every team member,
          regardless of what experience they have.
        </p>
      </div>

      <div class="team">
        <div class="team-member">
          <img
            src="https://via.placeholder.com/200x200.png?text=Team+Member+1"
            alt="Team Member 1"
          />
          <h3>Muhammmad Ali</h3>
          <p>Team Lead & Developer</p>
        </div>
        <div class="team-member">
          <img
            src="https://via.placeholder.com/200x200.png?text=Team+Member+2"
            alt="Team Member 2"
          />
          <h3>Waqas Khalid</h3>
          <p>Developer</p>
        </div>
        <div class="team-member">
          <img
            src="https://via.placeholder.com/200x200.png?text=Team+Member+2"
            alt="Team Member 2"
          />
          <h3>Asif</h3>
          <p>Developer</p>
        </div>
        <div class="team-member">
          <img
            src="https://via.placeholder.com/200x200.png?text=Team+Member+2"
            alt="Team Member 2"
          />
          <h3>Ramzan Arif</h3>
          <p>Developer</p>
        </div>
      </div>
    </div>
  );
}
