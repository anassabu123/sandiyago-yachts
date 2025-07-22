//  ================================Book Know Send Data============================================
const bookRequest = (e) => {
  e.preventDefault()
  // data get from modal page
  let userName = document.getElementById('bookUserName').value.trim()
  let dateRange = document.getElementById('daterange').value.trim()
  let UserEmail = document.getElementById('bookUserEmail').value.trim()
  let userPhone = document.getElementById('bookUserPhone').value
  let noOfPeople = document.getElementById('noOfPeople').value
  let destination = document.getElementById('destination').value.trim()

  // data get from index page and currentBoatId get from modal page
  let currentBoatId = document.getElementById('yachtBookId').value;
  let eventPrice=document.getElementById('eventPrice').value;

  let yachtName = "";
  let yachtPrice = "";
  if (document.querySelector(`.yachtName-${currentBoatId}`)) {
    yachtName = document.querySelector(`.yachtName-${currentBoatId}`).innerText;
  }
  if (document.querySelector(`.yachtPrice-${currentBoatId}`)) {
    yachtPrice = document.querySelector(`.yachtPrice-${currentBoatId}`).innerText;
  }

  let dataToSend = {}
  if (yachtName != "") {
    dataToSend = {
      'name': userName,
      'date': dateRange,
      'UserEmail': UserEmail,
      'userPhone': userPhone,
      'noOfPeople': noOfPeople,
      'destination': destination,
      'yachtName': yachtName,
      'yachtPrice': yachtPrice,
    }
  } else {
    dataToSend = {
      'name': userName,
      'date': dateRange,
      'UserEmail': UserEmail,
      'userPhone': userPhone,
      'noOfPeople': noOfPeople,
      'destination': destination,
      'event': currentBoatId,
      'eventPrice':eventPrice,
    }
  }

  // console.log(dataToSend);

  fetch('/bookingRequest/', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json', 'X-CSRFToken': document.getElementById('hiddenCsrfToken2').value,
    },
    body: JSON.stringify(dataToSend)
  }).then(res => {
    return res.json();
  }).then(data => {
    switch (data.status) {
      case 'failed':
        var alertMessage = document.getElementById("alertMessage");
        alertMessage.innerText = "Something went wrong! Please try again after some time...";
        showAlert()
        break;
      default:
        var alertMessage = document.getElementById("alertMessage");
        alertMessage.innerText = "We'll be in touch soon.";
        showAlert()
    }
  })
  modalcloseonsubmit()
}