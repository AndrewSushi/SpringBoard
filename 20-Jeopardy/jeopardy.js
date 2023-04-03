const NUM_QUESTIONS_PER_CAT = 5;


// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

function getCategoryIds() {
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

function getCategory(catId) {
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

// async function fillTable(categories) {
//     // Find the jeopardy table in the HTML
//     const jeopardyTable = document.querySelector("#jeopardy");
  
//     // Create the table head
//     const thead = document.createElement("thead");
//     const headRow = document.createElement("tr");
  
//     // Add category titles to the table head
//     for (const category of categories) {
//       const th = document.createElement("th");
//       th.innerText = category.data.title;
//       headRow.appendChild(th);
//     }
//     thead.appendChild(headRow);
//     jeopardyTable.appendChild(thead);
  
//     // Create the table body
//     const tbody = document.createElement("tbody");
  
//     // Define the number of questions per category
  
//     // Add clues for each category
//     for (let i = 0; i < NUM_QUESTIONS_PER_CAT; i++) {
//       const tr = document.createElement("tr");
  
//       for (const category of categories) {
//         const td = document.createElement("td");
//         td.innerText = "?";
//         td.dataset.catIndex = categories.indexOf(category);
//         td.dataset.clueIndex = i;
//         td.addEventListener("click", function(e){
//           console.log("HERE")
//         })
//         tr.appendChild(td);
//       }
  
//       tbody.appendChild(tr);
//     }
//     jeopardyTable.appendChild(tbody);
//   }
  
async function fillTable(categories) {
  const jeopardyTable = document.querySelector("#jeopardy");

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");

  for (const category of categories) {
    const th = document.createElement("th");
    th.innerText = category.data.title;
    headRow.appendChild(th);
  }
  thead.appendChild(headRow);
  jeopardyTable.appendChild(thead);

  const tbody = document.createElement("tbody");
  const NUM_QUESTIONS_PER_CAT = 5;

  for (let i = 0; i < NUM_QUESTIONS_PER_CAT; i++) {
    const tr = document.createElement("tr");

    for (const category of categories) {
      const td = document.createElement("td");

      // Set the initial text of the table data cell
      td.innerText = "?";
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }
  jeopardyTable.appendChild(tbody);
}


/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    let response = await axios.get("https://jservice.io/api/categories?count=100")
    categories = []
    let ids = []
    // for(let i = 0; i < 6; i++){
    while(ids.length < 6){
        let int = response.data[Math.floor(Math.random() * 100)].id
        if(!ids.includes(int)){
            categories.push(await axios.get(`https://jservice.io/api/category?id=${int}`))
            ids.push(int)
        }
    }
    // console.log(response.data)
    console.log(categories)

    fillTable(categories)


}

/** On click of start / restart button, set up game. */

// TODO
$("#start").on("click", setupAndStart)

/** On page load, add event handler for clicking clues */

// TODO