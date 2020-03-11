let td = document.getElementsByTagName("td");
let x = true;
let xxx = document.getElementById("X");
let next;
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
window.onload = function() {
  document.getElementById("result_X").innerHTML = sessionStorage.getItem("X");
  document.getElementById("result_O").innerHTML = sessionStorage.getItem("O");
};
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

            // document.location.reload(true);
          }
        }
      }
      x = !x;
    },
    { once: true }
  );
}

function win(next) {
  sessionStorage.setItem(next, +sessionStorage.getItem(next) + 1);
  document.getElementById(`result_${next}`).innerHTML = sessionStorage.getItem(
    next
  );
}
