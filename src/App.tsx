import React from "react";
import "./styles/main.scss";

function App() {
  return (
    <main className="price">
      <div className="price__container">
        <div className="white-article">
          <h1 className="h1 price__title">Join our community</h1>
          <article className="guarantee">
            <h2 className="h2 guarantee__title">
              30-day, hassle-free money back guarantee
            </h2>
            <p className="body guarantee__body">
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </article>
        </div>
        <article className="subscription">
          <div className="subscription__details">
            <h2 className="h2 subscription__title ">Monthly Subscription</h2>
            <p className="body subscription__cost">
              <span className="subscription__cost--price">$29</span>
              <span className="subscription__cost--length">per month</span>
            </p>
            <p className="body subscription__body">
              Full access for less than $1 a day
            </p>
            <button className="subscription__sign-up">Sign Up</button>
          </div>
        </article>
        <article className="us">
          <div className="us__container">
            <h2 className="h2 us__title">Why Us</h2>
            <ul className="body us__body">
              <li>Tutorials by industry experts</li>
              <li>Peer &amp; expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  );
}

export default App;
