function squareOrSquareRoot(array) {
    return array.map((n)=> (n % Math.sqrt(n)) === 0 ? Math.sqrt(n) : n**2 );  
  }