// Reference the HTML table using d3 (data-driven documents - adds interactive functionality such as when users click a button to filter a table)
// Telling JavaScript to look for the <tbody> tags in the HTML
var tableData = data
var tbody = d3.select("tbody");

// why should we clear existing data from the table?
// Clearing the existing data creates a fresh table in which we can insert data. 
// If we didn't clear existing data first, then we would find ourselves reinserting data that already exists
function buildTable(data) {
    tbody.html("");

    // forEach function: loops through our data array and then adds rows of data to the table
    // =>: Arrow Functions (similar to lambda function in python)
    data.forEach((dataRow) => {
        // we are using let instead of var to declare the row variable
        // because the variable is limited to just this block of code
        // We are telling JavaScript to find the <tbody> tag within the HTML and add a table row "tr"
        let row = tbody.append("tr");

        // We are telling JavaScript to reference one object from the array of UFO sightings 
        // We want the values to go into the dataRow
        // We'vd added forEach((val)to specify we want one object per row
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            // variable that holds only each value from the object (only text of the value)
            cell.text(val);
            }
        );
    });
}

function handleClick() {
    // .select() function is a very commone one used in D3
    // It will select the very first element that matches our selector string "#datetime"
    // .perperty("value"); - we are telling D3 not only to look for where our date values are stored,
    // but also to grab that info and hold it in the "date" variable
    let date = d3.select("#datetime").property("value");

    // our original data "tableData" imported from data.js file
    let filteredData = tableData;
    // if (a date is entered) { Filter the default data to show only the date entered }
    // we are applying filter method that will match the datetime value to the filtered date value
    if (date) {
        filteredData = filteredData.filter(row => row.datetime ===date);
    };
 
    buildTable(filteredData);
};

// selector string is "#filter-btn" 
// We will assign a unique id to a button element in the HTML called "filter-btn"
// .on("click", handleClick); - we are telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);





if (filters[filterId] !== "") {
    filteredData = filteredData.filter(entry => entry.datetime === elementValue);
  }

  else if (filters[filterId] !== "") {
    filteredData = filteredData.filter(entry => entry.city === elementValue);

  }
  else if (filters[filterId] !== "") {
    filteredData = filteredData.filter(entry => entry.state === elementValue);

  }
  else if (filters[filterId] !== "") {
    filteredData = filteredData.filter(entry => entry.country === elementValue);

  }
  else 
    filteredData = filteredData.filter(entry => entry.shape === elementValue);
});