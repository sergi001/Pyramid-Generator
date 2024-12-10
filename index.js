const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
//**The first waay to create the pyramid using the for loop */
// for (let i = 0; i < count; i++) {
//     rows.push(padRow(i,count));
    
// }

//**The Second way waay to create the pyramid using the for loop */

while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
  }

  let first = "";
  let second = "";


for (const row of rows) {
  first = first + "\n" + row;
  second = second + "\n" + row;

}

console.log(first);