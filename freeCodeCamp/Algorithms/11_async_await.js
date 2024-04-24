const url = 'https://api.chucknorris.io/jokes/random';

function wait(ms) {
   return new Promise((resolve) => {
      setTimeout(resolve, ms);
   });
}

async function asyncFunc() {
   try {
      console.log('functions starts');

      await wait(1300);

      const response = await fetch(url);
      let data;
      if (response.ok) {
         data = await response.json();
         return console.log(data.value);
      }

      throw new Error('error while fetching joke...');
   } catch (error) {
      console.log(error);
   } finally {
      await wait(1300);
      console.log('------ E X I T --');
   }
}

// asyncFunc().then((res) => console.log(res));

async function getAllJokes(url1, url2) {
   try {
      const [response1, response2] = await Promise.all([fetch(url1), fetch(url2)]);

      const result1 = await response1.json();
      const result2 = await response2.json();

      console.log(result1.value);
      console.log(result2.value);
   } catch (err) {
      console.log(err);
   }

   return 'asdasd';
}

getAllJokes(url, url);
