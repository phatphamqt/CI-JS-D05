head.insertAdjacentHTML('beforeend',`<button id="yes" >Yes</button>`)
yes.style.display="none";

//add list with click
export function addClick(){
    add.addEventListener('click',function(){
        if(text.value!=""){
            list.insertAdjacentHTML('beforeend',`
            <li>
                <input type="checkbox" class="checkbox">
                <label for="checkbox"><p class="content"> ${text.value} </p></label>
                <button class="edit">edit</button>
                <button class="del">x</button>
            </li>`)
            text.value = ""
        } else {alert("too short!")}
        deleteClick()
    })
    
}

//delete button adding with click
function deleteClick(){
    for(let i=0;i<window.del.length;i++){
        window.del[i].addEventListener('click',function(e){
            e.target.parentElement.remove()
        })
        window.edit[i].addEventListener('click',function(e){
            console.log(e.target.parentElement.children[1].innerText)
            text.value = e.target.parentElement.children[1].innerText
            yes.style.display = "block";                     
            yes.addEventListener('click',function(){
                e.target.parentElement.children[1].innerText = text.value
                yes.style.display = "none";
            })
    
        })
    }
}


//add list with enter 
export function addEnter(){
    var name = []
    text.addEventListener("keyup",function(e){
        if(e.keyCode ===13){
            if(text.value!=""){
                name.push(text.value)
                list.insertAdjacentHTML('beforeend',`
                <li>
                <input type="checkbox" class="checkbox">
                <label for="checkbox"><p class="content"> ${text.value} </p></label>
                <button class="edit">edit</button>
                <button class="del">x</button>
                </li>`)
                text.value = ""
                name.push(text.value)
            } else{alert("too short!")}
        } 
        deleteEnter()
    })
}

//delete button adding with enter
function deleteEnter(){
    for(let j=0;j<window.del.length;j++){
        window.del[j].addEventListener('click',function(e){
            e.target.parentElement.remove()
        })
        // edit part
        window.edit[j].addEventListener('click',function(e){
            console.log(e.target.parentElement.children[1].innerText)
            text.value = e.target.parentElement.children[1].innerText
            yes.style.display = "block";                     
            yes.addEventListener('click',function(){
                e.target.parentElement.children[1].innerText = text.value
                yes.style.display = "none";
            })
        })
    }
}
     

