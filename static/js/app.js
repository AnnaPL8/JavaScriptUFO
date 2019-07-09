// from data.js
var tableData = data;
var tablebody=d3.select("tbody");
function init(){
  // looping through the array of objects from data.js
  //check if table row is not better than tbody
  tableData.forEach((Js_object) => {
    var row = tablebody.append("tr");
    Object.entries(Js_object).forEach(([key, value]) => {
      var cell = row.append("td"); 
      cell.text(value);
    });
  });
}
// YOUR CODE HERE!

//Created the filter search for desired keys that I would like to look for

/* function search_table() {
  var input, filter, table, tr, td, i, txtValue; // declared not yet defined variables
  input = document.getElementById("datetimeInput"); //defined variable, etc
  // filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table"); //code taken from index.html table.id
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
} */ 

document.getElementById("datetimeInput").addEventListener("input", function(){
  
    var input, filter, table, tr, td, i, txtValue; // declared not yet defined variables
   input = document.getElementById("datetimeInput"); //defined variable, etc
    filter = input.value;
    console.log(filter);
    table = document.getElementById("ufo-table"); //code taken from index.html table.id
    tr = table.getElementsByTagName("tr");
    console.log(tr);
   console.log(tr.length);
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      console.log(td);
      if (td) {
        txtValue = td.textContent || td.innerText;
        console.log(txtValue);
        if (txtValue.indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  
});

init();

//copied onkeyup from https://www.w3schools.com/howto/howto_js_filter_table.asp  and pasted to html code
//


