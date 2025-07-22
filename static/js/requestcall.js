// Number max length==============

document.getElementById("enquiryPhone").oninput = function () {
    if (this.value.length > 4) {
        this.value = this.value.slice(0,10); 
    }
  }
  
  // Call Request Form
  
  const callRequest=(e)=>{
      e.preventDefault()
      let name=document.getElementById('enquiryName').value.trim()
      let message=document.getElementById('enquiryMsg').value.trim()
      let phone=document.getElementById('enquiryPhone').value
  
      let dataToSend={
        'name':name,
        'message':message,
        'phone':phone,
      }
    
      fetch('/callRequest/', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json', 'X-CSRFToken': document.getElementById('hiddenCsrfToken').value,
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
            // alert('Something went wrong! Please try again after some time...');

            break;
          default:
            var alertMessage = document.getElementById("alertMessage"); 
            alertMessage.innerText = "We'll be in touch soon.";
            showAlert()
  

              // modal closing after form submit
              var btnModal = document.getElementById("mymodal2close");
  
              btnModal.onclick=function(){
                if(!modalOpened)
                {
                  console.log("modal closing after submit")
                  modal2.style.top=''
                  modal2.style.opacity='';
                  modal2.style.pointerEvents='';
                  document.querySelector('html').style.overflow='scroll'
                }
              }
            
            
            // alert("We'll be in touch soon.")
        }
      })
      
      modalcloseonsubmit2()
    
    }