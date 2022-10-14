import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import duke from './DogFinder/duke.jpg';
import perry from './DogFinder/perry.jpg';
import tubby from './DogFinder/tubby.jpg';
import whiskey from './DogFinder/whiskey.jpg';
import DogRoutes from './DogFinder/Routes';
import NavBar from './DogFinder/NavBar';
import './App.css';
import ColorNavBar from './ColorFactory/ColorNavBar';
import ColorRoutes from './ColorFactory/ColorRoutes';

function App({dogs}) {
  return (
    <div className="App">
      <BrowserRouter>
          <ColorNavBar />
          <ColorRoutes />
          {/* <NavBar dogs={dogs} />
          <h1> Welcome to Dog Finder App!</h1>
          <h3> Click on any dog to see more information.</h3>
          <DogRoutes dogs={dogs} /> */}
      </BrowserRouter>
    </div>
  );
}
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}
export default App;
