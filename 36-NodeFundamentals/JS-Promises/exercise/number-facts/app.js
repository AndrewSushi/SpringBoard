let numbersURL = "http://numbersapi.com";

axios.get(`${numbersURL}/8?json`)
    .then(data => {
    console.log(data);
});

let numbers = [1, 2, 3, 4, 5];
axios.get(`${numbersURL}/${numbers}?json`).then(data => {
    console.log(data);
});

const body = document.querySelector("body")
let fourNumberPromises = [];

for (let i = 1; i < 5; i++) {
    fourNumberPromises.push(
    axios.get(`${numbersURL}/8?json`)
  );
}

Promise.all(fourNumberPromises)
  .then(numberArr => (
    numberArr.forEach(n => body.append(`${n.data.text}`))
  ))
  .catch(err => console.log(err));