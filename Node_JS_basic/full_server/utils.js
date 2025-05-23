const fs = require('fs').promises;

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((data) => {
        const lines = data.trim().split('\n');
        const headers = lines[0].split(',');
        const fieldIndex = headers.indexOf('field');
        const firstNameIndex = headers.indexOf('firstname');
        
        const students = lines.slice(1).filter(line => line.length > 0);
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
        
        resolve(fields);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
};

module.exports = readDatabase;