export default function getListStudentIds(objArray) {
  if (!(objArray instanceof Array || (!(objArray.every((obj) => obj instanceof Object))))) {
    return [];
  }
  return objArray.map((obj) => obj.id);
}
