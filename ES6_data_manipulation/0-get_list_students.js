/**
 * Returns an array of student objects with id, firstName, and lastName properties
 * @return {Array} Array of student objects
 */
export default function getListStudents() {
  const students = [
    { id: 1, firstName: 'Guillaume', lastName: 'Salva' },
    { id: 2, firstName: 'James', lastName: 'Doe' },
    { id: 5, firstName: 'Serena', lastName: 'Williamson' },
  ];

  return students;
}
