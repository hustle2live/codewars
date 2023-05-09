// Miles per gallon to kilometers per liter
//code to convert miles per imperial gallon to kilometers per liter
// Some useful associations relevant to this kata:

// 1 Imperial Gallon = 4.54609188 litres
// 1 Mile = 1.609344 kilometres

//code to convert miles per imperial gallon to kilometers per liter



function converter(mpg) {
   const iGallon = 4.54609188;
   const mile = 1.609344;
   const num = (mpg * (mile / iGallon)).toFixed(2);
   return +num;
}



