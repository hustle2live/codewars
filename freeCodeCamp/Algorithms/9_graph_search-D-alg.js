const points = ['A', 'B', 'C', 'D', 'E', 'F'];

const graph = {
   A: { B: 2, C: 1 },
   B: { F: 7 },
   C: { D: 5, E: 2 },
   D: { F: 2 },
   E: { F: 1 },
   F: { G: 1 },
   G: {}
};

function doesGetPoint(graphMap, startPoint, endPoint) {
   const costs = {};
   const processed = [];
   let neighbors = {};

   Object.keys(graphMap).forEach((el) => {
      if (el !== startPoint) {
         const value = graphMap[startPoint][el];
         costs[el] = value || 100000000;
      }
   });

   let node = findLowestCost(costs, processed);
   while (node) {
      const cost = costs[node];
      neighbors = graphMap[node];
      Object.keys(neighbors).forEach((neighbor) => {
         let newCost = cost + neighbors[neighbor];
         if (newCost < costs[neighbor]) {
            costs[neighbor] = newCost;
         }
      });
      processed.push(node);
      node = findLowestCost(costs, processed);
   }

   return costs;
}

function findLowestCost(arr, used) {
   let lowestCost = 100000000;
   let lowestElem;
   Object.keys(arr).forEach((point) => {
      let cost = arr[point];
      if (cost < lowestCost && !used.includes(point)) {
         lowestCost = cost;
         lowestElem = point;
      }
   });

   return lowestElem;
}

console.log(doesGetPoint(graph, 'A', 'G'));
