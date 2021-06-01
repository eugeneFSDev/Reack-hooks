import React from 'react';
import Usestate from "./components/Usestate";
import UseEffect from "./components/UseEffect";
import Usememo from "./components/Usememo";
import Useref from "./components/Useref";
import Usecontext from "./components/usecontext/Usecontext";
import Usereducer from "./components/usereducer/Usereducer";
import Usecallback from "./components/usecallback/Usecallback";
import Customhook from './components/customhook/Customhook';


const styles = "col-3 d-flex flex-column align-items-center my-5";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">

        <div className={styles}>
          <h1>Usestate Hook</h1>
          <Usestate />
        </div>

        <div className={styles}>
          <h1>UseEffect Hook</h1>
          <UseEffect />
        </div>

        <div className={styles}>
          <h1>Usememo Hook</h1>
          <Usememo />
        </div>

        <div className={styles}>
          <h1>Useref Hook</h1>
          <Useref />
        </div>

        <div className={styles}>
          <h1>Usecontext Hook</h1>
          <Usecontext />
        </div>
        
        <div className={styles}>
          <h1>Usereducer Hook</h1>
          <Usereducer />
        </div>
        
        <div className={styles}>
          <h1>Usecallback Hook</h1>
          <Usecallback />
        </div>
           
        <div className={styles}>
          <h1>Custom Hooks</h1>
          <Customhook />
        </div>

      </div>
    </div>
  ) 
}

export default App;
