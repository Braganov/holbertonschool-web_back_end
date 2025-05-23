const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.trim().split('\n');
        const headers = lines[0].split(',');
        const fieldIndex = headers.indexOf('field');
        const firstNameIndex = headers.indexOf('firstname');
        
        const students = lines.slice(1).filter(line => line.length > 0);
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
        
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;