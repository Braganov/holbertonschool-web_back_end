/**
 * Returns an array of student objects located in a specific city
 * @param {Array} studentList - List of student objects
 * @param {String} city - City to filter by
 * @return {Array} Array of student objects in the specified city
 */
export default function getStudentsByLocation(studentList, city) {
  return studentList.filter((student) => student.location === city);
}
