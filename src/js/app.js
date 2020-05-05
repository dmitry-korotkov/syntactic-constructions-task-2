export default function findBy(prop, value) {
  return (obj) => {
    if (obj[prop] === value) {
      return obj;
    }
    return false;
  };
}
