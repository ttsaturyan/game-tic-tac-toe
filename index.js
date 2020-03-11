let td = document.getElementsByTagName("td");
let x = true;
let y;
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
  element.addEventListener("click", function myFunction() {
    y = x ? "X" : "O";
    element.innerHTML = y;
    for (let i = 0; i < array.length; i++) {
      for (let e = 0; e < array[i].length; e++) {
        if (index === array[i][e]) {
          array[i][e] = y;
        }
        if (array[i][0] === "X" && array[i][1] === "X" && array[i][2] === "X") {
          console.log(array[i][e]);
          document.location.reload(true);
        }
      }
    }
    x = !x;
  });
}
