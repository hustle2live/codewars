// Decibel Scale
// https://www.codewars.com/kata/5612a42e746aa62de100001a/

// The following formula is called the Decibel Scale:

// Decibel Scale Formula

// The Decibel Scale is used to determine the loudness of a sound, measured in dB:

// β is the result we want, defined in dB;
// We multiply the result of the logarithmic operation by 10, otherwise it'll be called "Bel Scale"...


const dBScale = (intensity) => 10 * Math.log10((intensity / Math.pow(10, -12)));








