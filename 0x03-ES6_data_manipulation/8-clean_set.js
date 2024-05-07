export default function cleanSet(set, startString) {
  let resultString = '';
  if (!startString) {
    return '';
  }
  const idx = startString.length;
  for (const element of set) {
    if (element.startsWith(startString) && Boolean(startString)) {
      resultString += `${element.slice(idx)}-`;
    }
  }
  return resultString.replace(/-$/, '');
}
