var inputDay = document.getElementById('inputDate')
const endDate = "17 November 2023 12:20";
document.getElementById("end-Date").innerText = endDate;
function clock(){
    const end = new Date(endDate);
    const now = new Date();
    console.log(end , now);
    const diff = end-now;
    inputDay.value = Math.floor(diff/5600/60/24)
}
clock();