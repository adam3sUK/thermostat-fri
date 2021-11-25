const CANDIES_DB = ['Mars', 'Maltesers', 'Skittles', 'Fraise Tagada'];

const fetchCandiesFromDatabase = (resultHanlder) => {
  setTimeout(() => {
    resultHanlder(CANDIES_DB);
  }, 2000);
}

const handleResult = (result) => {
  console.log(result);
}

// const handleEachResult = (results) => {
//   results.forEach(result => console.log(result));
// }

fetchCandiesFromDatabase(handleResult);

// fetchCandiesFromDatabase(handleEachResult);