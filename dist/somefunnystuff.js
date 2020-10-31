/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! namespace exports */
/*! export addClick [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addEnter [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClick": () => /* binding */ addClick,
/* harmony export */   "addEnter": () => /* binding */ addEnter
/* harmony export */ });
head.insertAdjacentHTML('beforeend',`<button id="yes" >Yes</button>`)
yes.style.display="none";

//add list with click
function addClick(){
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
function addEnter(){
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
     



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
const {addEnter, addClick} = __webpack_require__(/*! ./functions */ "./src/functions.js")

let head = document.getElementById("head")
let text = document.getElementById("text")
let add = document.getElementById("add")
let list = document.getElementById("list")
window.del = document.getElementsByClassName("del")
window.edit = document.getElementsByClassName("edit")
let yes= document.getElementById("yes")



addEnter()
addClick()
})();

/******/ })()
;
//# sourceMappingURL=somefunnystuff.js.map