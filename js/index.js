let humbergerId = document.getElementById('humbergerId')
let navBarId = document.getElementById('navBar')
let closeBtn = document.getElementById('closeBtn')
humbergerId = humbergerId.addEventListener('click', function () {
  navBarId.classList.add('active')
})
closeBtn = closeBtn.addEventListener('click', function () {
  navBarId.classList.remove('active')
})
