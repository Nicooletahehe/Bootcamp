import React from "react";
import style from "./appStyle";
import "./styles.css";
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Modal from './components/Modal/Modal';

// const GOOGLE_KEY = process.env.staging;

// Component
// resuable
const App = ({ firstName, lastName }) => {
  return (
    <>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <Modal description="App Component"/>
      <Button type="button" onClick={() => {alert("Click me")}}>
        Click me
      </Button>
      <Button type="button" onClick={() => {alert("Press me")}}>Press me</Button>
      <Button type="submit" onClick={() => {alert("Hover me")}}>Hover me</Button>
      <Input type="text" value="Nicoleta"/>
      <Input type="password" value="Ungureanu"/>
    </>
  );
};

export default App;
