export function calculateClassAverage(students, courseId) {
  const studentsInCourse = students.filter(student =>
    student.courses.some(c => c.courseId === courseId)
  );

  if (studentsInCourse.length === 0) return 0;

  const totalGrades = studentsInCourse.reduce((sum, student) => {
    const course = student.courses.find(c => c.courseId === courseId);
    return sum + course.grade;
  }, 0);

  return totalGrades / studentsInCourse.length;
}

export function findTopStudent(students) {
  if (students.length === 0) return null;
  
  return students.reduce((top, current) => {
    return (current.getAverage() > top.getAverage()) ? current : top;
  });
}

// Higher-order function
export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}