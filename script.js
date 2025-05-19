

var isstatus = document.querySelector('p')
var btn = document.querySelector('.add-btn')
// var remove=document.querySelector('.remove-btn')


var avc = 0
btn.addEventListener('click', function () {

  if (avc == 0) {
    isstatus.innerHTML = "Request Send..."
    isstatus.style.color = "black"
    
    setTimeout(function () {
      isstatus.innerHTML = "Friend"
      isstatus.style.color = "green"
      btn.innerHTML = "Remove Friend"
      btn.style.backgroundColor = "red"
      avc = 1
    }, 3000)
  } else {
    isstatus.innerHTML = "Removing....."
    isstatus.style.color = "black"
    setTimeout(function () {

      isstatus.innerHTML = "Stranger"
      isstatus.style.color = "red"
      btn.innerHTML = "Add Friend"
      btn.style.backgroundColor = "green"


      avc = 0

    }, 2000)

  }
})
