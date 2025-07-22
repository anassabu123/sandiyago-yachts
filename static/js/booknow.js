function myFunction(x) {
    if (x.matches) { 
      // window.location.reload()
      const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        margin:10,

        slidesPerView: 4, 
        spaceBetween: 5,

        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
      // return false

      
    } else {
      // window.location.reload();
      const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        slidesPerView: 4,
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
    }
  }
  
var x = window.matchMedia("(max-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes




 const shift = (event)=>{
  let elementImg = event.currentTarget;
  let srcImg = elementImg.children[0].src;
  console.log(srcImg)

  // let srcImgScale = elementImg.children[0].style.transform='scale(1.2)'

  // console.log(srcImgScale);
  
  let mainImg = document.querySelector('.right-slide')
  let mainImgsrc = mainImg.children[0];
  // console.log(mainImgsrc)
  // SHIFTING
  mainImgsrc.src = srcImg;
  // console.log(mainImgsrc)


  // image Scale code ===========================
  const allImages = document.querySelectorAll('.imgB')
  // console.log(allImages)
  Array.from(allImages).forEach((element,index)=>{
    element.classList.remove('scaleimg')
  })
  // console.log(event.currentTarget.children[0])
  event.currentTarget.children[0].classList.add('scaleimg') 
 }



//  This code for mobile slider
 const shift2 = (event)=>{
  let elementImg = event.currentTarget;
  let srcImg = elementImg.children[0].src;
  let mainImg = document.querySelector('.right-slide2')
  let mainImgsrc = mainImg.children[0];
  console.log(mainImgsrc)
  // SHIFTING
  mainImgsrc.src = srcImg;
  // console.log(mainImgsrc)


  // img Scale code=================
  const allImages = document.querySelectorAll('.imgB')
  // console.log(allImages)
  Array.from(allImages).forEach((element,index)=>{
    element.classList.remove('scaleimg')
  })
  // console.log(event.currentTarget.children[0])
  event.currentTarget.children[0].classList.add('scaleimg')
    
 }

 