export default function updateStudentGradeByCity(studentsArray, city, newGrades) {
  return (studentsArray.filter((student) => student.location === city)).map(
    (student) => {
      const grades = newGrades.filter((gradeObj) => gradeObj.studentId === student.id);
      return { ...student, grade: grades.length === 0 ? 'N/A' : grades[0].grade };
    },
  );
}
