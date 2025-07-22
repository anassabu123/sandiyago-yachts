// ================model ======================
var modal2 = document.getElementById("myModal2");

var btnModal2 = document.getElementById("requestcall");

var span = document.getElementsByClassName("close2")[0];
var modalOpened = false;

// setInterval(()=>{

//   const scrollDisable=window.onscroll = function() {
//     if (!modalOpened) {
//       modal.style.display = "block";
//       modalOpened = true;
//     }
//   }
// },3000)


btnModal2.onclick=function(){
    // modal2.style.display="flex"
    modal2.style.top='0%'
    modal2.style.opacity='1';
    modal2.style.pointerEvents='all';
    document.querySelector('html').style.overflow='hidden'

    // console.log(modalType.value)
    modalOpened=true;
}


span.onclick = function() {
  modal2.style.top=''
    modal2.style.opacity='';
    modal2.style.pointerEvents='';
    document.querySelector('html').style.overflow='scroll'

}

function modalcloseonsubmit2(){
    //   if (modal2.style.display=="flex") {
    //   modal2.style.display = "none";
    //   document.querySelector('html').style.overflow='scroll'

    // }
    modal2.style.top=''
    modal2.style.opacity=''
    modal2.style.pointerEvents=''
    document.querySelector('html').style.overflow='scroll'
}


// ================ end model ======================
