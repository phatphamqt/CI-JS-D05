let text = document.getElementById("text")
let add = document.getElementById("add")
let list = document.getElementById("list")

function addlist(){
    add.addEventListener('click',function(){
        list.insertAdjacentHTML('beforeend',`<li><input type="checkbox" class="checkbox"><label for="checkbox"> ${text.value} </label><button class="del"><i class="fa fa-trash"></i></button></li>`)      
        window.del = document.getElementsByClassName("del")
        text.value = ""
        for(i=0;i<window.del.length;i++){
            window.del[i].addEventListener('click',function(e){
                e.target.parentElement.parentElement.remove()
        })
    }
    })
    
}
addlist()

text.addEventListener("keyup",function(e){
    if(e.keyCode ===13){
        list.insertAdjacentHTML('beforeend',`<li><input type="checkbox" class="checkbox"><label for="checkbox"> ${text.value} </label><button class="del"><i class="fa fa-trash"></i></button></li>`)      
        window.del = document.getElementsByClassName("del")
        text.value = ""
        for(i=0;i<window.del.length;i++){
            window.del[i].addEventListener('click',function(e){
                e.target.parentElement.parentElement.remove()
        })
    }
    }
})
