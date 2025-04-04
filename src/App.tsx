import './App.css'
import {simpsons} from "./data/simpsons.ts";
import Mysimpsons from "./components/my-simpsons/Mysimpsons.tsx";

function App() {

  return (
    <>
      {
        simpsons.map((simpson, index) => <Mysimpsons simpson={simpson} key={index} /> )
      }
    </>
  )
}

export default App
