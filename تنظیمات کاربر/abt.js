var sett = document.getElementById('setting'); 
var button = document.getElementById('button'); 
var user = document.querySelector('.sectionUserSetting'); 


sett.addEventListener('click' , ()=>{
    user.classList.toggle('active')
    if(user.style.display == "flex") {
        user.style.display =  'none';
      } else {
      
        user.style.display ='flex';
      }
 
})
var arr = document.querySelectorAll('.inputs'); 


  window.onload = function(){
     var saver =localStorage.getItem("fild");
     if (saver){

    document.getElementById('inputs').value=saver 
   document.getElementById('inps').value=saver
     }
  }
button.addEventListener('click' , function(){



arr.forEach(e => {
var inputs = document.getElementById('inputs'); 
var inps = document.getElementById('inps'); 

  const obj ={
    a:inputs.value,
    b:inps.value
}
localStorage.setItem('fild', JSON.stringify(obj));


});



})
