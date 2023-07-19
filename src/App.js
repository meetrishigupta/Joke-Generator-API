import React from "react";
import "./styles.css";
import { useFetch } from "./useFetch";

export default function App() {
  const url = "https://api.chucknorris.io/jokes/random?category=dev";
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <div className="App">Loading...</div>;
  }

  if (error) {
    return (
      <div className="App">
        <h1>Joke Generator</h1>
        <p>Something went wrong: {error.message}</p>
          <button className="btn" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <h2>{data.value}</h2>
      <button className="btn" onClick={() => window.location.reload()}>
        New Joke
      </button>
    </div>
  );
}
