var createCatUL = function(){
  var catUL = document.createElement('ul')
  catUL.classList.add('cat')
  return catUL
}

var createCatName = function(name){
  var catName = document.createElement('li')
  catName.innerText = "Name: " + name
  return catName
}

var createCatFood = function(food){
  var catFood = document.createElement('li')
  catFood.innerText = "Favourite food: " + food
  return catFood
}

var createCatImg = function(url){
  var catImg 
  var catImg = document.createElement('li')
  imgString = '<img width="500" src=' + url + '>'
  catImg.innerHTML = imgString
  return catImg
}

var appendElements = function(ul,name,food,img){
  ul.appendChild(name)
  ul.appendChild(food)
  ul.appendChild(img)

  var cats = document.querySelector('#cats')

  cats.appendChild(ul)
}

var createCat = function(name,food,img){
  var ul = createCatUL()
  var name = createCatName(name)
  var food = createCatFood(food)
  var img = createCatImg(img)

  appendElements(ul,name,food,img)
}

var app = function(){
  createCat('Shere Khan', 'Human',"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Tigress_at_Jim_Corbett_National_Park.jpg/1200px-Tigress_at_Jim_Corbett_National_Park.jpg")
  createCat('Selina','Bats',"https://s-media-cache-ak0.pinimg.com/736x/25/0e/b6/250eb6349d66c11aa185b4a97ec6b628.jpg")
}

window.onload = app;