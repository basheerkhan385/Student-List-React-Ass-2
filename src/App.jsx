
import Student from './Components/Students';
import './App.css';

const students = [
  {
    id: 1,
    name: "Ali Khan",
    age: 18,
    course: "Web Development",
    city: "Karachi"
  },
  {
    id: 2,
    name: "Sara Ahmed",
    age: 20,
    course: "Graphic Design",
    city: "Lahore"
  },
  {
    id: 3,
    name: "Ahmed Raza",
    age: 19,
    course: "React JS",
    city: "Islamabad"
  },
  {
    id: 4,
    name: "Ayesha Malik",
    age: 21,
    course: "Web Development",
    city: "Karachi"
  }
];

function App() {
  return (
    <div className="container">

      <h1 className="title">Student Directory</h1>

      <div className="student-container">
        {students.map((student) => (
          <Student
            key={student.id}
            name={student.name}
            age={student.age}
            course={student.course}
            city={student.city}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
