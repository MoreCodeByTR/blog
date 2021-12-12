function Cool(){
  var name='tr'
  var arr=[1,2,3];

  function addArr(i){
    arr.push(i)
    console.log(arr)
  }

  function setName(i){
      name=i
  }

  function getName(){
   return name
}

  return {
    addArr:addArr,
    getName:getName,
    setName:setName
  }
}

var foo=Cool();

console.log(foo.getName())
foo.setName('morecode')
console.log(foo.getName())
