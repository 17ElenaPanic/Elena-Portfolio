//Range slider for people(table reservation)

const value=document.querySelector("#value");
const input=document.querySelector("#people-input");
// const delivery=document.querySelectorAll(".delivery");
// const people=document.getElementById("#people");
value.textContent=input.value;
input.addEventListener("input", (event) => {
  // console.log("Tuka stignav");
  value.textContent=event.target.value;
  // console.log("Value");
});

//Date restriction
var today = new Date();
var formattedDate = today.toISOString().split("T")[0];
document.getElementById('textDate').min = formattedDate;
// if(formattedDate > textDate ){
//   alert("Your date is  wrong, try again")
// }
console.log(formattedDate);
console.log(today);
console.log(textDate);