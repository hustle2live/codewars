function count(str) {
   const obj = {};
   for (const key of str) obj[key] = Object.keys(obj).includes(key) ? ++obj[key] : 1;
   return obj;
}





