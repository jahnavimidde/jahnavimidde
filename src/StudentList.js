import React, { useState } from 'react';

function StudentList() {
  // 1️⃣ Local array of student objects
  const students = [
    { name: "Ravi", marks: 85 },
    { name: "Sneha", marks: 92 },
    { name: "Arjun", marks: 78 },
    { name: "Kiran", marks: 88 },
    { name: "Meena", marks: 90 },
    { name: "Vijay", marks: 75 },
    { name: "Priya", marks: 82 }
  ];

  // 2️⃣ State to track current page
  const [currentPage, setCurrentPage] = useState(1);

  // 3️⃣ Number of students per page
  const studentsPerPage = 3;

  // 4️⃣ Calculate start and end index of students for the current page
  const startIndex = (currentPage - 1) * studentsPerPage;
  const endIndex = startIndex + studentsPerPage;

  // 5️⃣ Slice the array to get only students for the current page
  const currentStudents = students.slice(startIndex, endIndex);

  // 6️⃣ Total number of pages
  const totalPages = Math.ceil(students.length / studentsPerPage);

  // 7️⃣ Function to handle 'Next' click
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // 8️⃣ Function to handle 'Previous' click
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>Student List (Page {currentPage} of {totalPages})</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {currentStudents.map((student, index) => (
          <li key={index}>
            <strong>{student.name}</strong> — Marks: {student.marks}
          </li>
        ))}
      </ul>

      {/* Pagination buttons */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentPage === totalPages} style={{ marginLeft: '10px' }}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StudentList;
