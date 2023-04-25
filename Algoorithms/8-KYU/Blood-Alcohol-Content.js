// https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8

// A: Total alcohol consumed, in ounces (oz)
// W: Body weight, in pounds (lbs)
// r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
// H: Time passed since drinking, in hours

// BAC% = (A × 5.14 / W × r) - .015 × H

function bloodAlcoholContent(drinks, weight, sex, time) {
   const A = (drinks.ounces * drinks.abv);
   const H = time,
       W = weight,
       r = sex === 'male' ? 0.73 : sex === 'female' ? 0.66 : 1;
    const bac = (A * 5.14 / W * r) - 0.015 * H;

    return +bac.toFixed(4);
 }






// Note:BAC can be measured by breath or blood test. The breath test will be translated into blood alcohol content (BAC).

// Test.assertEquals(bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'male', 1), 0.0837)
// Test.assertEquals(bloodAlcoholContent({ounces:180, abv:0.05}, 160,'female', 1), 0.1758);
// Test.assertEquals(bloodAlcoholContent({ounces:50, abv:0.14}, 250,'male', 3), 0.0601);
// Test.assertEquals(bloodAlcoholContent({ounces:20, abv:0.4}, 100,'female', 2), 0.2414);
