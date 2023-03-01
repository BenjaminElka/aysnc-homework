
const Myfetch = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
};
const SecondFetch = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users ");
  const data = await response.json();
  return data;
};
const ThirdFetch = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts ");
  const data = await response.json();
  return data;
};
//Myfetch();
//SecondFetch();
// ThirdFetch();
//function func{
//-}
//const rate 1  = fetch("getDollarForShekel")
//const rate 2 =fetch("getBitcoinForDollar")
//setTimout(func(),15000)
async function allFetch(a, b, c) {
  const answerOne = await a();
  console.log(answerOne);
  const answerTwo = await b();
  console.log(answerTwo);
  const answerThird = await c();
  console.log(answerThird);
}

allFetch(Myfetch, SecondFetch, ThirdFetch);

// async function x(){} // create new function
// const x =async ()=>{} // create new function


const rateCalulator = async () => {
  let response = await fetch('https://data.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT');
  let json = await response.json();
  const lastPrice = json.lastPrice;
  response = await fetch('https://api.exchangerate.host/latest?base=USD');
  json = await response.json();
  console.log(lastPrice * json.rates.ILS);

  // fetch('https://data.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT')
  //     .then((response) => response.json())
  //     .then((data) => {
  //         const lastPrice = data.lastPrice;

  //         fetch('https://api.exchangerate.host/latest?base=USD')
  //             .then((response) => response.json())
  //             .then((data) => {

  //                 console.log(lastPrice * data.rates.ILS);
  //             });
  //     });

  setTimeout(rateCalulator, 15000);
}
rateCalulator();



let main = async () => {
  let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  let json = await response.json();
  let name = json.drinks[0].strDrink;
  document.querySelector('#name').innerText = name;

  let i = 1;
  while (true) {
      let ingredient = json.drinks[0]['strIngredient' + i];
      if (ingredient === null) {
          break;
      }

      const response1 = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + ingredient);
      const json1 = await response1.json();

      console.log(json1);

      printIngredient(ingredient, json1.ingredients[0].strDescription, json1.ingredients[0].strAlcohol);

      i += 1;
  }
}
main();

const printIngredient = (name, description, isAlcholic) => {
  const newDiv = document.createElement('div');
  newDiv.innerHTML =
      `<b>Name</b>: ${name}<br>
      <b>Description</b>: ${description || ''}<br>
      <b>Is alcoholic</b>: ${isAlcholic || ''}`;
  document.body.appendChild(newDiv);
};

// name of random cocktail
// print ingredients of cocktail
// find description of ingredients
