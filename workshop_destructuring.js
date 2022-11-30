const arrDestruct = () => {
  //array destructuring
  const numbers = [1, 2, 3];
  const [one, two, three] = numbers;
  console.log(one, two, three);
  const [first, ...rest] = numbers;
  console.log(first, ...rest); //spread operator
  //const [one,,three]=numbers
  //console.log(one,three)

  //without destructuring
  const arr = [10, 20, 30];
  const ten = arr[0];
  const twenty = arr[1];
};
const varSwap = () => {
  //var swap classic way
  let a = "foo";
  let b = "bar";

  //swap
  let temp = a;
  a = b;
  b = temp;
  console.log(a, b);

  //super advanced elit coder trick
  [a, b] = [b, a];
  console.log(a, b);
};
arrDestruct();
varSwap();
