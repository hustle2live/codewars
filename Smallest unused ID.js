function nextId(ids){
  const arr=[];
  for (let i = 1; i <= ids.length; i++) {
    if (!ids.find(n => n === i)) arr.push(+i) ;
  }
  const minNum = (arr.sort((a,b) => b - a));

  return minNum.pop()
}
