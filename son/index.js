let text = document.getElementById("text")
let add = document.getElementById("add")
let list = document.getElementById("list")


add.addEventListener('click',function(){
    list.insertAdjacentHTML('beforeend',`<li><input type="checkbox">${text.value} <button class="del">X</button></li>`) 
    let del = document.getElementsByClassName("del")
    console.log(del)
    

})
