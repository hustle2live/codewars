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

asyncFunc().then((res) => console.log(res));
