import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import SelecetionCards from './codepen_projects/react-modal-proj/SelectionCards';
import DisneyKartLogo from "./codepen_projects/react-modal-proj/images/Disney Kart.png";
function App() {
  return <div className="App">
<img id="logo"src={DisneyKartLogo} />
<SelecetionCards />
  </div>;
}

export default App;
