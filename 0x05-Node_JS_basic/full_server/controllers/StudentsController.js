import readDatabase from '../utils.js'

class StudentsController {
  static getAllStudents(request, response) {
    let str = ''
    readDatabase('./database.csv').then((data) => {
      for (const [field, students] of Object.entries(data)) {
        str += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
      }
      response.status(200).send(`This is the list of our students${str}`);
    }).catch(() => { response.status(500).send(new Error('Cannot load the database')); });
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;
    if (!['CS', 'SWE'].includes(field)) {
      response.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase('./database.csv').then((data) => {
      const fieldStudents = data[field];
      response.status(200).send(`List: ${fieldStudents.join(', ')}`);
    }).catch((err) => { response.status(500).send(new Error('Cannot load the database')); });
  }
}

export default StudentsController
