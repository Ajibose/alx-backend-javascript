export default function hasValuesFromArray(set, array) {
  const set1 = new Set(array);
  return set.isSupersetOf(set1);
}
