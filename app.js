//1

const filterOutOdds = (...arguments) =>
  arguments.filter((num) => num % 2 === 0);

//2
const findMin = (...arguments) => {
  return Math.min(...arguments);
};

//3
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

//4
const doubleAndReturnArgs = (arr, ...arguments) => {
  return [...arr, ...arguments.map((num) => num * 2)];
};

//5
const removeRandom = (arr) => {
  let random1 = Math.floor(Math.random() * arr.length);

  return [...arr.slice(0, random1), ...arr.slice(random1, +1)];
};

//6
const extend = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

//7
const addKeyValue = (obj, keys, value) => {
  return { ...obj, keys, value };
};

//8
const removeKey = (obj, val) => {
  let newOBJ = { ...obj };
  delete newOBJ[val];
  return newOBJ;
};

//9
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

//10
const update = (obj, key, value) => {
  let newOBJ = { ...obj };
  newOBJ[key] = value;
  return newOBJ;
};
