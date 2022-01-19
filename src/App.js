import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from "./Item/Button/form_button"
import Card from "./Item/Card/form_card"
function App() {
  return (
    <>
      {/* <h1 className="tw-text-3xl tw-font-bold tw-underline">
        Hello world!
      </h1> */}
      <div className="tw-m-4">
        <Button/>
        <Card/>
      </div>
      
    </>
  );
}

export default App;
