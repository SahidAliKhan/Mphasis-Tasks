function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
    document.getElementById("msg").innerHTML="Row with index ["+i+"] deleted successfully";
}