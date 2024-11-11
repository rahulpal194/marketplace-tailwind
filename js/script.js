//price toggle 

document.querySelector('.year').classList.add('hidden')
function priceToggle (){
    var month = document.querySelector('.month');
    var year = document.querySelector('.year');
    if (document.getElementById("toggle").checked == true) {
     document.getElementById('monthly').classList.remove('text-primary')
     document.getElementById('yearly').classList.add('text-primary')
     month.classList.add('hidden');
    year.classList.remove('hidden');
   } else {
     document.getElementById('monthly').classList.add('text-primary')
     document.getElementById('yearly').classList.remove('text-primary')
     month.classList.remove('hidden');
     year.classList.add('hidden');
    
   }
  }