function addRow(){
    var table = document.getElementById("sampleTable");
    var row = table.insertRow(3);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "103";
    cell2.innerHTML = "Rajesh Patil";
}