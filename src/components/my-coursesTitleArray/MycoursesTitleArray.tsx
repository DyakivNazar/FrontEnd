import './MycoursesTitleArray.css'
const MycoursesTitleArray = ({course}:{course:string}) => {
    return (
        <div>
            <h2>{course}</h2>
        </div>
    );
};

export default MycoursesTitleArray;