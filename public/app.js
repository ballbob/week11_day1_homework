var app = function(){
  var catUL = document.createElement('ul')
  catUL.classList.add('cat')

  var catName = document.createElement('li')
  catName.innerText = 'Shere Khan'

  var catFood = document.createElement('li')
  catFood.innerText = 'Man'

  var catImg = document.createElement('li')
  catImg.innerHTML = '<img width ="500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Tigress_at_Jim_Corbett_National_Park.jpg/1200px-Tigress_at_Jim_Corbett_National_Park.jpg">'

  catUL.appendChild(catName)
  catUL.appendChild(catFood)
  catUL.appendChild(catImg)

  var cats = document.querySelector('#cats')

  cats.appendChild(catUL)

}

window.onload = app;