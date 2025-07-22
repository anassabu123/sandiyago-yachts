// Number max length==============

document.getElementById("bookUserPhone").oninput = function () {
  if (this.value.length > 4) {
      this.value = this.value.slice(0,10); 
  }
}
document.getElementById("noOfPeople").oninput = function () {
  if (this.value.length > 3) {
      this.value = this.value.slice(0,3); 
  }
}


// ================model ======================
var modal = document.getElementById("myModal");
var btnModal = document.getElementById("booknowbtn");

var span = document.getElementsByClassName("close")[0];
var modalOpened = false;

// setInterval(()=>{

//   const scrollDisable=window.onscroll = function() {
//     if (!modalOpened) {
//       modal.style.display = "block";
//       modalOpened = true;
//     }
//   }
// },3000)


function modal1open(e, id, eventPrice){
  // console.log(id)
  // id get from index page for set modal hidden field id 
  document.getElementById('yachtBookId').value = id;
  document.getElementById('eventPrice').value = eventPrice;
  //================================================== 

    // modal.style.display="flex"
    modal.style.top='0%'
    modal.style.opacity='1'
    modal.style.pointerEvents='all'
    document.querySelector('html').style.overflow='hidden'
    modalOpened=true;
}


span.onclick = function() {
    modal.style.top=''
    modal.style.opacity=''
    modal.style.pointerEvents=''
    document.querySelector('html').style.overflow='scroll'

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.top=''
    modal.style.opacity=''
    modal.style.pointerEvents=''
    document.querySelector('html').style.overflow='scroll'

  } else if (event.target == modal2) {
    modal2.style.top='';
    modal2.style.opacity='';
    modal2.style.pointerEvents='';
    document.querySelector('html').style.overflow='scroll'

  }
}

function modalcloseonsubmit(){
  //     if (modal.style.display=="flex") {
  //     modal.style.display = "none";
      
  // document.querySelector('html').style.overflow='scroll'

  //   }
  console.log("Modal 1 closed")
    modal.style.top=''
    modal.style.opacity=''
    modal.style.pointerEvents=''
    document.querySelector('html').style.overflow='scroll'
}



// ================ end model ======================
