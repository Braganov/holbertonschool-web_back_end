const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim().split('\n');
    const headers = data[0].split(',');
    const fieldIndex = headers.indexOf('field');
    const firstNameIndex = headers.indexOf('firstname');
    
    const students = data.slice(1).filter(line => line.length > 0);
    console.log(`Number of students: ${students.length}`);
    
    const fields = {};
    students.forEach((student) => {
      const row = student.split(',');
      const field = row[fieldIndex];
      const firstName = row[firstNameIndex];
      
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });
    
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;