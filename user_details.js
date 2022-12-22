var formData= JSON.parse(localStorage.getItem("List"));
var selectedRow = null;
if(true){
    if (selectedRow == null)
        {
            // Insert New Employee Record
            insertNewRecord(formData);
        }
    else
        {
            // Update New Employee Record
            updateRecord(formData);
        }
}
    //insert data into the table
    function insertNewRecord(formData) {
        for(let i=0; i<formData.length;i++)
        {
            var table = document.getElementById("tbody");
            var newRow = table.insertRow(i);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = formData[i].fname;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = formData[i].lname;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = formData[i].email;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = formData[i].role;
            cell5 = newRow.insertCell(4);
            cell5.innerHTML = formData[i].pwd;
            cell5 = newRow.insertCell(5);
            cell5.innerHTML = `
            <a onClick="onDelete(this)">Delete</a>`;
        }
    }

    //update newly received data into the table
    function updateRecord(data) {
        selectedRow.cells[0].innerHTML = data.fname;
        selectedRow.cells[1].innerHTML = data.lname;
        selectedRow.cells[2].innerHTML = data.email;
        selectedRow.cells[3].innerHTML = data.role;
        selectedRow.cells[4].innerHTML = data.pwd;
    }

    function onDelete(td) {
        selectedRow = td.parentElement.parentElement;
        if(selectedRow.cells[3].innerHTML=="Admin")
        {
            if (confirm('Are you sure to delete this record ?')) 
            {
                row = td.parentElement.parentElement;
                document.getElementById("table").deleteRow(row.rowIndex);
            }
        }else{
            alert("You cannot delete this record since you are not the admin.");
        }
    }