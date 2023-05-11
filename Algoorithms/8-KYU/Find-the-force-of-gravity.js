// Your job is to find the gravitational force between two spherical objects (obj1 , obj2).
// return value must be Newton for force (obviously)
// μ copy this from here to use it in your solution

// https://www.codewars.com/kata/5b609ebc8f47bd595e000627/

// mass units are :

// kilogram (kg)
// gram (g)
// milligram (mg)
// microgram (μg)
// pound (lb)
// distance units are :

// meter (m)
// centimeter (cm)
// millimeter (mm)
// micrometer (μm)
// feet (ft)

const solution = (arr_val, arr_unit) => {
   const m1 = convertToKilograms(arr_val[0], arr_unit[0]);
   const m2 = convertToKilograms(arr_val[1], arr_unit[1]);
   const r = convertToMetter(arr_val[2], arr_unit[2]);
   const g = 6.67 * Math.pow(10, -11);

   const force = (g * (m1 * m2)) / (r * r);

   return force;
};

const convertToKilograms = (value, expr) => {
   switch (expr) {
      case 'kg':
         return value;
      case 'g':
         return value * 0.001;
      case 'mg':
         return value * Math.pow(10, -6);
      case 'μg':
         return value * Math.pow(10, -9);
      case 'lb':
         return value * 0.453592;
   }
};

const convertToMetter = (value, expr) => {
   switch (expr) {
      case 'm':
         return value;
      case 'cm':
         return value * 0.01;
      case 'mm':
         return value * Math.pow(10, -3);
      case 'μm':
         return value * Math.pow(10, -6);
      case 'ft':
         return value * 0.3048;
   }
};


// test 
// console.log(solution([1000, 1000, 100], ["g", "kg", "m"]) === 6.67e-12)