/**
 * Returns an array of student ids from a list of student objects
 * @param {Array} studentList - List of student objects
 * @return {Array} Array of student ids
 */
export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  
  return studentList.map((student) => student.id);
}