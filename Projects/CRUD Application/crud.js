var txtFirstName = document.getElementById('txtFirstName');
var txtLastName = document.getElementById('txtLastName');
var txtRollNo = document.getElementById('txtRollNo')


var arrFirst = []
var arrLast  = []
var arrRoll  = []

function add_click(){
    let first = txtFirstName.value
    let last = txtLastName.value
    let roll = txtRollNo.value

    //insert all element in arrayt

    arrFirst.push(first)
    arrLast.push(last)
    arrRoll.push(roll)
    console.log(arrFirst);
    console.log(arrLast);
    console.log(arrRoll);
}
function showData(){
    
}