import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-particles-js"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Sobre from "./components/Sobre"

function App() {
  return (
    <>
      <Particles 
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color:"#f9ab00"
              }
            }
          }
        }}
        />
      <Navbar />
      <Header />
      <Sobre />
   </>
  )
}

export default App;
