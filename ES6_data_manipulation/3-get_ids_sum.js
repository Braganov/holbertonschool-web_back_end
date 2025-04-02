/**
 * Returns the sum of all student ids
 * @param {Array} studentList - List of student objects
 * @return {Number} Sum of all student ids
 */
export default function getStudentIdsSum(studentList) {
  return studentList.reduce((sum, student) => sum + student.id, 0);
}
