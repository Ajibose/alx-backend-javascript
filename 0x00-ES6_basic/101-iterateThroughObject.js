export default function iterateThroughObject(reportWithIterator) {
  const list = Array.from(reportWithIterator);
  return list.join(' | ');
}
