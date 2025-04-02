/**
 * Returns an array of students for a specific city with their new grades
 * @param {Array} studentList - List of student objects
 * @param {String} city - City to filter by
 * @param {Array} newGrades - Array of grade objects with studentId and grade
 * @return {Array} Array of student objects with updated grades
 */
export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
