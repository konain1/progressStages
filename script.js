document.addEventListener('DOMContentLoaded', () => {
    

    const next = document.getElementById('next');
    const prev  = document.getElementById('prev')
    const line = document.querySelector('.line')
    const progressbar = document.getElementById('progressbar')
    console.log(progressbar)

   let currentWidth = 10;
   updateProgressbar()
   console.log(currentWidth)
   

//    if(currentWidth < 80){
//    next.disabled = false;
//    }else{
//     next.disabled = true
//    }

//    if(currentWidth < 35){
//     prev.disabled = true
//    }else{
//     prev.disabled = false
//    }

   
   function updateProgressbar(){
   
    next.disabled = currentWidth >=85;
    prev.disabled = currentWidth <=10

    line.style.width = `${currentWidth}%`
    // progressbar.innerText = `${currentWidth}%`
   
   }

    if (next) {
       
        next.addEventListener('click', () => {
            console.log(currentWidth)
            if(currentWidth < 85 )
                currentWidth = currentWidth + 25
            // line.style.width = `${currentWidth}%`
            // if(currentWidth > 80){
            //     next.disabled = true
            // }
            updateProgressbar()
           
        });
    } else {
        console.log('Next button not found!');
    }

    prev.addEventListener('click',()=>{
     
        // if(currentWidth < 100){
        //     next.disabled = false
        // }

        if(currentWidth > 30){
            currentWidth= currentWidth - 25;
            // line.style.width = `${currentWidth}%`
            updateProgressbar()
        }
    })

});
