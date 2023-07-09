const submit = document.getElementById("submit");
const stageOne = document.getElementById("stage-one");
const stageTwo = document.getElementById("stage-two");
const stars = document.getElementById("stars");
const num = document.querySelectorAll("#num");

let his;
let ans;
function add(e) {
  if (his != undefined) {
    his.classList.remove("orange");
    his = undefined;
    add(e);
  } else {
    ans = e.target.textContent;
    e.target.classList.add("orange");
    his = e.target;
  }
}
num.forEach((e) => e.addEventListener("click", (e) => add(e)));
submit.addEventListener("click", () => {
  if (ans != undefined) {
    stageOne.classList.add("disabled");
    stageTwo.classList.remove("disabled");
    stageTwo.classList.add("sub_content")
    stars.textContent = ans;
  } else {
    alert("Pick your star score!");
  }
});
