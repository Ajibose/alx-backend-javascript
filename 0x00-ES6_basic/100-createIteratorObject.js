export default function createIteratorObject(report) {
  const a = { ...report.allEmployees };
  const b = [...Object.values(a)];
  const c = [].concat(...b);
  return c[Symbol.iterator]();
}
