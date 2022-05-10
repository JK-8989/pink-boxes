
// console.log(button)
  const button = document.getElementById('push')
  const div = document.getElementById('area')

  button.addEventListener('click', function(){
  console.log('Div creating')
  const newDiv = document.createElement('div')

  newDiv.style.background = "pink"
  newDiv.style.border = "1px solid grey"
  newDiv.style.borderRadius = "10px"
  newDiv.style.width = "100px"
  newDiv.style.height = "100px"
  
  div.appendChild(newDiv)
  
})
