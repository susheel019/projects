var varpnr = document.getElementById('txtPnr');
var txtPnrNumber = document.getElementById('txtPnrNumber')
var txtTrainNumber = document.getElementById('txtTrainNumber');
var txtTrainName = document.getElementById('txtTrainName');
var txtBoardingDate = document.getElementById('txtBoardingDate');
var txtFrom =document.getElementById('txtFrom');
var txtTo = document.getElementById('txtTo');
var txtReservedUpto = document.getElementById('txtReservedUpto');
var txtBoardingPoint = document.getElementById('txtBoardingPoint');
var txtClass = document.getElementById('txtClass');
var txtSNo = document.getElementById('txtSNo');
var txtBookingStatus = document.getElementById('txtBokkingStatus');
var txtcurrentStatus = document.getElementById('txtcurrentStatus');
var txtCoachPosition = document.getElementById('txtCoachPosition');
var txtTotalFair = document.getElementById('txtTotalFair');
var txtChartingStatus = document.getElementById('txtChartingStatus');
var txtRemark = document.getElementById('txtRemark');
var txtTrainStatus = document.getElementById('txtTrainStatus');

function btnPNR_click() {
  var pnr = varpnr.value;
  var url = `https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${pnr}`;
  var method = 'GET';
  callPnrApi(url, method);
}
function callPnrApi(url, method) {
  var request = new XMLHttpRequest();
  request.open(method, url, true);
  //Procedure to pass header
  request.setRequestHeader('X-RapidAPI-Key','665b92cf4dmsh1df996a46bad1b4p1daa64jsn323904d972b9'); 
  request.setRequestHeader('X-RapidAPI-Host', 'irctc1.p.rapidapi.com');
  request.onload = callBack;
  request.send();
}

function callBack() {
  var jsonResponse = this.responseText;
  var objJS = JSON.parse(jsonResponse);
  console.log(objJS);
  txtPnrNumber.innerHTML=objJS.data.Pnr;
  txtTrainNumber.innerHTML=objJS.data.TrainNo;
  txtTrainName.innerHTML = objJS.data.TrainName;
  txtBoardingDate.innerHTML = objJS.data.BookingDate;
  txtFrom.innerHTML = objJS.data.From;
  txtTo.innerHTML = objJS.data.To;
  txtReservedUpto.innerHTML = objJS.data.ReservationUpto;
  txtBoardingPoint.innerHTML = objJS.data.BoardingPoint;
  txtClass.innerHTML = objJS.data.Class;
  txtSNo.innerHTML = objJS.data.PassengerCount;
  txtCoachPosition.innerHTML = objJS.data.CoachPosition;
  txtTotalFair.innerHTML = objJS.data.BookingFare;
  txtChartingStatus.innerHTML = objJS.data.ChartPrepared;
  txtRemark.innerHTML = objJS.data.Rating; 
  txtTrainStatus.innerHTML = objJS.data.TrainStatus; 
  // for(var i = 0; i<objJS.data.PassengerStatus.length;i++)
  // {
  //      txtBookingStatus.innerText = objJS.data.PassengerStatus[i].BookingStatus+"<br>";
  //      txtcurrentStatus.innerText = objJS.data.PassengerStatus[i].CurrentStatus+"<br>";   
  // }
}
