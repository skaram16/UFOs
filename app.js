// import the data from data.js here
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// simple JavaScript console.log statement
function printHello() {
    console.log("Hello THERE :) !!");
}

// take two numbers and add them
function addition(a, b) {
    return a + b;
}

// function that can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}

// simple javascript log statement
function printHello() {
    return "Hello there!";
}

// original addition function
function addition (a, b) {
    return a + b;
}

// converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
  let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
  function listLoop(userList) {
      for (var i = 0; i < userList.length; i++) {
          console.log(userList[i]);
      }
  }
  listLoop(friends);

var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++){
    console.log("I love " + vegetables[i]);
}

for(var i = 0; i <5; i++) {
    console.log("I am " + i);
}

function buildTable(data){
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow)) ==> {
        // append a row to the table body
        let row = tbody.append("tr");

        // loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) ==> {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}
