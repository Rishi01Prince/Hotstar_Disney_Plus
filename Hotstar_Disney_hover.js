//Video and images just below slider

const clip =  document.querySelectorAll('.card-video');
for(let i =0 ; i<clip.length ; i++){
  clip[i].addEventListener('mouseenter',function(e){
    clip[i].play();
  })

  clip[i].addEventListener('mouseout',function(e){
    clip[i].pause();
  })
  
}



