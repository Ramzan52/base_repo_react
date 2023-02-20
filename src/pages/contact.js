import React from "react";
import Header from "../components/header";

export default function Contact() {
  return (
    <div>
    <Header />
      <h1>Contact Us</h1>
      <p>
        If you have any questions or comments, please fill out the form below
        and we'll get back to you as soon as possible.
      </p>
      <form action="submit-form.php" method="post">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label for="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
