// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

// simple solution
function eachCons1(array, n, newArr = []) {
   if (!array.length) return newArr;
   for (let i = 0; i < array.length; i++) {
      const subArr = array.slice(i, i + n);
      subArr.length === n ? newArr.push(subArr) : null;
   }
   return newArr;
}


const eachCons = (array, n) =>
   array.reduce((acc, _, i, arr) => {
      return arr.length - i >= n ? [...acc, arr.slice(i, i + n)] : acc;
   }, []);





