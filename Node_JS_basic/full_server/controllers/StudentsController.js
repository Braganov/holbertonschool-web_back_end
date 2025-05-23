const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((fields) => {
        let responseText = 'This is the list of our students\n';
        const sortedFields = Object.keys(fields).sort((a, b) => 
          a.localeCompare(b, 'en', { sensitivity: 'base' }));
        
        sortedFields.forEach((field) => {
          responseText += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });
        
        response.status(200).send(responseText);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((fields) => {
        if (fields[major]) {
          response.status(200).send(`List: ${fields[major].join(', ')}`);
        } else {
          response.status(200).send(`List: `);
        }
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;