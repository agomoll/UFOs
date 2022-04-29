// Import the data from data.js
const tableData = data;

//Refereence the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear out existing data
    tbody.html("");
    // Loop through each object in the data
    data.forEach((dataRow) =>{
    // Create a variable that will append a row to the table body
        let row = tbody.append("tr");
        // Create function to loop through each field again to set up fo <td> tags
        Object.values(dataRow).forEach((val) => {
            // Add the values
            cell.text(val);
            }
        );
    });
}
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Populate table with filtered data
    buildTable(filteredData);
}

// "listen" for button clicks
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);


