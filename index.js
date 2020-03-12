let td = document.getElementsByTagName("td");
let x = true;
let XnextO = document.getElementById("XnextO");
let next;
let j = 1;
const array = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
Storage();
document.getElementById("result_X").innerText = sessionStorage.getItem("X");
document.getElementById("result_O").innerText = sessionStorage.getItem("O");
document.write("<table border=1>");
for (let i = 0; i < 3; i++) {
  document.write("<tr>");
  for (let k = 0; k < 3; k++) {
    document.write("<td>" + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");

for (let index = 0; index < td.length; index++) {
  let element = td[index];
  element.addEventListener(
    "click",
    function myFunction() {
      next = x ? "X" : "O";
      XnextO.innerText = `now play is ${x ? "o" : "x"}`;
      x = !x;

      element.innerHTML = next;
      for (let i = 0; i < array.length; i++) {
        for (let e = 0; e < array[i].length; e++) {
          if (index === array[i][e]) {
            array[i][e] = next;
          }
          if (
            array[i][0] === next &&
            array[i][1] === next &&
            array[i][2] === next
          ) {
            win(next);
            alert(`wins the  ${next}`);
            document.location.reload(true);
          }
        }
      }
      if (j === 9) {
        alert("the game ended in a draw");
        document.location.reload(true);
      }
      j++;
    },
    { once: true }
  );
}
function Storage() {
  if (sessionStorage.getItem("X") == null) {
    console.log(111);
    sessionStorage.setItem("X", 0);
  }
  if (sessionStorage.getItem("O") == null) {
    console.log(111);

    sessionStorage.setItem("O", 0);
  }
}

function win(next) {
  sessionStorage.setItem(next, +sessionStorage.getItem(next) + 1);
  document.getElementById(`result_${next}`).innerHTML = sessionStorage.getItem(
    next
  );
}
