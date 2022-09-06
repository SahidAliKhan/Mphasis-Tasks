function splits(){
    let text = document.getElementById("sentence");
    const myArray = text.split('');
    document.getElementById("demo").innerHTML = myArray;
}