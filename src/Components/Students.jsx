
function Student({ name, age, course, city }) {
  return (
    <div className="student-card">
      <div className="student-header">
        <h2>{name}</h2>
      </div>

      <div className="student-body">
        <p>
          <strong>Course:</strong> {course}
        </p>

        <p>
          <strong>Age:</strong> {age}
        </p>

        <p>
          <strong>City:</strong> {city}
        </p>
      </div>
    </div>
  );
}

export default Student;
