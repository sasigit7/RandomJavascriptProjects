// alert("hello");
function submitAnswers() {
  let total = 5; // total number of questions
  let score = 0; // initial score

  // Get user input
  let q1 = document.forms["quizForm"]["q1"].value;
  let q2 = document.forms["quizForm"]["q2"].value;
  let q3 = document.forms["quizForm"]["q3"].value;
  let q4 = document.forms["quizForm"]["q4"].value;
  let q5 = document.forms["quizForm"]["q5"].value;

  //alert(q1); // selects the user pick for question 1 on clicking the submit button

  // Basic Validation Setup
  for (let i = 1; i <= total; i++) {
    if (eval("q" + i) === null || eval("q" + i) === "") {
      alert("You missed question " + i);
      return false;
    }
  }

  // Set Correct Answers
  let answers = ["b", "a", "d", "b", "d"];

  // Check the answers
  // if(q1 === answers[0]) {
  //     score++; // score will increase to 1 from 0
  // }
  // if(q2 === answers[1]) {
  //     score++; // score will increase to 1 from 0
  // }
  // if(q3 === answers[2]) {
  //     score++; // score will increase to 1 from 0
  // }
  // if(q4 === answers[3]) {
  //     score++; // score will increase to 1 from 0
  // }
  // if(q5 === answers[4]) {
  //     score++; // score will increase to 1 from 0
  // }
  // Loop above code to avoid the repitition
  for (let i = 1; i <= total; i++) {
    if (eval("q" + i) === answers[i - 1]) {
      score++; // score will increase to 1 from 0
    }
  }
  // Display results on the page
  let results = document.getElementById("results");
  results.innerHTML =
    "<h3>You scored <span>" +
    score +
    "</span> out of <span>" +
    total +
    "</span></h3>";
  alert("You scored " + score + " out of " + total);

  return false;
}
