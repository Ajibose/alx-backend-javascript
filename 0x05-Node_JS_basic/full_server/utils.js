import { readFile } from 'fs';

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const studentsField = {};
      const studentData = data.trimEnd().split('\n').slice(1);
      for (const student of studentData) {
        const [firstName, , , field] = student.split(',');
        if (field in studentsField) {
          studentsField[field].push(firstName);
        } else {
          studentsField[field] = [firstName];
        }
      }
      resolve(studentsField);
    });
  });
}

// readDatabase('../database.csv').then((data) => {
// console.log(data);
// }).catch((err) => { console.log(err) });
