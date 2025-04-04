import './App.css'
import {coursesArray} from "./data/coursesArray.ts";
import MycoursesArray from "./components/my-coursesArray/MycoursesArray.tsx";

function App() {

  return (
    <>
      {
        coursesArray.map((course, index) => <MycoursesArray key={index} course={course}/>)
      }
    </>
  )
}

export default App
