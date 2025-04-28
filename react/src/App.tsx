import './App.css'
import {coursesTitleArray} from "./data/coursesTitleArray.ts";
import MycoursesTitleArray from "./components/my-coursesTitleArray/MycoursesTitleArray.tsx";

function App() {

  return (
    <>
        {
            coursesTitleArray.map((course, index) => <MycoursesTitleArray key={index} course={course}/>)
        }
    </>
  )
}

export default App
