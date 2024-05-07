export default function cleanSet(set, startString) {
  let resultString = '';
  const idx = startString.length;
  for (const element of set) {
    if (element.startsWith(startString) && startString !== '') {
      resultString += `${element.slice(idx)}-`;
    }
  }
  return resultString.replace(/-$/, '');
}
