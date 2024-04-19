const points = ['A', 'B', 'C', 'D', 'E', 'F'];

const graphMap = {
   A: ['B', 'C'],
   B: ['F'],
   C: ['D', 'E'],
   D: ['F'],
   E: ['F'],
   F: ['G']
};

function doesGetPoint(graphMap, startPoint, endPoint) {
   let queue = [];
   queue.push(startPoint);

   while (queue.length) {
      const first = queue.shift();

      if (!graphMap[first]) {
         graphMap[first] = [];
      }

      if (graphMap[first].includes(endPoint)) {
         return true;
      } else {
         queue = [...queue, ...graphMap[first]];
      }
   }
   return false;
}

console.log(doesGetPoint(graphMap, 'A', 'G'));
