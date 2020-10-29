head.insertAdjacentHTML('beforeend',`<button id="yes" >Yes</button>`)
yes.style.display="none";

// export function addlist(){
//     add.addEventListener('click',function(){
//         list.insertAdjacentHTML('beforeend',`
//         <li>
//         <input type="checkbox" class="checkbox"><label for="checkbox"> ${text.value} </label>
//         <button class"edit">edit</button>
//         <button class="del"><i class="fa fa-trash"></i></button>
//         </li>`)
//         text.value = ""
//         for(let i=0;i<window.del.length;i++){
//             window.del[i].addEventListener('click',function(e){
//                 e.target.parentElement.remove()
//             })
//         }
//     })
    
// }

export function addlistEnter(){
    var name = []
    text.addEventListener("keyup",function(e){
        if(e.keyCode ===13){
            list.insertAdjacentHTML('beforeend',`
            <li>
            <input type="checkbox" class="checkbox"><label for="checkbox"><p class="content"> ${text.value} </p></label>
            <button class="edit">edit</button>
            <button class="del">x</button>
            </li>`)
            text.value = ""
            name.push(text.value)
        }
        deletelistEnter()
        editlistEnter()
    })
    function deletelistEnter(){
        for(let j=0;j<window.del.length;j++){
            window.del[j].addEventListener('click',function(e){
                e.target.parentElement.remove()
            })
        }
    }
    function editlistEnter(){
        for(let k=0;k<window.edit.length;k++){
            window.edit[k].addEventListener('click',function(e){
                console.log(e.target)
                let p=document.getElementsByTagName("p")
                console.log(p[k].innerHTML)
                text.value = name[k]
                yes.style.display = "block";                     
                yes.addEventListener('click',function(){
                    window.content[k].innerHTML = text.value
                    yes.style.display = "none";
                })
            })
        }
    }
     
}
