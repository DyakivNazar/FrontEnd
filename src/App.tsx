import './App.css'
import {coursesAndDurationArray} from "./data/coursesAndDurationArray.ts";
import MycoursesAndDurationArray from "./components/my-coursesAndDurationArray/MycoursesAndDurationArray.tsx";

function App() {

  return (
    <>
      {
        coursesAndDurationArray.map((course,index) => <MycoursesAndDurationArray key={index} course={course}/>)
      }
    </>
  )
}

export default App
