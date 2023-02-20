import React from "react";
import { Link, useHistory } from 'react-router-dom';

import "../styles/header.css";

export default function Header() {
  return (
    <div>
      <div class="header">
        <h1>React Base Repository</h1>
        <p>Base Repository for React Learning</p>
      </div>

      <div class="navbar">
        <a class="active" href="#">
        <Link to="/">Home</Link>
          
        </a>
        <a href="#"><Link to="/about">About</Link></a>
        <a href="#"><Link to="/contact">Contact</Link></a>
      </div>
    </div>
  );
}
