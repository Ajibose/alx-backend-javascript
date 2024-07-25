const fs = require('node:fs');

function countStudents(path) {
  try {
    let length = 0
    const contents = fs.readFileSync(path, 'utf8');
    const fields = {};
    const contentList = contents.split('\n').slice(1);
    for (const content of contentList) {
      if (content) {
        length += 1
        const [firstName, , , field] = content.split(',');
        if (!(field in fields)) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    }
    const noOfStudents = contentList.length;
    console.log(`Number of students: ${length}`);
    Object.entries(fields).forEach(([key, value]) => {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`)
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  
}

module.exports = countStudents;
