var createCatUL = function(){
  var catUL = document.createElement('ul')
  catUL.classList.add('cat')
  return catUL
}

var createCatName = function(name){
  var catName = document.createElement('li')
  catName.innerText = name
  return catName
}

var createCatFood = function(food){
  var catFood = document.createElement('li')
  catFood.innerText = food
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
  createCat('Shere Khan', 'Human',"tiger.jpg")
}

window.onload = app;