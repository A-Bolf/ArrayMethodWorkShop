//shallow copy
const shallowCopy = () => {
  const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

  //const saladcopy = JSON.parse(JSON.stringify(salad));
  //const saladcopy=[...salad]
  const saladcopy = salad.slice();
  console.log(salad === saladcopy);
};

//join arrays
const arrJoin = () => {
  //with spread operator
  const emoji = ["🙂", "😔"];
  const vegetables = ["🥦", "🥒", "🌽", "🥕"];
  const emotionalVeggies = [...emoji, ...vegetables];
  console.log(emotionalVeggies);

  //with concat
  const emotion = ["🙂", "😔"];
  const veggies = ["🥦", "🥒", "🌽", "🥕"];
  console.log(emotion.concat(veggies));
};

//FILTER function
const arrFilter = () => {
  const userList = [
    { name: "jane", active: true },
    { name: "john", active: true },
    { name: "doe", active: false },
  ];
  //find all inactive users
  //imperative
  let inactiveUsers = [];
  for (const user of userList) {
    if (user.active === false) {
      inactiveUsers.push(user);
    }
  }
  console.log(...inactiveUsers);

  //declarative
  inactiveUsers = userList.filter((user) => {
    return !user.active;
  });
  console.log(...inactiveUsers);
};

//MAP function
const arrMap = () => {
  const users = [{ name: "jane" }, { name: "john" }, { name: "doe" }];
  //collect usernames into an array
  //imperative
  let names = [];
  for (const user of users) {
    names.push(user.name);
  }
  console.log(names);

  //declarative with .map
  names = users.map((user) => user.name);
  console.log(names);
};

//REDUCE function
const arrReduce = () => {
  const shop = [
    { name: "brick", price: 1337 },
    { name: "wood", price: 80085 },
    { name: "paint", price: 69 },
  ];
  //calculate total price of items
  //imperative
  let total = 0;
  for (const item of shop) {
    total += item.price;
  }
  console.log(total);

  //declarative with .reduce
  const add = (acc, current) => {
    return acc + current.price;
  };
  total = shop.reduce(add, 0); //default value
  console.log(total);
};

//default sort
const arrSort = () => {
  const unsortedArr = [123, 4321, 1111111, 9, 1911];

  const numberSort = (a, b) => {
    return a - b;
  };
  console.log(unsortedArr.sort()); //values converted to string then sorted
  console.log(unsortedArr.sort(numberSort)); //values not converted to string

  // If compare(a, b) < 0, sort a to an index lower than b, meaning a comes first.
  // If compare(a, b) = 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
  // If compare(a, b) > 0, sort b to an index lower than a meaning b comes first.
};

shallowCopy();
arrJoin();
arrFilter();
arrMap();
arrReduce();
arrSort();
